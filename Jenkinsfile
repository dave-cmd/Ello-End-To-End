#!/usr/bin/env groovy
pipeline {
    agent any
    stages {
        stage("Create an EKS Cluster") {
            steps {
                script {
                    dir('Terraform-EKS') {
                        sh "terraform init"
                        sh "terraform apply --auto-approve"
                    }
                }
            }
        }
        stage("Deploy to EKS") {
            steps {
                script {
                    dir('Kubernetes') {
                        sh "aws eks update-kubeconfig --name myapp-eks-cluster"
                        sh "kubectl apply -f apollo-deployment.yaml"
                        sh "kubectl apply -f apollo-service.yaml"
                    }
                }
            }
        }
        // stage("Destroy Infrastructure") {
        //     steps {
        //         script {
        //             dir('Terraform-EKS') {
        //                 sh "terraform destroy --auto-approve"
        //             }
        //         }
        //     }
        // }
    }
}