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


## Authentication API service

### Registration

```bash
curl -d "name=X&email=X&password=X" -X POST http://localhost:3000/user/register
```

##### Response 

```javascript
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
curl -d "email=X&password=X" -X POST http://localhost:3000/user/authenticate
```

##### Response

```javascript
{
    "status":"success",
    "message":"user found!!!",
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

Here's a more detailed [documentation](https://web.postman.co/collections/4847812-ec1143e9-3e6c-408c-8d6c-86dd81b62467?version=latest&workspace=5cd5ce26-92d0-47e9-8ffb-9e2d98effd0c) about the Authentication API.

## License
[MIT](https://choosealicense.com/licenses/mit/)
