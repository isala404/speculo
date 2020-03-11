FROM tensorflow/tensorflow:latest-gpu-py3

WORKDIR /models/facedetector

COPY requirements.txt .

RUN pip3 install -r requirements.txt

COPY . .

CMD python3 rest_api.py