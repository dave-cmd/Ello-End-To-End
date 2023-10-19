## Elastic Kubernetes Cluster

Terraform manifests to ochestrate the provisioning of a manages kubernetes cluster on AWS.

The AWS EKS Terraform module has benn used to deploy the EKS cluser.

Fargate profiles are required to define pods which will run in Fargate.

These Fargate profiles define selectors and a namespace to run the pods, along with optional tags, you also have to add a pod execution role name, for allowing the EKS infrastructure to make AWS API calls on the cluster owner's behalf. You can have up to 5 selectors for a Fargate profile.

CoreDNS is required to manage networking within the cluster nodes as Fargare only takes care of the provisioning of nodes as pods on the EKS cluster.

### Note

This approach utilizes a managed node groups

### Required

```

        region                     = "us-east-1"
        access_key                 = ""
        secret_key                 = ""
        vpc_cidr_block             = "10.0.0.0/16"
        private_subnet_cidr_blocks = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
        public_subnet_cidr_blocks  = ["10.0.4.0/24", "10.0.5.0/24", "10.0.6.0/24"]

```

### Best practices

- Remote backed on terraform cloud or AWS Bucket
- Configure AWS CLI to avoid exposing credentials
