import json
import logging

from aiohttp import web

from comparator import ImageComparator

logging.basicConfig(filename='app.log', filemode='w', format='%(name)s - %(levelname)s - %(message)s')


async def compare_fingerprint(request):
	try:
		body = await request.json()
		
		# get the fingerprint from the request body
		matrix = body['instances']
		
		response_obj = await ImageComparator().matrix_matcher(matrix=matrix)
		response_obj['status'] = 'success'
		
		# return a success json response with status code 200 i.e. 'OK'
		return web.Response(text=json.dumps(response_obj), status=200)
	
	except Exception as e:
		logging.error(e)
		
		# Failed path where name is not set
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.Response(text=json.dumps(response_obj), status=500)


app = web.Application()

routes = [
	web.post('/api/v1/compare', compare_fingerprint),
]

app.add_routes(routes)

web.run_app(app)
