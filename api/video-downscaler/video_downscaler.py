# standard libraries
import os
import subprocess


class VideoDownscaler:
	def __init__(self, filename):
		self.filename = filename
	
	def downscale(self):
		
		for count in range(3):
			print(count, count % 2 == 0)
			if count % 2 == 0:
				subprocess.call(
					f"ffmpeg -y -i ./videos/{self.filename}.mp4 -vf mpdecimate,setpts=N/FRAME_RATE/TB ./videos/{self.filename}_out.mp4",
					shell=True
				)
				
				os.remove(f'./videos/{self.filename}.mp4')
			else:
				subprocess.call(
					f"ffmpeg -y -i ./videos/{self.filename}_out.mp4 -vf mpdecimate,setpts=N/FRAME_RATE/TB ./videos/{self.filename}.mp4",
					shell=True
				)
				
				os.remove(f'./videos/{self.filename}_out.mp4')
		
		os.rename(f'./videos/{self.filename}_out.mp4', f'./videos/{self.filename}.mp4')
