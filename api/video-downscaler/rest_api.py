# 3rd party packages
import json
from aiohttp import web


# local package


async def save_face_data(request):
	try:
		
		response_obj = {'status': 'success', 'message': str(request.json())}
		
		return web.Response(text=json.dumps(response_obj), status=200)
	
	except Exception as e:
		print(e)
		# Failed path where name is not set
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.Response(text=json.dumps(response_obj), status=500)


app = web.Application()

routes = [
	web.post('/api/v1/downscale', save_face_data),
]

app.add_routes(routes)

web.run_app(app)
