# standard package
import os

# 3rd party packages
import json
from aiohttp import web

# local package
from video_downscaler import VideoDownscaler


async def downscale(request):
	try:
		reader = await request.multipart()
		
		# reader.next() will `yield` the fields of the form
		field = await reader.next()
		filename = field.filename
		
		size = 0
		with open((os.getcwd() + '/videos/' + filename), 'wb') as f:
			while True:
				chunk = await field.read_chunk()  # 8192 bytes by default.
				if not chunk:
					break
				size += len(chunk)
				f.write(chunk)
		
		VideoDownscaler(filename=filename.split('.')[0]).downscale()
		
		file_path = os.getcwd() + '/videos/' + filename
	
		return web.FileResponse(path=file_path, status=200)
	
	except Exception as e:
		print(e)
		# Failed path where name is not set
		response_obj = {'status': 'failed', 'reason': str(e)}
		
		# return failed with a status code of 500 i.e. 'Server Error'
		return web.Response(text=json.dumps(response_obj), status=500)


app = web.Application()

routes = [
	web.post('/api/v1/downscale', downscale),
]

app.add_routes(routes)

web.run_app(app)
