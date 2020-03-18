# Speculo API Gateway

API Gateway for Speculo.

## Registration

`curl -d "name=X&email=X&password=X" -X POST http://localhost:3000/user/register`

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

###### If the user already exists

```javascript
{
    "status": "unsucessful",
    "message": "User already exists!"
}
```

## Authentication

`curl -d "name=X&email=X&password=X" -X POST http://localhost:3000/user/authenticate`

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
