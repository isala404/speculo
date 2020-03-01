FROM tensorflow/tensorflow:latest-gpu

WORKDIR /models/facedetector

COPY . .

RUN pip install -r requirements.txt

CMD python3 rest_api.py