# Image Postprocessor

Service to save and edit faces.

## Usage

Run this in your terminal.

```bash
python3 rest_api.py
```

## Endpoints

### Postprocess - Save Face

```bash
curl --;location --;request; POST; 'localhost:8080/api/v1/postprocess'; \
--form; 'image=@/path/to/image'
```

###### Response

```json
{
  "status": "success", 
  "message": "filename successfully saved"
}
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
