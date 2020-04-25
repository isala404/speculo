import json
import logging
import numpy as np
from aiohttp import web
from comparator import ImageComparator

logging.basicConfig(filename='app.log', filemode='w',
                    format='%(name)s - %(levelname)s - %(message)s')

comparator = ImageComparator()


async def predict(request):
    try:
        data = await request.json()
        if 'instances' not in data.keys():
            return web.Response(body=json.dumps({'error': 'instances-required'}),
                                status=400, content_type='application/json')

        fingerprint = np.array(data['instances'])
        if data.shape != comparator.COMPARATOR_SHAPE:
            return web.Response(body=json.dumps(
                {'error': f'input shape mismatched, shape of the passed image is {fingerprint.shape} '
                          f'and model is expecting shape {comparator.COMPARATOR_SHAPE}'}),
                status=400, content_type='application/json')

        output = comparator.get_best_match(fingerprint.reshape([-1]))

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
        if data.shape != comparator.COMPARATOR_SHAPE:
            return web.Response(body=json.dumps(
                {'error': f'input shape mismatched, shape of the passed image is {fingerprint.shape} '
                          f'and model is expecting shape {comparator.COMPARATOR_SHAPE}'}),
                status=400, content_type='application/json')

        if comparator.add_new_face(fingerprint.reshape([-1]), data['id']):
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


app = web.Application()
app.add_routes([web.post('/v1/models/comparator:predict', predict)])
app.add_routes([web.post('/v1/models/comparator:addFace', add_new_face)])
web.run_app(app, port=8080)
