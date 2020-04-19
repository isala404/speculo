# Speculo API Gateway

API Gateway for Speculo.

* The data sent in the body must be encoded in `x-www-form-urlencoded`.
* Gateway runs on port 3000

## Installation

Use the node package manager [npm](https://www.npmjs.com/) to install the dependancies.

```bash
npm install
```

## Usage

Run this in your terminal.

```bash
npm index.js
```


## API Endpoints for User

### Registration

```bash
curl --location --request POST 'localhost:3000/user/register' \
--data-raw '{
  "name": "X",
  "password": "X",
  "email": "X"
}'
```

##### Response 

```json
{
    "status": "success",
    "message": "User added successfully!",
    "data": {
        "name": "X",
        "email": "X",
        "password": "X"
    }
}
```

### Authentication

```bash
curl --location --request POST 'http://localhost:3000/user/authenticate' \
--data-raw '{
  "name": "X",
  "password": "X",
  "email": "X"
}'
```

##### Response

```json
{
    "status":"success",
    "message":"User found!",
    "data": {
        "user":{
            "_id":"5e727788084e51bd64493713",
            "name":"X",
            "email":"X",
            "password":"$2b$10$l3tbwiNFc7F35dpzP69RX.ncA7q2T4BqfVxQzQNcDc9T/CHa6KOzm",
            "__v":0
        },
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNzI3Nzg4MDg0ZTUxYmQ2NDQ5MzcxMyIsImlhdCI6MTU4NDU2MDA1MCwiZXhwIjoxNTg0NTYzNjUwfQ.3gIK6BUi1fllcOFX29tRPRoH9HNaQpMxNNMISeggeTI"
    }
}
```



## API Endpoints for Admin

### Registration

```bash
curl --location --request POST 'localhost:3000/admin/register' \
--data-raw '{
  "name": "X",
  "password": "X",
  "email": "X"
}'
```

##### Response 

```json
{
    "status": "success",
    "message": "Admin added successfully!",
    "data": {
        "name": "X",
        "email": "X",
        "password": "X"
    }
}
```

If admin already exists

```json
{
     "status": "failed",
     "message": "Admin already exists!"
}
```

### Authentication

```bash
curl --location --request POST 'http://localhost:3000/admin/authenticate' \
--data-raw '{
  "name": "X",
  "password": "X",
  "email": "X"
}'
```

##### Response

```json
{
    "status":"success",
    "message":"Admin found!",
    "data": {
        "user":{
            "_id":"5e727788084e51bd64493713",
            "name":"X",
            "email":"X",
            "password":"$2b$10$l3tbwiNFc7F35dpzP69RX.ncA7q2T4BqfVxQzQNcDc9T/CHa6KOzm",
            "__v":0
        },
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNzI3Nzg4MDg0ZTUxYmQ2NDQ5MzcxMyIsImlhdCI6MTU4NDU2MDA1MCwiZXhwIjoxNTg0NTYzNjUwfQ.3gIK6BUi1fllcOFX29tRPRoH9HNaQpMxNNMISeggeTI"
    }
}
```

If email or password was invalid

```json
{
     "status": "error",
     "message": "Invalid email/password!",
     "data": null
}
```

Here's a more detailed [documentation](https://web.postman.co/collections/4847812-ec1143e9-3e6c-408c-8d6c-86dd81b62467?version=latest&workspace=5cd5ce26-92d0-47e9-8ffb-9e2d98effd0c) about the Authentication API.

##Running the tests

###Running the tests with newman

```bash
newman run tests/test.json
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
