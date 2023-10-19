# Apollo Server Deployment with [ Jenkins, Terraform & EKS]

End to end deployment of an Apollo server built in node js to Kubernetes (EKS) using a terraform and Jenkins CI/CD Pipeline

## Implementation

    1. Create a Jenkins Server with all the dependencies, libraries and packages needed with Terraform.

    2. Once completed, access the Jenkins server and Set it up

    3. Run the Jenkins-pipeline-deploy-to-eks to create Kubernetes Cluster, create deployments and services

    4. Test that the application is running. ( Access the aplication IP on the brower)

    5. Destroy infrastructure

## Tools

    1. Jenkins: To build and deploy the application to EKS. It is the CI-CD pipeline
    2. EKS: Used for Kubernetes to deploy application
    3. Terraform: To provision AWS resources

```bash
  npm run deploy
```

## Project structure

```
API
Kubernetes
Terraform-EC2
Terraform-EKS
Jenkinsfile
README.md
```
