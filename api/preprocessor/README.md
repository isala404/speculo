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
    "data" : [
      { 
        "id" : "5e8636c0f8e0675aa12ab0cd",
        "name" : "John Doe",
        "timestamps" : [0.12, 0.17, 1.15]
      }     
    ]
}
```

Here's an example of how the actual [response](https://hastebin.com/ediqulobug.json) will look like.

## License
[MIT](https://choosealicense.com/licenses/mit/)
