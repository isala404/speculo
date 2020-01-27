import tensorflow as tf
import efficientnet.keras as efn
from efficientnet.keras import center_crop_and_resize, preprocess_input
import numpy as np
import cv2

model = efn.EfficientNetB7(weights='imagenet')
cap = cv2.VideoCapture(0)

while(True):
    # Capture frame-by-frame
    ret, frame = cap.read()

    # Display the resulting frame
    cv2.imshow('frame', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# When everything done, release the capture
cap.release()
cv2.destroyAllWindows()