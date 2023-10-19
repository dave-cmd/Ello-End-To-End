# Terraform EC2

The terraform scripts in the /Terraform/EC2 directory create an amazaon linux EC2 instance which runs a Jenkins server

## Directory contents

![My Image]("C:/Users/User/Downloads/EC2.jpeg")

## Tools

    1. Jenkins: To build and deploy the application to EKS. It is the CI-CD pipeline
    2. EKS: Used for Kubernetes to deploy application
    3. Terraform: To provision AWS resources

```bash
  npm run deploy
```

## Execution

### Precondition

    Edit the terraform.tfvars file with your region specification. The manifest requires that the user has na existing EC2 keypair in the specified region virgina [ us-east-1 ].

```
        region            = "us-east-1"
        access_key        = ""
        secret_key        = ""
        vpc_cidr_block    = "10.0.0.0/16"
        subnet_cidr_block = "10.0.10.0/24"
        avail_zone        = "us-east-1a"
        env_prefix        = "dev"
        instance_type     = "t2.micro"
        key_name          = ""
```

Navigate to /Teraform-EC2 directory

    1. Initialize terraform

        $ terraform init

    2. Validate the terraform files to check for error in the manifests

        $ terraform validate

    3. Deploy the infastructure

        $ terraform apply --auto-approve

## Documentation

    Running terraform apply creates an Amazon linux EC2 instance. In this instance, runs a shell script which installs Jenkins, kubectl, git and terraform. This succcessful run of the manifest will output the public IP address of the instance. SSH login will be required to access the jenkins server on PORT 8080 of the public IP address.

```
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

- The initialAdminPassword should be added to jenkins UI.
- Install the recommeded plugins
- Navigate to Dashboard > New item > Piplene > Next
- Under configure select Piplene > Piplene script from SCM.
- SCM > Git
- Enter Repository URL > Save
- Hit the play button to run the Piplene
