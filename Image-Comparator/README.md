**Image Matrix Comparison**

Requirement: Face Detection
	           Numpy

Details:
	-FaceDetection library is used for face encoding extraction from Detected Image folder
	-Euclidean law is used to detect the distance between two image encoding numpy arrays
	-0.0 to 6.0 is the accurate limit, over this limit may cause invalid matches.
	-FaceDetection library matching has not been used, because of faster processing issues.
	-Numpy library is used for matrix matching becasue its a c library, faster compilation and processing for complex matrices. 
