# Image Comparator

Compares fingerprints in the database and returns the id, & name of a face.


## Run with Docker

Type the following command in the root folder. Add `--build` to the command if you are running this for the first time.

```bash
docker compose-up
```

## Run locally

Run `rest_api.py`, the port is 8080.

```bash
python3 rest_api.py
```

## Endpoints

### Comparator

```bash
curl --location --request POST 'localhost:8080/matrix-matcher' \
--header 'Content-Type: application/json' \
--data-raw 'FINGERPRINT'
```

The fingerprint is long, therefore I have seperated it to a json file [here](https://hastebin.com/ixedulezul.json).

##### Response 

If the fingerprint exists in the database.

```javascript
{
    "found": "true",
    "id": "face_1",
    "name" : "Akassh"
}
```

If the fingerprint doesn't exist in the database, it will be saved

```javascript
{
    "found": "false",
    "id": "face_2",
    "name" : "Unknown"
}
```


## License
[MIT](https://choosealicense.com/licenses/mit/)
