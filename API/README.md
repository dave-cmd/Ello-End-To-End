# Apollo Server

This is an Apollo server written in node js. The runs two Queries which return either a list of books or a book base on the selection.

The server runs on port 3000.
The code sits in the API directory which contains all the project dependacies plus a Dockerfile containing instructions on how to package the project.

The docker image generated from this project will be used in the deployment in kubernetes on EKS.

## Note

A docker image of the application is generatered by the following command and pushed to the docker repository:

```
$ docker build -t {dockerHubUserName}/{name}:{version} .
$ docker login
$ docker push {dockerHubUserName}/{name}:{version} .
```

It is best practice to run this step in the build stage of a CI-CD pipeline.
This build step take place after change in the codebase repository are detected.

Tests are also recommended after this step after which the image will be pushed to a container registry and deployment will be triggered.
