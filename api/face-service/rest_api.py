# standard library
import os

# 3rd party packages
import json
from aiohttp import web

# local package
from face_service import FaceService


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


async def get_all_faces(request):
	try:
		response_obj = {'status': 'success'}
		
		faces = FaceService().get_all_faces()
		
		response_obj["data"] = f"{faces}"
		
		return web.Response(text=json.dumps(response_obj), status=200)
	
	except Exception as e:
		print(e)
		# Failed path where name is not set
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.Response(text=json.dumps(response_obj), status=500)


async def add_face(request):
	pass


async def update_face(request):
	pass


async def delete_face(request):
	pass


async def blacklist_face(request):
	pass


async def whitelist_face(request):
	pass


app = web.Application()

routes = [
	web.get('/api/v1/faces/all', get_all_faces()),
	web.post('/api/v1/faces/add', add_face),
	web.put('/api/v1/faces/update', update_face()),
	web.delete('/api/v1/faces/delete', delete_face()),
	web.put('/api/v1/faces/blacklist', blacklist_face()),
	web.put('/api/v1/faces/whitelist', whitelist_face()),
]

app.add_routes(routes)

web.run_app(app)
