# standard library
import logging
import os

# 3rd party packages
import json
from aiohttp import web

# local package
from face_service import FaceService

logging.basicConfig(filename='app.log', filemode='w', format='%(name)s - %(levelname)s - %(message)s')


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
		
		response_obj = {'status': 'success', 'message': f'{name} successfully added!'}
		
		return web.json_response(response_obj, status=201)
	
	except Exception as e:
		logging.error(e)
		
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.json_response(response_obj, status=500)


async def add_face_with_fingerprint(request):
	try:
		data = await request.json()
		
		data = json.loads(data)
		fingerprint = data['fingerprint']
		
		face_id = FaceService().add_face_with_fingerprint(fingerprint=fingerprint)
		
		response_obj = {'status': 'success', 'message': f'Unknown successfully added!', 'id': face_id}
		
		return web.json_response(response_obj, status=201)
	
	except Exception as e:
		logging.error(e)
		
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.json_response(response_obj, status=500)


async def get_all_faces(request):
	try:
		response_obj = {'status': 'success'}
		status_code = 200
		
		fingerprint_param = request.rel_url.query['fingerprint']
		
		faces = FaceService().get_all_faces(include_fingerprint=fingerprint_param)
		
		if not faces:
			status_code = 204
		
		response_obj["data"] = faces
		
		return web.json_response(response_obj, status=status_code)
	
	except Exception as e:
		logging.error(e)
		
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.json_response(response_obj, status=500)


async def get_face_by_id(request):
	try:
		response_obj = {'status': 'success'}
		face_id = request.match_info['id']
		
		face = FaceService().get_face_by_id(face_id=face_id)
		
		response_obj["data"] = face
		
		return web.json_response(response_obj, status=200)
	
	except Exception as e:
		logging.error(e)
		
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.json_response(response_obj, status=500)


async def update_face(request):
	try:
		face_id = request.match_info['id']
		
		filename = await save_image(request)
		
		await FaceService().update_face(face_id=face_id, new_picture=filename)
		
		name = filename.split('.')[0]
		
		response_obj = {'status': 'success', 'message': f'{name} successfully updated!'}
		
		return web.json_response(response_obj, status=200)
	
	except Exception as e:
		logging.error(e)
		
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.json_response(response_obj, status=500)


async def delete_all_faces(request):
	try:
		response_obj = {'status': 'success'}
		
		FaceService().delete_all_faces()
		
		return web.json_response(response_obj, status=200)
	except Exception as e:
		logging.error(e)
		
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.json_response(response_obj, status=500)


async def delete_face(request):
	try:
		face_id = request.match_info['id']
		
		label = FaceService().delete_face(face_id=face_id)
		
		response_obj = {'status': 'success', 'message': f'{label} successfully deleted!'}
		
		return web.json_response(response_obj, status=200)
	
	except Exception as e:
		logging.error(e)
		
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.json_response(response_obj, status=500)


async def label_face(request):
	try:
		face_id = request.match_info['id']
		
		data = await request.json()
		label = data['label']
		
		FaceService().label_face(face_id=face_id, label=label)
		
		response_obj = {'status': 'success', 'message': f'{label} successfully updated!'}
		
		return web.json_response(response_obj, status=200)
	
	except Exception as e:
		logging.error(e)
		
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.json_response(response_obj, status=500)


async def blacklist_face(request):
	try:
		response_obj = {'status': 'success'}
		
		face_id = request.match_info['id']
		
		face_label = FaceService().blacklist_face(face_id=face_id)
		
		response_obj["message"] = f" {face_label} successfully blacklisted!"
		
		return web.json_response(response_obj, status=200)
	except Exception as e:
		logging.error(e)
		
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.json_response(response_obj, status=500)


async def whitelist_face(request):
	try:
		response_obj = {'status': 'success'}
		
		face_id = request.match_info['id']
		
		face_label = FaceService().whitelist_face(face_id=face_id)
		
		response_obj["message"] = f" {face_label} ({face_id}) successfully whitelisted!"
		
		return web.json_response(response_obj, status=200)
	except Exception as e:
		logging.error(e)
		
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.json_response(response_obj, status=500)


app = web.Application()

# the url routes with their respective handlers
routes = [
	web.get('/api/v1/faces', get_all_faces),
	web.get('/api/v1/faces/{id}', get_face_by_id),
	web.post('/api/v1/faces', add_face),
	web.post('/api/v1/faces/unknown', add_face_with_fingerprint),
	web.delete('/api/v1/faces', delete_all_faces),
	web.delete('/api/v1/faces/{id}', delete_face),
	web.put('/api/v1/faces/{id}', update_face),
	web.patch('/api/v1/faces/{id}/label', label_face),
	web.patch('/api/v1/faces/{id}/blacklist', blacklist_face),
	web.patch('/api/v1/faces/{id}/whitelist', whitelist_face),
]

app.add_routes(routes)

web.run_app(app)
