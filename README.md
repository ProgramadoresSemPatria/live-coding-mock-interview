# Live Coding Mock Interview 12 – DevOps Q&A & Practical Challenge

This interview has four sections:  
1. **Q&A Part 1 (5 min)** – Fundamentals  
2. **Q&A Part 2 (10 min)** – Tradeoffs  
3. **Q&A Part 3 (15 min)** – Open-ended scenarios  
4. **Practical Exercise (20 min)** – Terraform challenge (pseudo-code)

---

## Q&A Part 1 – Fundamentals

<details>
<summary>Question 1</summary>
What’s the difference between a Kubernetes Deployment and a StatefulSet?
</details>

<details>
<summary>Question 2</summary>
What’s the purpose of a Terraform state file?
</details>

<details>
<summary>Question 3</summary>
In GitHub Actions, what’s the difference between <code>workflow_dispatch</code> and <code>push</code> triggers?
</details>

<details>
<summary>Question 4</summary>
In Grafana, what’s the role of Prometheus vs Loki?
</details>

<details>
<summary>Question 5</summary>
What’s the difference between Docker Swarm and Kubernetes?
</details>

---

## Q&A Part 2 – Tradeoffs

<details>
<summary>Question 1</summary>
Multi-Cloud: One central Kubernetes cluster vs multiple smaller distributed clusters
</details>

<details>
<summary>Question 2</summary>
CI/CD Hosting: Self-managed vs third-party managed pipelines
</details>

<details>
<summary>Question 3</summary>
Infrastructure: Terraform only vs Terraform + Terragrunt
</details>

<details>
<summary>Question 4</summary>
Monitoring: Push vs Pull metrics collection
</details>

---

## Q&A Part 3 – Open-ended scenarios

<details>
<summary>Question 1</summary>
Blockchain Ops: How would you design HA and monitoring for EVM validators across AWS & GCP?
</details>

<details>
<summary>Question 2</summary>
Monitoring: In your company, Grafana dashboards are performing slowly with Prometheus, how do you troubleshoot and fix it?
</details>

<details>
<summary>Question 3</summary>
Incident Response: ArgoCD deploys a broken manifest — how do you detect, roll back, and prevent it?
</details>

<details>
<summary>Question 4</summary>
Cloud Strategy: What would you consider before migrating workloads from AWS to Azure? 
</details>

<details>
<summary>Question 5</summary>
Scalability: How do you scale infra from 10k to 1M daily users?
</details>

---

## Practical Exercise

**Challenge:**  
Write a Terraform configuration (pseudo-code) that:  
1. Creates a **VPC** with 2 public and 2 private subnets in AWS.  
2. Launches an **EC2 instance** in a private subnet.  
3. Creates a **security group** that allows:  
   - inbound SSH only from your IP  
   - inbound HTTP from anywhere  
4. Outputs the instance’s private IP.  

**Notes:**  
- Encourage variables for CIDRs, regions, instance types.  
- Organize as if reusable module.  
- Candidate should explain production improvements (remote state, Terragrunt, tagging, modules).  
