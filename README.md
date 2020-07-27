# speculo

[![CodeFactor](https://www.codefactor.io/repository/github/mrsupiri/speculo/badge?s=a75918dd8d73cd4933b6858e455efad553dcd7c9)](https://www.codefactor.io/repository/github/mrsupiri/speculo) ![CI/CD Pipeline](https://github.com/mrsupiri/speculo/workflows/CI/CD%20Pipeline/badge.svg)

Surveillance done smart.

## Prerequisites

- React
- Python 3.8
- Docker
- NodeJS
- OpenCV
- MongoDB

## Development Setup

#### Clone the Project

```git clone https://github.com/mrsupiri/speculo/tree/master```

#### Add the database configuration

Speculo uses MongoDB as the database therefore create a file called `database_config.env` in the root folder and add the following environment variables;
```
- DB_NAME
- DB_USERNAME
- DB_PASSWORD
- DB_HOST
```
#### Run it

> Use --build only when you run it for the first time

```docker-compose up --build```

## How to contribute?

Please refer to [CONTRIBUTING.md](https://github.com/mrsupiri/speculo/blob/documentation/readme-rewrite/CONTRIBUTING.md).

## More Information

Here are the links to pages that explain the system in detail.

- [Project Component](https://github.com/mrsupiri/speculo/wiki/Project-Components)
- [Project Structure](https://github.com/mrsupiri/speculo/blob/documentation/readme-rewrite/structure.md)

