FROM python:3.8-alpine

RUN apk add --update --no-cache py3-numpy

ENV PYTHONPATH=/usr/lib/python3.8/site-packages

WORKDIR /app

COPY requirements.txt .

RUN pip3 install -r requirements.txt

COPY . .

CMD ["gunicorn", "-b", "0.0.0.0:8000", "app:app"]