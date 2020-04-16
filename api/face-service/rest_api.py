# standard library
import logging
import os

# 3rd party packages
import json
from aiohttp import web

# local package
from face_service import FaceService

# method to save image from form-data from a request
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


async def add_face(request):
	try:
		filename = await save_image(request)
		
		await FaceService().add_face(picture=filename)
		
		name = filename.split('.')[0]
		
		response_obj = {'status': 'success', 'message': f'{name} successfully saved!'}
		
		return web.Response(text=json.dumps(response_obj), status=201)
	
	except Exception as e:
		logging.error(e)
		# Failed path where name is not set
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.Response(text=json.dumps(response_obj), status=500)


async def get_all_faces(request):
	try:
		response_obj = {'status': 'success'}
		status_code = 200
		
		faces = FaceService().get_all_faces()
		
		if not faces:
			status_code = 204
		
		response_obj["data"] = f"{faces}"
		
		return web.Response(text=json.dumps(response_obj), status=status_code)
	
	except Exception as e:
		logging.error(e)
		
		# Failed path where name is not set
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.Response(text=json.dumps(response_obj), status=500)


async def get_face_by_id(request):
	try:
		response_obj = {'status': 'success'}
		face_id = request.match_info['id']
		
		face = FaceService().get_face_by_id(face_id=face_id)
		
		response_obj["data"] = f"{face}"
		
		return web.Response(text=json.dumps(response_obj), status=200)
	
	except Exception as e:
		logging.error(e)
		
		# Failed path where name is not set
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.Response(text=json.dumps(response_obj), status=500)


async def update_face(request):
	try:
		face_id = request.match_info['id']
		
		filename = await save_image(request)
		
		await FaceService().update_face(face_id=face_id, new_picture=filename)
		
		name = filename.split('.')[0]
		
		response_obj = {'status': 'success', 'message': f'{name} successfully updated!'}
		
		return web.Response(text=json.dumps(response_obj), status=200)
	
	except Exception as e:
		logging.error(e)
		
		# Failed path where name is not set
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.Response(text=json.dumps(response_obj), status=500)


async def delete_all_faces(request):
	try:
		response_obj = {'status': 'success'}
		
		FaceService().delete_all_faces()
		
		return web.Response(text=json.dumps(response_obj), status=200)
	except Exception as e:
		logging.error(e)
		
		# Failed path where name is not set
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.Response(text=json.dumps(response_obj), status=500)


async def delete_face(request):
	try:
		face_id = request.match_info['id']
		
		label = FaceService().delete_face(face_id=face_id)
		
		response_obj = {'status': 'success', 'message': f'{label} ({face_id}) successfully deleted!'}
		
		return web.Response(text=json.dumps(response_obj), status=200)
	
	except Exception as e:
		logging.error(e)
		
		# Failed path where name is not set
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.Response(text=json.dumps(response_obj), status=500)


async def label_face(request):
	try:
		face_id = request.match_info['id']
		
		data = await request.json()
		label = data['label']
		
		FaceService().label_face(face_id=face_id, label=label)
		
		response_obj = {'status': 'success', 'message': f'{label} ({face_id}) successfully updated!'}
		
		return web.Response(text=json.dumps(response_obj), status=200)
	
	except Exception as e:
		logging.error(e)
		
		# Failed path where name is not set
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.Response(text=json.dumps(response_obj), status=500)


async def blacklist_face(request):
	try:
		response_obj = {'status': 'success'}
		
		face_id = request.match_info['id']
		
		face_label = FaceService().blacklist_face(face_id=face_id)
		
		response_obj["message"] = f" {face_label} ({face_id}) successfully blacklisted!"
		
		return web.Response(text=json.dumps(response_obj), status=200)
	except Exception as e:
		print(e)
		# Failed path where name is not set
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.Response(text=json.dumps(response_obj), status=500)


async def whitelist_face(request):
	try:
		response_obj = {'status': 'success'}
		
		face_id = request.match_info['id']
		
		face_label = FaceService().whitelist_face(face_id=face_id)
		
		response_obj["message"] = f" {face_label} ({face_id}) successfully whitelisted!"
		
		return web.Response(text=json.dumps(response_obj), status=200)
	except Exception as e:
		print(e)
		# Failed path where name is not set
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.Response(text=json.dumps(response_obj), status=500)


app = web.Application()

# the url routes with their respective handlers
routes = [
	web.get('/api/v1/faces', get_all_faces),
	web.get('/api/v1/faces/{id}', get_face_by_id),
	web.post('/api/v1/faces', add_face),
	web.delete('/api/v1/faces', delete_all_faces),
	web.delete('/api/v1/faces/{id}', delete_face),
	web.put('/api/v1/faces/{id}', update_face),
	web.patch('/api/v1/faces/{id}/label', label_face),
	web.patch('/api/v1/faces/{id}/blacklist', blacklist_face),
	web.patch('/api/v1/faces/{id}/whitelist', whitelist_face),
]

app.add_routes(routes)

web.run_app(app)
