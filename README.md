# contact-api
   

#### How should this be manually tested?
- clone the application
- run `npm install`
- run `npm start`



#### Docker Installation
  Docker can be installed from the [official page](https://docs.docker.com/get-docker/).


#### Pull and Run Docker image
Run the following commands after installing docker
```
- docker pull lawrecks/contact-api
- docker build -t lawrecks/contact-api .
- docker run -p 5000:5000 -d lawrecks/contact-api
- docker ps (to view and confirm the running container)
```
Run localhost:5000
