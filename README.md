# speculo - Spying made easy

[![CodeFactor](https://www.codefactor.io/repository/github/mrsupiri/speculo/badge?s=a75918dd8d73cd4933b6858e455efad553dcd7c9)](https://www.codefactor.io/repository/github/mrsupiri/speculo) ![CI/CD Pipeline](https://github.com/mrsupiri/speculo/workflows/CI/CD%20Pipeline/badge.svg)

## Prerequisites

- React
- Python 3.7+
- Docker
- NodeJS
- OpenCV


## Setup the project locally

#### Clone the Project

```git clone https://github.com/mrsupiri/speculo/tree/master```


#### Create the database env file

Create a file called `database_config.env` in the root folder and add the following variables to it;

- DB_NAME
- DB_USERNAME
- DB_PASSWORD
- DB_HOST

#### Run it

```docker-compose up --build```

> Use --build only when you run it for the first time


## Project Structure

```
├── README.md
├── api                                                   # api microservices
│   ├── face-service                                      # face service folder
│   │   ├── Dockerfile                                    # docker configuration the face service
│   │   ├── nodemon.json                                  # nodemon configuration for development
│   │   ├── package-lock.json
│   │   ├── package.json                                  # node package file
│   │   ├── src
│   │   │   ├── app.ts                                    # express application
│   │   │   ├── constants                   
│   │   │   │   └── face.constants.ts                     # constants
│   │   │   ├── face.controller.ts                        # face service controller
│   │   │   ├── models
│   │   │   │   └── face.ts                               # model for face 
│   │   │   ├── resources                                 # resoruces needed for unit testing
│   │   │   │   ├── John\ Krassinei.jpg
│   │   │   │   ├── invalid.txt
│   │   │   │   └── unacceptable-pict.png
│   │   │   ├── server.ts                                 # starting point of the application
│   │   │   ├── services        
│   │   │   │   ├── comparator.service.ts                 # api calls to consume comparator services
│   │   │   │   ├── face.service.ts                       # face service endpoints
│   │   │   │   └── imageProcessorService.ts              # api calls to consume image processor services
│   │   │   └── tests
│   │   │       └── face.service.test.ts                  # test cases using mocha and chai
│   │   ├── test                                          # test cases using newman + postman
│   │   │   ├── data
│   │   │   │   └── face.jpg
│   │   │   ├── test.json
│   │   │   └── test_env.json
│   │   └── tsconfig.json                                 # typescript configuration file
│   ├── gateway                                           # gateway service
│   │   ├── Dockerfile                                    # docker configuration the gateway service
│   │   ├── README.md
│   │   ├── app
│   │   │   ├── api
│   │   │   │   ├── controllers
│   │   │   │   │   ├── downscaler.js                     # api calls to consume the downscaler
│   │   │   │   │   ├── face.js                           # api calls to consume the face service
│   │   │   │   │   ├── imageProcessor.js                 # api calls to consume the image processor
│   │   │   │   │   └── user.js                           # user registration/authentication endpoints
│   │   │   │   └── models
│   │   │   │       └── user.js                           # model for user
│   │   │   ├── routes
│   │   │   │   ├── gateway.js                            # router for all the gateway controllers
│   │   │   │   └── user.js                               # router for the user service
│   │   │   └── utils
│   │   │       └── apiAdapter.js                         # adapter for api calls
│   │   ├── config
│   │   │   └── database.js                               # database configuration file
│   │   ├── index.js                                      # starting point of the application
│   │   ├── package-lock.json                       
│   │   ├── package.json                                  # node package file
│   │   └── tests                                         # test cases using newman + postman
│   │       └── test.json                       
│   ├── image-processor                                   # image processor service
│   │   ├── Dockerfile                                    # docker configuration the image processor service
│   │   ├── README.md   
│   │   ├── image_processor.py                            # image processor class
│   │   ├── requirements.txt                              # project dependancies
│   │   └── rest_api.py                                   # exposing class methods as endpoints
│   └── video-downscaler                                  # video downscaler service
│       ├── Dockerfile                                    # docker configuration the video downscaler service
│       ├── requirements.txt                              # project dependancies
│       ├── rest_api.py                                   # exposing class methods as endpoints
│       └── video_downscaler.py                           # video downscaler class
├── k8s-configs                                           # kubernetes configurations 
├── models                                                 # datascience components
│   ├── README.md
│   ├── facecomparator                                     # facecomparator service
│   │   ├── Dockerfile                                     # docker configuration the facecomparator service
│   │   ├── README.md
│   │   ├── comparator.py                                  # face comparator class
│   │   ├── requirements.txt                               # python requirements for project
│   │   └── rest_api.py                                    # exposing face comparator methods as endpoints
│   ├── facedetector                                       # face detector service
│   │   ├── Dockerfile                                     # docker configuration the facedetector service
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── cfg                                            # configuration for the facedetector
│   │   │   ├── face.names
│   │   │   ├── face_classes.txt
│   │   │   ├── yolo_anchors.txt
│   │   │   └── yolov3-face.cfg
│   │   ├── requirements.txt                               # python requirements for the project
│   │   ├── rest_api.py                                    # starting point and restful api service application
│   │   ├── yolo
│   │   │   ├── __init__.py
│   │   │   ├── __pycache__
│   │   │   │   ├── __init__.cpython-37.pyc
│   │   │   │   ├── model.cpython-37.pyc
│   │   │   │   └── yolo.cpython-37.pyc
│   │   │   ├── model.py
│   │   │   └── yolo.py
│   │   └── yoloface_gpu.py
│   ├── fingerprinter                                      # fingerprinter service
│   │   ├── README.md
│   │   ├── Speculo_FingerPrinter.ipynb
│   │   ├── __init__.py
│   │   ├── __pycache__
│   │   │   ├── __init__.cpython-37.pyc
│   │   │   └── speculo.cpython-37.pyc
│   │   ├── models                                         # models for fingerprinter
│   │   ├── preprocessing
│   │   │   ├── head_pose_parser.py
│   │   │   ├── train_test_split.py
│   │   │   ├── youtube_generator.py
│   │   │   └── youtube_parser.py   
│   │   ├── requirements.txt                               # python requirements
│   │   └── speculo.py
│   └── model_tester.py
├── nginx.conf
├── ui
│   └── user-dashboard                                     # react project
│       ├── Dockerfile                                     # docker configuration for dashboard
│       ├── README.md
│       ├── nginx.conf
│       ├── package-lock.json
│       ├── package.json                                   # node package file
│       └── src
│           ├── App.css                                    # default css for App.js           
│           ├── App.js                                     # starting point of the application
│           ├── App.test.js                     
│           ├── Auth.js                                    # authentication logic
│           ├── Routes.js                                  # router for all pages
│           ├── assets                                     # assets required project
│           ├── components                                 # all the components used in the project
│           ├── endpoints.js
│           ├── fonts                                      # fonts used in the project
│           ├── helpers                 
│           │   └── window-size.jsx                        # resize windows
│           ├── index.css                                  # styling css
│           ├── index.js
│           ├── serviceWorker.js
│           ├── services                                   # services for the app
│           ├── setupTests.js
│           ├── styles                                     # styles
│           └── views
│               ├── Admin.jsx                              # admin page
│               ├── DashboardPanel.jsx                     # dashboard panel page
│               ├── FilterResults.jsx               
│               ├── Home.jsx                               # home page
│               └── Upload.jsx                             # upload page
├── docker-compose.yml                                     # docker configurations for the entire project
└── utils                           
    ├── export_saved_model.py                              # python script to extract .h5 model file
    └── image-scraper                                      # image scraper module
        ├── README.md
        ├── app.py                                         # starting point
        ├── requirements.txt                               # requirements for project
        ├── test_data.txt                                  # links to images for testing
        └── train_data.txt                                 # links to images for training
```


 