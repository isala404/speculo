FROM tensorflow/tensorflow:latest-gpu-py3

WORKDIR /models/facedetector

COPY . .

RUN pip3 install -r requirements.txt

CMD python3 rest_api.py