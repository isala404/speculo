# Changes
- applied migrations to Tensorflow 2.0
- created detect_image_fast method strip all the unnecessary processing while inferencing model
- scale down the image size before processing so it required less number of operation (improve fps)
- scaled up the output so when sent the next model it won't lose any features (kept the original image intact)
- last 2 changes are done in the `examples/tf-serving-webcam/inference.py` file so the backend guys can implement that logic easily

