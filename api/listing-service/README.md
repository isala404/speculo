# Listing Service

Service to blacklist & whitelist faces in the database.

## Usage

Run this in your terminal.

```bash
python3 rest_api.py
```

## Endpoints

### Blacklist Face

```bash
curl --location --request POST 'localhost:8080/api/v1/blacklist' \
--header 'Content-Type: application/json' \
--data-raw '{
	"face_id" : "5e8399e7585423c569c7b7e1"
}'
```

###### Response

```json
{"status": "success", "message": " (5e8399e7585423c569c7b7e1) name successfully blacklisted!"}
```

### Blacklist Face

```bash
curl --location --request POST 'localhost:8080/api/v1/whitelist' \
--header 'Content-Type: application/json' \
--data-raw '{
	"face_id" : "5e8399e7585423c569c7b7e1"
}'
```

###### Response

```json
{"status": "success", "message": " (5e8399e7585423c569c7b7e1) name successfully whitelisted!"}
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
