from model import Speculo
from aiohttp import web
import json
from PIL import Image
from io import BytesIO
import base64


async def predict(request):
    try:
        try:
            data = await request.json()
        except:
            return web.Response(body=json.dumps({'error': 'this is not a fucking json request'}),
                                status=400, content_type='application/json')
        if 'image' not in data.keys():
            return web.Response(body=json.dumps({'error': 'send the image you dum fuck'}),
                                status=400, content_type='application/json')
        try:
            image = Image.open(BytesIO(base64.b64decode(data['image'])))
        except:
            return web.Response(body=json.dumps({'error': 'i said BASE64 image what the fuck is this ?'}),
                                status=400, content_type='application/json')
        return web.Response(body=json.dumps({'data': speculo.predict(image)}),
                            status=200, content_type='application/json')
    except Exception as e:
        print(e)
        return web.Response(body=json.dumps({'error': 'isala messed something up 🤦‍♂️'}),
                            status=400, content_type='application/json')


app = web.Application()
app.add_routes([web.post('/', predict)])
if __name__ == '__main__':
    speculo = Speculo()
    web.run_app(app)
