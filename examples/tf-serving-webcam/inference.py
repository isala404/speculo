import cv2
from facedetector.yolo.yolo import YOLO

video_capture = cv2.VideoCapture(0)

yolo = YOLO(draw=False, debug=False)

SIZE = 192

while True:
    ret, frame = video_capture.read()
    height, width, _ = frame.shape
    small_frame = cv2.resize(frame, (SIZE, SIZE))
    boxes = yolo.detect_image_fast(small_frame)
    for top, left, bottom, right in boxes:
        top *= height / SIZE
        right *= width / SIZE
        bottom *= height / SIZE
        left *= width / SIZE

        cv2.rectangle(frame, (int(left), int(top)), (int(right), int(bottom)), (0, 0, 255), 2)
    cv2.imshow('Video', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cv2.destroyAllWindows()
