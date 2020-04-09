FROM python:3.8-slim-buster

RUN apt-get update && apt-get install -y python3-numpy

ENV PYTHONPATH=/usr/lib/python3.8/site-packages

WORKDIR /app

COPY requirements.txt .

RUN pip3 install -r requirements.txt

COPY . .

CMD python3 rest_api.py
