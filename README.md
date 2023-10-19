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

## Execution Part I

    0. Create an EC2 key pair virginia us-east-1.
    1. Navigate to Terraform-EC2
    2. Add [AWS credentials] and  [key_name] to the file [terraform.tfvars]
    3. Run to initialize terraform locally.

        $ terraform init

    4. Run  to check for errors in the code

        $ terraform validate

    5. Run to deploy the code

          $ terraform apply --auto-apply

    6. On successful deployment, copy the public IP of the jenkins server displayed in the terminal

#### More instructions in the Terraform-EC2 directory README.md Execution Part II

## Project structure

```
API
Kubernetes
Terraform-EC2
Terraform-EKS
Jenkinsfile
README.md
```
