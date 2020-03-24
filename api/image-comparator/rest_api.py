import json

from aiohttp import web

from app import ImageComparator


async def handle_get(request):
	return web.Response(text=json.dumps({'status': 'success'}))


async def handle_post(request):
	try:
		body = await request.json()
		
		matrix = body['instances']
		
		# return a success json response with status code 200 i.e. 'OK'
		return web.Response(text=json.dumps(ImageComparator().matrix_matcher(matrix=matrix)), status=200)
	
	except Exception as e:
		print(str(e))
		# Failed path where name is not set
		response_obj = {'status': 'failed', 'reason': str(e)}
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.Response(text=json.dumps(response_obj), status=500)


app = web.Application()

routes = [
	web.get('/test', handle_get),
	web.post('/matrix-matcher', handle_post),
]

app.add_routes(routes)

web.run_app(app)
