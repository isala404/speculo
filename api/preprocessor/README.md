# Image Preprocessor

Receive the video from the frontend, find the faces in it frame by frame and return that data to the Front End.

* Service runs on port 8080

## Usage

Run this in your terminal.

```bash
python3 rest_api.py
```

## Endpoints

### Preprocess

```bash
curl --;location --;request; POST; 'localhost:8080/api/v1/preprocess'; \
--form; 'video=@/path/to/video'
```

###### Response

```json
{
    "status" : "success",
    "data" : []
}
```

The data is very long, you can find it [here](https://hastebin.com/ediqulobug.json)

## License
[MIT](https://choosealicense.com/licenses/mit/)
