import json
import logging
import numpy as np
from aiohttp import web
from comparator import ImageComparator

logging.basicConfig(filename='app.log', filemode='w',
                    format='%(name)s - %(levelname)s - %(message)s')

logging.info(f"Starting ImageComparator")
comparator = ImageComparator()


async def predict(request):
    try:
        data = await request.json()
        if 'instances' not in data.keys():
            return web.Response(body=json.dumps({'error': 'instances-required'}),
                                status=400, content_type='application/json')

        fingerprint = np.array(data['instances'])

        if fingerprint.shape != comparator.COMPARATOR_SHAPE:
            logging.debug(f"error: client send mismatched input, intended shape {comparator.COMPARATOR_SHAPE}, "
                          f"given shape {fingerprint.shape}")
            return web.Response(body=json.dumps(
                {'error': f"input shape mismatched, intended shape {comparator.COMPARATOR_SHAPE}, "
                          f"given shape {fingerprint.shape}"}),
                                status=400, content_type='application/json')

        output = await comparator.get_best_match(fingerprint)
        
        return web.Response(body=json.dumps({'predictions': output}),
                            status=200, content_type='application/json')
    except Exception as e:
        logging.error('Error while processing a request')
        logging.exception(e)
        return web.Response(body=json.dumps({'error': str(e)}),
                            status=500, content_type='application/json')


async def add_new_face(request):
    try:
        data = await request.json()
        if 'fingerprint' not in data.keys():
            return web.Response(body=json.dumps({'error': 'fingerprint-required'}),
                                status=400, content_type='application/json')

        if 'id' not in data.keys() or not data['id']:
            return web.Response(body=json.dumps({'error': 'id-required'}),
                                status=400, content_type='application/json')

        fingerprint = np.array(data['fingerprint'])
        if fingerprint.shape != comparator.COMPARATOR_SHAPE:
            logging.debug(f"error: client send mismatched input, intended shape {comparator.COMPARATOR_SHAPE}, "
                          f"given shape {fingerprint.shape}")
            return web.Response(body=json.dumps(
                {'error': f"input shape mismatched, intended shape {comparator.COMPARATOR_SHAPE}, "
                          f"given shape {fingerprint.shape}"}),
                                status=400, content_type='application/json')


        if comparator.add_new_face(fingerprint, data['id']):
    
            return web.Response(body=json.dumps({'data': 'fingerprint-added'}),
                                status=200, content_type='application/json')
        else:
            return web.Response(body=json.dumps({'error': 'error while adding fingerprint'}),
                                status=200, content_type='application/json')
    except Exception as e:
        logging.error('Error while processing a request')
        logging.exception(e)
        return web.Response(body=json.dumps({'error': str(e)}),
                            status=500, content_type='application/json')

logging.info(f"Image Comparator running on localhost:8080")
app = web.Application()
app.add_routes([web.post('/v1/models/facecomparator:predict', predict)])
app.add_routes([web.post('/v1/models/facecomparator:addFace', add_new_face)])
web.run_app(app, port=8080)
