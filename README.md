# speculo - Spying made easy

[![CodeFactor](https://www.codefactor.io/repository/github/mrsupiri/speculo/badge?s=a75918dd8d73cd4933b6858e455efad553dcd7c9)](https://www.codefactor.io/repository/github/mrsupiri/speculo) ![CI/CD Pipeline](https://github.com/mrsupiri/speculo/workflows/CI/CD%20Pipeline/badge.svg)

tree -I 'node_modules|cache|public|fingerprinter/models|model-weights|examples|.nyc_output|coverage|dist|venv'

```
├── README.md
├── api                                             # api microservices
│   ├── face-service                                # face service folder
│   │   ├── Dockerfile                              # docker configuration the face service
│   │   ├── nodemon.json                            # nodemon configuration for development
│   │   ├── package-lock.json
│   │   ├── package.json                            # node package file
│   │   ├── src
│   │   │   ├── app.ts                              # express application
│   │   │   ├── constants                   
│   │   │   │   └── face.constants.ts               # constants
│   │   │   ├── face.controller.ts                  # face service controller
│   │   │   ├── models
│   │   │   │   └── face.ts                         # model for face 
│   │   │   ├── resources                           # resoruces needed for unit testing
│   │   │   │   ├── John\ Krassinei.jpg
│   │   │   │   ├── invalid.txt
│   │   │   │   └── unacceptable-pict.png
│   │   │   ├── server.ts                           # starting point of the application
│   │   │   ├── services        
│   │   │   │   ├── comparator.service.ts           # api calls to consume comparator services
│   │   │   │   ├── face.service.ts                 # face service endpoints
│   │   │   │   └── imageProcessorService.ts        # api calls to consume image processor services
│   │   │   └── tests
│   │   │       └── face.service.test.ts            # test cases using mocha and chai
│   │   ├── test                                    # test cases using newman + postman
│   │   │   ├── data
│   │   │   │   └── face.jpg
│   │   │   ├── test.json
│   │   │   └── test_env.json
│   │   └── tsconfig.json                           # typescript configuration file
│   ├── gateway                                     # gateway service
│   │   ├── Dockerfile                              # docker configuration the gateway service
│   │   ├── README.md
│   │   ├── app
│   │   │   ├── api
│   │   │   │   ├── controllers
│   │   │   │   │   ├── downscaler.js               # api calls to consume the downscaler
│   │   │   │   │   ├── face.js                     # api calls to consume the face service
│   │   │   │   │   ├── imageProcessor.js           # api calls to consume the image processor
│   │   │   │   │   └── user.js                     # user registration/authentication endpoints
│   │   │   │   └── models
│   │   │   │       └── user.js                     # model for user
│   │   │   ├── routes
│   │   │   │   ├── gateway.js                      # router for all the gateway controllers
│   │   │   │   └── user.js                         # router for the user service
│   │   │   └── utils
│   │   │       └── apiAdapter.js                   # adapter for api calls
│   │   ├── config
│   │   │   └── database.js                         # database configuration file
│   │   ├── index.js                                # starting point of the application
│   │   ├── package-lock.json                       
│   │   ├── package.json                            # node package file
│   │   └── tests                                   # test cases using newman + postman
│   │       └── test.json                       
│   ├── image-processor                             # image processor service
│   │   ├── Dockerfile                              # docker configuration the image processor service
│   │   ├── README.md   
│   │   ├── image_processor.py                      # image processor class
│   │   ├── requirements.txt                        # project dependancies
│   │   └── rest_api.py                             # exposing class methods as endpoints
│   └── video-downscaler                            # video downscaler service
│       ├── Dockerfile                              # docker configuration the video downscaler service
│       ├── requirements.txt                        # project dependancies
│       ├── rest_api.py                             # exposing class methods as endpoints
│       └── video_downscaler.py                     # video downscaler class
├── k8s-configs                                     # kubernetes configurations 
│   ├── face-service
│   │   ├── cluster-ip-service.yaml
│   │   └── deployment.yaml
│   ├── facecomparator
│   │   ├── cluster-ip-service.yaml
│   │   └── deployment.yaml
│   ├── facedetector
│   │   ├── cluster-ip-service.yaml
│   │   └── deployment.yaml
│   ├── fingerprinter
│   │   ├── cluster-ip-service.yaml
│   │   └── deployment.yaml
│   ├── gateway
│   │   ├── cluster-ip-service.yaml
│   │   └── deployment.yaml
│   ├── image-processor
│   │   ├── cluster-ip-service.yaml
│   │   └── deployment.yaml
│   ├── ingress-controller.yaml
│   ├── user-dashboard
│   │   ├── cluster-ip-service.yaml
│   │   └── deployment.yaml
│   └── video-downscaler
│       ├── cluster-ip-service.yaml
│       └── deployment.yaml
├── models                                         # datascience components
│   ├── README.md
│   ├── facecomparator                             # facecomparator service
│   │   ├── Dockerfile                             # docker configuration the facecomparator service
│   │   ├── README.md
│   │   ├── comparator.py                          # face comparator class
│   │   ├── requirements.txt                       # python requirements for project
│   │   └── rest_api.py                            # exposing face comparator methods as endpoints
│   ├── facedetector                               # face detector service
│   │   ├── Dockerfile                             # docker configuration the facedetector service
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── cfg                                    # configuration for the facedetector
│   │   │   ├── face.names
│   │   │   ├── face_classes.txt
│   │   │   ├── yolo_anchors.txt
│   │   │   └── yolov3-face.cfg
│   │   ├── requirements.txt                       # python requirements for the project
│   │   ├── rest_api.py                            # starting point and restful api service application
│   │   ├── yolo
│   │   │   ├── __init__.py
│   │   │   ├── __pycache__
│   │   │   │   ├── __init__.cpython-37.pyc
│   │   │   │   ├── model.cpython-37.pyc
│   │   │   │   └── yolo.cpython-37.pyc
│   │   │   ├── model.py
│   │   │   └── yolo.py
│   │   └── yoloface_gpu.py
│   ├── fingerprinter                              # fingerprinter service
│   │   ├── README.md
│   │   ├── Speculo_FingerPrinter.ipynb
│   │   ├── __init__.py
│   │   ├── __pycache__
│   │   │   ├── __init__.cpython-37.pyc
│   │   │   └── speculo.cpython-37.pyc
│   │   ├── models                                 # models for fingerprinter
│   │   ├── preprocessing
│   │   │   ├── head_pose_parser.py
│   │   │   ├── train_test_split.py
│   │   │   ├── youtube_generator.py
│   │   │   └── youtube_parser.py   
│   │   ├── requirements.txt                       # python requirements
│   │   └── speculo.py
│   └── model_tester.py
├── nginx.conf
├── ui
│   └── user-dashboard                             # react project
│       ├── Dockerfile                             # docker configuration for dashboard
│       ├── README.md
│       ├── nginx.conf
│       ├── package-lock.json
│       ├── package.json                           # node package file
│       └── src
│           ├── App.css                            # default css for App.js           
│           ├── App.js                             # starting point of the application
│           ├── App.test.js                     
│           ├── Auth.js                            # authentication logic
│           ├── Routes.js                          # router for all pages
│           ├── assets                             # assets required project
│           ├── components          
│           │   ├── EditPopUp.jsx                  # editing items in dashboard
│           │   ├── TimeCard.jsx                   # card for displaying Time
│           │   ├── application-item
│           │   ├── button
│           │   │   ├── button.component.jsx       # button class
│           │   │   └── button.style.scss
│           │   ├── canvas
│           │   │   └── canvas.component.jsx
│           │   ├── carousel                       # carousel component
│           │   ├── companies
│           │   │   └── companies.component.jsx
│           │   ├── dashboard.jsx
│           │   ├── features
│           │   │   └── feature-item.component.jsx
│           │   ├── home-applications
│           │   │   └── applications.components.jsx
│           │   ├── home-features
│           │   │   └── home-features.component.jsx
│           │   ├── home-footer
│           │   │   └── footer.component.jsx
│           │   ├── home-footer-Column
│           │   │   └── home-footer-column.component.jsx
│           │   ├── home-header
│           │   │   └── header.component.jsx
│           │   ├── location-map
│           │   │   └── location-map.component.jsx
│           │   ├── login
│           │   │   ├── auth.scss
│           │   │   ├── index.jsx
│           │   │   ├── login.jsx
│           │   │   ├── profile.jsx
│           │   │   └── register.jsx
│           │   ├── navigation-bar
│           │   │   ├── navigation-bar.component.jsx
│           │   │   └── navigation-bar.style.scss
│           │   ├── person-card
│           │   │   ├── PersonCard.jsx
│           │   │   └── PersonLoader.jsx
│           │   ├── person-table
│           │   │   ├── table.component.jsx
│           │   │   └── table.style.scss
│           │   ├── system-feature-item
│           │   │   └── system-feature-item.component.jsx
│           │   ├── system-features
│           │   │   └── system-features.component.jsx
│           │   ├── unknown
│           │   │   └── unknown.jsx
│           │   ├── upload-face-footage
│           │   │   ├── upload-faces
│           │   │   │   └── UploadFaces.jsx
│           │   │   └── upload.scss
│           │   ├── video-player
│           │   │   └── video.component.jsx
│           │   └── webcam
│           │       └── webcam.component.jsx
│           ├── endpoints.js
│           ├── fonts                                   # fonts used in the project
│           ├── helpers                 
│           │   └── window-size.jsx                     # resize windows
│           ├── index.css                               # styling css
│           ├── index.js
│           ├── serviceWorker.js
│           ├── services
│           │   ├── DetectionsManagement.jsx
│           │   └── TimeFilterer.js
│           ├── setupTests.js
│           ├── styles
│           │   ├── admin.style.scss
│           │   ├── dashboard.style.scss
│           │   ├── fonts.css
│           │   ├── person.style.scss
│           │   ├── timecard.style.scss
│           │   └── videojsStyle.scss
│           └── views
│               ├── Admin.jsx                           # admin page
│               ├── DashboardPanel.jsx                  # dashboard panel page
│               ├── FilterResults.jsx               
│               ├── Home.jsx                            # home page
│               └── Upload.jsx                          # upload page
├── docker-compose.yml                                  # docker configurations for the entire project
└── utils                           
    ├── export_saved_model.py                           # python script to extract .h5 model file
    └── image-scraper                                   # image scraper module
        ├── README.md
        ├── app.py                                      # starting point
        ├── requirements.txt                            # requirements for project
        ├── test_data.txt                               # links to images for testing
        └── train_data.txt                              # links to images for training
```