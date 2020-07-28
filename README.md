# speculo - Surveillance done smart

[![CodeFactor](https://www.codefactor.io/repository/github/mrsupiri/speculo/badge?s=a75918dd8d73cd4933b6858e455efad553dcd7c9)](https://www.codefactor.io/repository/github/mrsupiri/speculo) ![CI/CD Pipeline](https://github.com/mrsupiri/speculo/workflows/CI/CD%20Pipeline/badge.svg)

Speculo is an open source platform that utilizes a [Deep Convolution Inverse Graphics Network](https://www.microsoft.com/en-us/research/publication/deep-convolutional-inverse-graphics-network/) for indexing faces found in a video footage, specifically for CCTV surveillance. It allows you to browse through these footages by the faces found in them rather than thousands of frames. The key differentiator between regular face recognition software and Speculo is that Speculo can recognize faces in different angles.
 
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

If you want to contribute to Speculo, be sure to review the guidelines in [CONTRIBUTING.md](https://github.com/mrsupiri/speculo/blob/documentation/readme-rewrite/CONTRIBUTING.md).

## Resources

Here are the links to pages that explain the system in detail.

- [Speculo: Project Modules explained in depth](https://github.com/mrsupiri/speculo/wiki/Project-Components)
- [Speculo: Project Structure](https://github.com/mrsupiri/speculo/wiki/Project-Structure)

## License
[MIT](https://github.com/mrsupiri/speculo/blob/documentation/readme-rewrite/LICENSE.md)

