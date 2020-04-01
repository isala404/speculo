# 3rd party packages
import json
from aiohttp import web

from blacklister import Blacklister


async def blacklist_face(request):
	try:
		response_obj = {'status': 'success'}
		
		data = await request.json()
		
		face_id = data['face_id']
		
		Blacklister(face_id=face_id).blacklist()
		
		response_obj["message"] = f"{face_id} successfully blacklisted!"
		
		return web.Response(text=json.dumps(response_obj), status=200)
	except Exception as e:
		print(e)
		# Failed path where name is not set
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.Response(text=json.dumps(response_obj), status=500)


app = web.Application()

routes = [
	web.post('/api/v1/blacklist', blacklist_face),
]

app.add_routes(routes)

web.run_app(app)
