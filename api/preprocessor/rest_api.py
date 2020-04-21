import json
import logging
import os
from aiohttp import web

from image_preprocessor import ImagePreprocessor


async def preprocess_video(request):
	try:
		# Success path where name is set
		response_obj = {'status': 'success'}
		
		reader = await request.multipart()
		
		field = await reader.next()
		filename = field.filename
		
		size = 0
		with open(os.getcwd() + '/videos/' + filename, 'wb') as f:
			while True:
				chunk = await field.read_chunk()  # 8192 bytes by default.
				if not chunk:
					break
				size += len(chunk)
				f.write(chunk)
		
		data = ImagePreprocessor().preprocess(filename=filename)
		
		response_obj['data'] = data
		
		# return a success json response with status code 200 i.e. 'OK'
		return web.json_response(body=json.dumps(response_obj), status=200)
	
	except Exception as e:
		logging.error(e)
		# Failed path where name is not set
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.json_response(body=json.dumps(response_obj), status=500)


app = web.Application()

routes = [
	web.post('/api/v1/preprocess', preprocess_video),
]

app.add_routes(routes)

web.run_app(app)
