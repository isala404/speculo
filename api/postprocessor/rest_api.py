# standard library
import os

# 3rd party packages
import json
from aiohttp import web

# local package
from postprocessor import ImagePostprocessor


async def save_image(request):
	reader = await request.multipart()
	
	# reader.next() will `yield` the fields of the form
	field = await reader.next()
	filename = field.filename
	
	size = 0
	with open((os.getcwd() + '/images/' + filename), 'wb') as f:
		while True:
			chunk = await field.read_chunk()  # 8192 bytes by default.
			if not chunk:
				break
			size += len(chunk)
			f.write(chunk)
	
	return filename


async def save_face_data(request):
	try:
		filename = await save_image(request)
		
		ImagePostprocessor(filename=filename).save_face_data()
		
		response_obj = {'status': 'success', 'message': str('{} successfully saved'''.format(filename))}
		
		return web.Response(text=json.dumps(response_obj), status=200)
	
	except Exception as e:
		print(e)
		# Failed path where name is not set
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.Response(text=json.dumps(response_obj), status=500)


# async def edit_face_data(request):
# 	try:
# 		filename = await save_image(request)
#
# 		return web.Response(text='{} successfully edited'''.format(filename))
#
# 	except Exception as e:
# 		print(e)
# 		# Failed path where name is not set
# 		response_obj = {'status': 'failed', 'reason': str(e)}
#
# 		# return failed with a status code of 500 i.e. 'Server Error'
# 		return web.Response(text=json.dumps(response_obj), status=500)


app = web.Application()

routes = [
	web.post('/api/v1/postprocess', save_face_data),
	# web.put('/api/v1/postprocess', edit_face_data),
]

app.add_routes(routes)

web.run_app(app)
