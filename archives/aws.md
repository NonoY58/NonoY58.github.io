---
layout: archives
---


# aws topics

<!DOCTYPE html>
<!-- saved from url=(0154)file:///C:/Users/r00481995/Desktop/AWS%20Cloud%20Practitioner%20Certification%20Cheat%20Sheet%20_%20by%20Sathittham%20(Phoo)%20Sangthong%20_%20Medium.html -->
<html lang="en" data-rh="lang">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>

<body>
    <div id="root">
        <div>
            <div>
                <p id="0bd2">A summary of AWS for AWS Cloud Practitioner Certification.
                    This is a
                    short brief that I took notes and read before going to the exam. Good Luck!</p>
                    <h1 id="35c9">IAM (Identity and Access Management)</h1>
                <ul>
                    <li id="15db"><strong>Users</strong> — Mapped to a physical user,
                        has a password for AWS Console</li>
                    <li id="7c49"><strong>Groups</strong> — Contains users only</li>
                    <li id="cac6"><strong>Policies</strong> — JSON document that
                        outlines permissions for users or groups</li>
                    <li id="c040"><strong>Roles</strong> — For EC2 instants or AWS
                        services</li>
                    <li id="80b5"><strong>Security</strong> — MFA + Password Policy
                    </li>
                    <li id="7f65"><strong>AWS CLI </strong>— Manage your AWS services
                        using the command-line</li>
                    <li id="7460"><strong>AWS SDK </strong>— Manage your AWS services
                        using a programming language</li>
                    <li id="876b"><strong>Access Keys</strong> — Access AWS using the
                        CLI or SDK</li>
                    <li id="cc16"><strong>Audit — IAM</strong> Credential Reports &amp;
                        IAM Access Advisor</li>
                </ul>
            </div>
        </div>
    </div>
    <div role="separator"><span></span><span></span><span></span></div>

    <div>
        <div>
            <div>
                <h1 id="16ab">EC2 (Elastic Comput Cloud)</h1>
                <ul>
                    <li id="b56a"><strong>EC2 Instance </strong>— AMI(OS) + Instance
                        Size (CPU + RAM) + Storage + Security Group + EC2 User Data</li>
                    <li id="59e4"><strong>Security Groups</strong> — Firewall attached
                        to the EC2 instance</li>
                    <li id="e487"><strong>EC2 User Data </strong>— Script launched at
                        the first start of an instance</li>
                    <li id="5d18"><strong>SSH</strong> — Start terminal into our EC2
                        Instances (port 22)</li>
                    <li id="ea08"><strong>EC2 Instance Role </strong>— Link to IAM
                        roles</li>
                    <li id="eb63"><strong>Purchasing Options </strong>— On-demand,
                        Spot, Reserved (Standard + Convertible), Dedicated Host, Dedicated Instance</li>
                </ul>
            </div>
        </div>
    </div>
    <div role="separator"><span></span><span></span><span></span></div>

    <div>
        <div>
            <div>
                <h1 id="c15e">EC2 Instance Storage</h1>
                <ul>
                    <li id="2491"><strong>EBS Volumes</strong><br>○ Network drives
                        attached to one EC2 instance at a time<br>○ Mapped to an Availability Zones<br>○ Can use EBS
                        Snapshots for backups/transferring EBS volumes across AZ</li>
                    <li id="3e02"><strong>AMI</strong> — Create ready-to-use EC2
                        instance with our customizations</li>
                    <li id="3fb8"><strong>EC2 Image Builder </strong>— Automatically
                        build, test, and distribute AMIs</li>
                    <li id="ccc2"><strong>EC2</strong> Instance Store<br>○
                        High-performance hardware disk attached to our EC2 instance<br>○ Lost if our instance is
                        stopped/terminated</li>
                    <li id="a50b"><strong>EFS</strong> — Network file system, can be
                        attached to 100s of instances in a region</li>
                    <li id="a671"><strong>EFS-IA </strong>— Cost-optimized storage
                        class of infrequent access file</li>
                    <li id="2407"><strong>FSx for Windows </strong>— Network File
                        System for Windows servers</li>
                    <li id="0fc5"><strong>FSx for Lustre </strong>— High-Performance
                        Computing Linux file system</li>
                </ul>
            </div>
        </div>
    </div>
    <div role="separator"><span></span><span></span><span></span></div>
    <div>
        <div>
            <div>
                <h1 id="014b">ELB &amp; ASG</h1>
                <ul>
                    <li id="d75f"><strong>High Availability</strong> vs
                        <strong>Scalability</strong> (vertical and horizontal) vs <strong>Elasticity</strong> vs
                        <strong>Agility</strong> in the Cloud
                    </li>
                    <li id="7596"><strong>Elastic Load Balancers (ELB)</strong><br>○
                        Distribute traffic across backend EC2 instances, can be Multi-AZ<br>○ Supports health
                        checks<br>○ 4 types: Classic (old), Application (HTTP-L7), Network (TCP-L4), Gateay (L3)</li>
                    <li id="6242"><strong>Auto Scaling Groups (ASG)</strong><br>○
                        Implement Elasticity for your application, across multiple AZ<br>○ Scale EC2 instances based on
                        the demand on your system, and replace unhealthy<br>○ Integrated with the ELB</li>
                </ul>
                <blockquote>
                    <p id="db99">ELB: Elastic Load Balancing<br>ASG: Auto Scaling Group</p>
                </blockquote>
            </div>
        </div>
    </div>
    <div role="separator"><span></span><span></span><span></span></div>

    <div>
        <div>
            <div>
                <h1 id="4945">Amazon S3</h1>
                <ul>
                    <li id="95f9"><strong>Buckets vs Objects</strong> — global unique
                        name, tied to a region</li>
                    <li id="90ab"><strong>S3 Security</strong> — IAM policy, S3 Bucket
                        Policy (public access), S3 Encryption</li>
                    <li id="8652"><strong>S3 Websites </strong>— Host a static website
                        on Amazon S3</li>
                    <li id="15d2"><strong>S3 Versioning</strong> — Multiple versions
                        for files, prevent accidental deletes</li>
                    <li id="4e34"><strong>S3 Replication</strong> — Same-region or
                        cross-region, must enable versioning</li>
                    <li id="ab14"><strong>S3 Storage Classes </strong>— Standard, IA,
                        1Z-IA, Intelligent, Glacier (Instant, Flexible, Deep)</li>
                    <li id="3dae"><strong>Snow Family</strong> — Import data onto S3
                        through a physical device, edge computing<br>○ <strong>SnowCone &amp; SnowCone SSD
                        </strong>— Storage capacity → 8TB HDD, 14TB SSD, Storage capacity → 8TBsize up to 24TB, online
                        and offline<br>○<strong> Snowball Edge &amp; Storage Optimized </strong>— Storage
                        capacity → 80TB usable, Storage capacity → up to Petabytes, offline<br>○<strong>
                            SnowMobile</strong> — Storage capacity → &lt; 100PB, Storage capacity → up to Exabytes,
                        offline</li>
                    <li id="99e6"><strong>OpsHub </strong>— Desktop application to
                        manage Snow Family devices</li>
                    <li id="48a4"><strong>Storage Gateway</strong> — Hybrid solution to
                        extend on-premises storage to S3</li>
                </ul>
                <blockquote>
                    <p id="3367">IA: Infrequency Access</p>
                </blockquote>

                <figure>
                    <div role="button" tabindex="0">
                        <div>
                            <picture>
                            
                                <img alt="" width="700" height="365" loading="lazy" role="presentation"
                                    src="\images\AWS Cloud Practitioner Certification Cheat Sheet_files/0_wDp3rB0g9nfu0a7V.jpg">
                            </picture>
                        </div>
                    </div>
                    <figcaption>via — <a href="https://aws.amazon.com/s3/storage-classes/" rel="noopener ugc nofollow"
                            target="_blank">https://aws.amazon.com/s3/storage-classes/</a>
                    </figcaption>
                </figure>

            </div>
        </div>
    </div>

    <div role="separator"><span></span><span></span><span></span></div>

    <div>
        <div>
            <div>
                <h1 id="a902">Databases &amp; Analytics</h1>
                <ul>
                    <li id="da38"><strong>Relational Databases-OLTP</strong> — RDS
                        &amp; Aurora (SQL)</li>
                    <li id="00e7"><strong>Differences between Multi-AZ, Read Replicas,
                            Multi-Region</strong></li>
                    <li id="20fd"><strong>In-memory Database </strong>— ElasticCache
                    </li>
                    <li id="4506"><strong>Key/Value Database</strong> — DynamoDB
                        (serverless) &amp; DAX (cache for DynamoDB)</li>
                    <li id="dc1d"><strong>Warehouse-OLAP</strong> — Redshift (SQL)</li>
                    <li id="24da"><strong>Hadoop Cluster </strong>— EMR</li>
                    <li id="cca1"><strong>Athena</strong> — Query data on Amazon S3
                        (serverless &amp; SQL)</li>
                    <li id="7b78"><strong>QuckSight</strong> — Dashboard on your data
                        (serverless)</li>
                    <li id="07bd"><strong>DocumentDB</strong> — “Aurora for MongoDB”
                        (JSON- NoSQL database)</li>
                    <li id="9469"><strong>Amazon QLDB </strong>— Financial Transactions
                        Ledger (immutable journal, cryptographically verifiable)</li>
                    <li id="d3ec"><strong>Amazon Managed Blockchain </strong>— managed
                        Hyperledger Fabric &amp; Ethereum blockchains</li>
                    <li id="5266"><strong>Glue</strong> — Managed ETL (Extract
                        Transform Load) and Data Catalog service</li>
                    <li id="76b5"><strong>Database Migration</strong> — DMS</li>
                    <li id="64fc"><strong>Neptune</strong> — Graph Database (Social
                        Network)</li>
                </ul>
                <blockquote>

                    <p id="3443">OLAP: Online Analytics Processing</p>
                </blockquote>
                <figure>
                    <div role="button" tabindex="0">
                        <div>
                            <picture>
                                <img alt="" width="700" height="479" loading="lazy" role="presentation"
                                    src="\images\AWS Cloud Practitioner Certification Cheat Sheet_files/0_KWdQJtVKbZOA7wS-.jpg">
                            </picture>
                        </div>
                    </div>
                </figure>
            </div>
        </div>
    </div>
    <div role="separator"><span></span><span></span><span></span></div>
    <div>
        <div>
            <div>
                <h1 id="5eb6">Other Compute</h1>
                <ul>
                    <li id="1126"><mark><strong>Docker</strong></mark><mark> — Container
                            technology to
                            run applications</mark></li>
                    <li id="2b5e"><strong>ECS</strong> (Elastic Container Service)— Run
                        docker containers on EC2 instance</li>
                    <li id="fd99"><strong>Fargate</strong><br>○ Run Docker containers
                        without provisioning the infrastructure<br>○ Serverless offering (no EC2 instances)</li>
                    <li id="254d"><strong>ECR</strong> (Elastic Container Registry) —
                        Private Docker Image Repository</li>
                    <li id="f294"><strong>Batch</strong> — Run batch jobs on AWS across
                        managed EC2 instance</li>
                    <li id="bc9c"><strong>Lightsail</strong> — Predictable &amp; low
                        pricing for simple applications &amp; DB</li>
                </ul>
            </div>
        </div>
    </div>

    <div role="separator"><span></span><span></span><span></span></div>
    <div>
        <div>
            <div>
                <h1 id="2d75">Lambda</h1>
                <ul>
                    <li id="8995"><strong>Lamba </strong>— Serverless, Function as a
                        Service, seamless scaling, reactive</li>
                    <li id="56fb"><strong>Lambda Billings</strong><br>○ By the time run
                        x by the RAM Provisioned<br>○ By the number of invocations</li>
                    <li id="b73e"><strong>Language Support </strong>— Many programming
                        languages except (arbitrary) Docker</li>
                    <li id="dd0c"><strong>Invocation time</strong> — up to 15 minutes
                    </li>
                    <li id="8457"><strong>Use cases</strong><br>○ Create Thumbnails for
                        images uploaded onto S3<br>○ Run a Serverless cron job</li>
                    <li id="eedd"><strong>API Gateway</strong> — Expose Lambda
                        functions as HTTP API</li>
                </ul>
            </div>
        </div>
    </div>
    <div role="separator"><span></span><span></span><span></span></div>

    <div>
        <div>
            <div>
                <h1 id="97f1">Deployment</h1>
                <ul>
                    <li id="8623"><strong>CloudFormation</strong> (AWS only)<br>○
                        Infrastructure as Code, works with almost all AWS resources<br>○ Repeat across Regions &amp;
                        accounts</li>
                    <li id="4161"><strong>Beanstalk</strong> (AWS only)<br>○ Platform
                        as a Service (PaaS), limited to certain programming languages or Docker<br>○ Deploy code
                        consistently with a known architecture: ex, ALB+BC+RDS</li>
                    <li id="94f6"><strong>CodeDeploy</strong> (Hybrid) — Deploy &amp;
                        upgrade any application onto servers</li>
                    <li id="4d6d"><strong>Systems Manager</strong> (Hybrid) — Patch,
                        configure, and run commands at scale</li>
                    <li id="d7b7"><strong>OpsWorks</strong> (Hybrid) — Managed Chef and
                        Puppet in AWS</li>
                    <li id="0e02"><strong>CodeCommit</strong> — Store code in private
                        git repository (version controlled)</li>
                    <li id="3381"><strong>CodeBuild</strong> — Build &amp; Test code in
                        AWS</li>
                    <li id="1bc8"><strong>CodeDeploy</strong> — Deploy code onto
                        servers</li>
                    <li id="3bb4"><strong>CodePipeline</strong> — Orchestration of
                        pipeline (from code to build to deploy)</li>
                    <li id="87d5"><strong>CodeArtifact</strong> — Store software
                        packages/dependencies on AWS</li>
                    <li id="6e9d"><strong>CodeStar</strong> — Unified view for allowing
                        developers to do CI/CD and code</li>
                    <li id="0efb"><strong>Cloud9</strong> — Cloud IDE with collab</li>
                    <li id="ac35"><strong>AWS CDK</strong> (Cloud Development Kit) —
                        Defined your cloud infrastructure using a programming language</li>
                </ul>
            </div>
        </div>
    </div>

    <div role="separator"><span></span><span></span><span></span></div>
    <div>
        <div>
            <div>
                <h1 id="3ab5">Leveraging the AWS Global Application</h1>
                <ul>
                    <li id="0f6f"><strong>Global DNS: Rute 53<br></strong>○ It is great
                        to route users to the closet deployment with the least latency<br>○ Great for disaster recovery
                        strategies</li>
                    <li id="423c"><strong>Global Content Delivery Network (CDN):
                            CloudFront</strong><br>○ Replicate part of your application to AWS Edge Locations — decrease
                        latency<br>○ Cache common requests — improved user experience and decreased latency</li>
                    <li id="7ef8"><strong>S3 Transfer Acceleration</strong><br>○
                        Accelerate global uploads &amp; download into Amazon S3</li>
                    <li id="d3d2"><strong>AWS Global Accelerator</strong><br>○ Improve
                        global application availability and performance using the AWS global network</li>
                    <li id="cc00"><strong>AWS Outposts</strong><br>○ Deploy Outposts
                        Racks in your own Data Centers to extend AWS services</li>
                    <li id="0e8e"><strong>AWS WaveLenth</strong><br>○ Brings AWS
                        services to the edge of the 5G networks<br>○ Ultra-low latency applications</li>
                    <li id="7e63"><strong>AWS Local Zones</strong><br>○ Brings AWS
                        resources (compute, database, storage, …) closer to your users<br>○ Good for latency-sensitive
                        applications</li>
                </ul>
            </div>
        </div>
    </div>

    <div role="separator"><span></span><span></span><span></span></div>
    <div>
        <div>
            <div>
                <h1 id="a05c">Cloud Integration</h1>
                <ul>
                    <li id="3171"><strong>SQS</strong> (Simple Queue Service)<br>○
                        Queue service in AWS<br>○ Multiple Producers, messages are kept up to 14 days<br>○ Multiple
                        Consumers share the read and delete message <br>○ Used to <strong>decouple</strong> applications
                        in AWS</li>
                    <li id="8b36"><strong>SNS</strong> (Simple Notification
                        Service)<br>○ Notification service in AWS<br>○ Subscribers: Email, Lambda, SQS, HTTP, Mobile,
                        …<br>○ Multiple Subscribers, send all messages to all of them<br>○ No message retention</li>
                    <li id="8dd2"><strong>Kinesis</strong> — Real-time data streaming,
                        persistence, and analysis</li>
                    <li id="4e15"><strong>Amazon MQ </strong>— Managed message broker
                        for ActiveMQ and RabbitMQ in the cloud (MQTT, AMQP…protocols)</li>
                </ul>
            </div>
        </div>
    </div>

    <div role="separator"><span></span><span></span><span></span></div>
    <div>
        <div>
            <div>
                <h1 id="658f">Cloud Monitoring</h1>
                <ul>
                    <li id="8d3f"><strong>CloudWatch</strong><br> ○
                        <strong>Metrics</strong> — Monitor the performance of AWS services and billing
                        metrics<br> ○ <strong>Alarms</strong> — Automate notification, perform EC2 action,
                        notify to SNS based on metrics<br> ○ <strong>Logs</strong> — Collect log files
                        from EC2 instances, servers, Lambda functions…<br> ○ <strong>Events</strong> (or
                        EventBridge) — React to events in AWS, or trigger a rule on a schedule
                    </li>
                    <li id="d8fe"><strong>CloudTrail</strong> — Audit API calls made
                        within your AWS account</li>
                    <li id="d816"><strong>CloudTrail Insights</strong> — Automated
                        analysis of your CloudTrail Events</li>
                    <li id="3971"><strong>X-Ray </strong>— Trace requests made through
                        your distributed applications</li>
                    <li id="088a"><strong>AWS Health Dashboard </strong>— Status of all
                        AWS services across all regions</li>
                    <li id="f271"><strong>AWS Account Health Dashboard</strong> — AWS
                        events that impact your infrastructure</li>
                    <li id="98bb"><strong>Amazon CodeGuru</strong> — Automated code
                        reviews and application performance recommendations</li>
                </ul>
            </div>
        </div>
    </div>
    <div role="separator"><span></span><span></span><span></span></div>

    <div>
        <div>
            <div>
                <h1 id="8697">AWS Security &amp; Compliance</h1>
                <ul>
                    <li id="4cf4"><strong>Share Responsibility on AWS</strong></li>
                    <li id="3f49"><strong>Sheild</strong> — Automatic DDoS Protection +
                        24/7 support for advanced</li>
                    <li id="062b"><strong>WAF</strong> — Firewall to filter incoming
                        requests based on rules</li>
                    <li id="6b2b"><strong>KMS</strong> — Encryption keys managed by AWS
                    </li>
                    <li id="6c93"><strong>CloudHSM</strong> — Hardware encryption, we
                        manage encryption keys</li>
                    <li id="0e43"><strong>AWS Certificate Manager</strong> — Provision,
                        manage, and deploy SSL/TLS certificates</li>
                    <li id="551e"><strong>Artifact</strong> — Get access to compliance
                        reports such as PCI, ISO, etc …</li>
                    <li id="bfcb"><strong>GuardDuty</strong> — Find malicious behavior
                        with VPC, DNS &amp; CloudTrail Logs</li>
                    <li id="edf2"><strong>Inspector</strong> — Find software
                        vulnerabilities in EC2, ECR images, and Lambda functions</li>
                    <li id="1817"><strong>Network Firewall</strong> — Protect VPC
                        against network attacks</li>
                    <li id="6697"><strong>Config</strong> — Track config changes and
                        compliance against rules</li>
                    <li id="0412"><strong>Macie</strong> — Find sensitive data (e.g.
                        PII data) in Amazon S3 buckets</li>
                    <li id="c42c"><strong>CloudTrail</strong> — Track API calls made by
                        users within an account</li>
                    <li id="e077"><strong>Amazon Detective </strong>— Find the root
                        cause of security issues or suspicious activities</li>
                    <li id="719d"><strong>AWS Abuse</strong> — Report AWS resources
                        used for abusive or illegal purposes</li>
                    <li id="997e"><strong>Root user privilege</strong>s<br>○ Change
                        account setting<br>○ Close your AWS account<br>○ Change or cancel your AWS Support plan<br>○
                        Register as a seller in the Reserved Instance Marketplace</li>
                </ul>
            </div>
        </div>
    </div>

    <div role="separator"><span></span><span></span><span></span></div>
    <div>
        <div>
            <div>
                <h1 id="e158">AWS Machine Learning</h1>
                <ul>
                    <li id="2e65"><strong>Rekognition</strong> — Face detection,
                        labeling, celebrity recognition</li>
                    <li id="0934"><strong>Transcribe</strong> — Audio to Text (e.g.
                        subtitles)</li>
                    <li id="8c3b"><strong>Polly</strong> — Text to Audio</li>
                    <li id="332c"><strong>Translate</strong> — Translations</li>
                    <li id="03f3"><strong>Lex </strong>— Build conversation bots (e.g.
                        chatbots), (like Alexa)</li>
                    <li id="eb2e"><strong>Connect</strong> — Cloud contact center</li>
                    <li id="a17d"><strong>Comprehend</strong> — Natural Language
                        Processing</li>
                    <li id="215a"><strong>SageMaker</strong> — Machine Learning for
                        every developer and data scientist</li>
                    <li id="2dda"><strong>Forecast</strong> — Build highly accurate
                        forecasts</li>
                    <li id="9d24"><strong>Kendra</strong> — ML-powered search engine
                    </li>
                    <li id="b1d4"><strong>Personalize</strong> — Real-time personalized
                        recommendations</li>
                    <li id="a505"><strong>Textact</strong> — Detect text and data in
                        documents</li>
                </ul>
            </div>
        </div>
    </div>

    <div role="separator"><span></span><span></span><span></span></div>
    <div>
        <div>
            <div>
                <h1 id="bd3d">AWS VPC &amp; Network</h1>
                <ul>
                    <li id="a218"><strong>VPC</strong> — Virtual Private Cloud</li>
                    <li id="1b9d"><strong>Subnets</strong> — Tied to an AZ, network
                        partition of the VPC</li>
                    <li id="8eac"><strong>Internet Gateway </strong>— At the VPC level,
                        provide Internet Access</li>
                    <li id="766b"><strong>NAT Gateway / Instances</strong> — Give
                        internet access to private subnets</li>
                    <li id="3c27"><strong>NACL</strong> — Stateless, subnet rules for
                        inbound and outbound</li>
                    <li id="5c8c"><strong>Security Groups </strong>— Stateful, operate
                        at the EC2 instance level or ENI</li>
                    <li id="3b72"><strong>VPC Peering</strong> — Connect two VPC with
                        non-overlapping IP ranges, nontransitive</li>
                    <li id="01b5"><strong>Elastic IP</strong> — Fixed public IPv4,
                        ongoing cost if not in-use</li>
                    <li id="6ba2"><strong>VPC Endpoints</strong> — Provide Private
                        access to AWS Services within VPC</li>
                    <li id="a7a3"><strong>PrivateLink</strong> — Privately connect to a
                        service in a 3rd party VPC</li>
                    <li id="0a48"><strong>VPC Flow Logs</strong> — network traffic logs
                    </li>
                    <li id="ddcf"><strong>Site to Site VPN </strong>— VPN over public
                        internet between op-premises DC and AWS</li>
                    <li id="5091"><strong>Client VPN</strong> — OpenVPN connection from
                        your computer into your VPC</li>
                    <li id="2029"><strong>Direct Connect</strong> — Direct private
                        connection to AWS</li>
                    <li id="5480"><strong>Transit Gateway </strong>— Connect thousands
                        of VPC and on-premises networks together</li>
                </ul>
            </div>
        </div>
    </div>

    <div role="separator"><span></span><span></span><span></span></div>
    <div>
        <div>
            <div>
                <h1 id="9ad9">Account Best Practices</h1>
                <ul>
                    <li id="a299">Operate multiple accounts using
                        <strong>Organizations</strong>
                    </li>
                    <li id="1d91">Use <strong>SCP</strong> (service control policies)
                        to restrict account power</li>
                    <li id="b2a5">Easily setup multiple accounts with best-practices with
                        <strong>AWS Control Tower</strong>
                    </li>
                    <li id="694b"><strong>Use Tags &amp; Cost Allocation Tags</strong>
                        for easy management &amp; billing</li>
                    <li id="f458"><strong>IAM guidelines</strong> — MFA,
                        least-privilege, password policy, password rotation</li>
                    <li id="6677"><strong>Cofig</strong> To record all resources
                        configurations &amp; compliance over time</li>
                    <li id="72e0"><strong>CloudFormation</strong> to deploy stack
                        across accounts and regions</li>
                    <li id="5169"><strong>Trusted Advisor </strong>to get insights,
                        Support Plan adapted to your needs</li>
                    <li id="0185"><strong>If your Account is compromised</strong> —
                        change the root password, delete and rotate all passwords/keys, contact the AWS support</li>
                    <li id="5fd7">Allow users to create pre-defined stacks defined by
                        admins using
                        <strong>AWS Service Catalog</strong>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div role="separator"><span></span><span></span><span></span></div>
    <div>
        <div>
            <div>
                <h1 id="9b2a">Billing and Costing Tools</h1>
                <ul>
                    <li id="58ad"><strong>Compute Optimizer </strong>— Recommends
                        resources’ configuration to reduce cost</li>
                    <li id="e368"><strong>Pricing Calculator</strong> — Cost of
                        services on AWS</li>
                    <li id="2f1d"><strong>Billing Dashboard </strong>— High-level
                        overview + free tier dashboard</li>
                    <li id="9191"><strong>Cost Allocation Tags</strong> — Tag resources
                        to create detailed reports</li>
                    <li id="a8dc"><strong>Cost and Usage Reports </strong>— The most
                        comprehensive billing dataset</li>
                    <li id="67e8"><strong>Cost Explorer</strong> — View current usage
                        (detailed) and forecast usage</li>
                    <li id="5e37"><strong>Billing Alarms </strong>— in us-east-1 —
                        track overall and per-service billing</li>
                    <li id="776d"><strong>Budges</strong> — More advanced — track
                        usage, costs, RI, and get alerts</li>
                    <li id="5f93"><strong>Saving Plans </strong>— Easy way to save
                        based on long-term usage of AWS</li>
                    <li id="39f2"><strong>Cost Anomaly Detection</strong> — Detect
                        unusual spends using Machine Learning</li>
                    <li id="00e8"><strong>Service Quotas </strong>— Notify you when
                        you’re close to the service quota threshold</li>
                </ul>
            </div>
        </div>
    </div>

    <div role="separator"><span></span><span></span><span></span></div>
    <div>
        <div>
            <div>
                <h1 id="d26b">Advanced Identity</h1>
                <ul>
                    <li id="c000"><strong>IAM</strong><br>○ Identity and Access
                        Management inside your AWS account<br>○ For users that you trust and belong to your company</li>
                    <li id="60f2"><strong>Organizations</strong> — Manage multiple
                        accounts</li>
                    <li id="8b13"><strong>Security Token Service (STS) </strong>—
                        temporary, limited-privileges credentials to access AWS resources</li>
                    <li id="98df"><strong>Cognito</strong> — Create a database of users
                        for your mobile &amp; web applications</li>
                    <li id="2933"><strong>Directory Services </strong>— Integrate
                        Microsoft Active Directory in AWS</li>
                    <li id="5a40"><strong>IAM Identify Center </strong>— One login for
                        multiple AWS accounts &amp; applications</li>
                </ul>
            </div>
        </div>
    </div>

    <div role="separator"><span></span><span></span><span></span></div>
    <div>
        <div>
            <div>
                <h1 id="d617">AWS Support Plan</h1>
                <p id="1368">There are four AWS support plans available:</p>
                <ul>
                    <li id="d1ec"><strong>Basic </strong>— billing and account support
                        only (access to forums only).</li>
                    <li id="4541"><strong>Developer </strong>— business hours support
                        via email.</li>
                    <li id="c193"><strong>Business</strong> — 24×7 email, chat, and
                        phone support.</li>
                    <li id="8fb7"><strong>Enterprise </strong>— 24×7 email, chat, and
                        phone support.</li>
                </ul>
                <figure>
                    <div role="button" tabindex="0">
                        <div>
                            <picture>
                                <img alt="" width="700" height="268" loading="lazy" role="presentation"
                                    src="\images\AWS Cloud Practitioner Certification Cheat Sheet_files/0_IoFRfh0fZF7o99Pz.png">
                            </picture>
                        </div>
                    </div>
                </figure>
                <figure>
                    <div role="button" tabindex="0">
                        <div>
                            <picture>
                                <img alt="" width="700" height="286" loading="lazy" role="presentation"
                                    src="\images\AWS Cloud Practitioner Certification Cheat Sheet_files/0_-Ygdk5l4SyWOo9Of.png">
                            </picture>
                        </div>
                    </div>
                </figure>
            </div>
        </div>
    </div>
    <div role="separator"><span></span><span></span><span></span></div>

    <div>
        <div>
            <div>
                <h1 id="8309">AWS Well-Architected and the Six Pillars</h1>

                <p id="b3f7">The AWS Well-Architected Framework describes key concepts,
                    design
                    principles, and architectural best practices for designing and running workloads in the cloud. By
                    answering a few foundational questions, learn how well your architecture aligns with cloud best
                    practices and gain guidance for making improvements.</p>
                <figure>
                    <div role="button" tabindex="0">
                        <div>
                            <picture>
                                <img alt="" width="700" height="418" loading="eager" role="presentation"
                                    src="\images\AWS Cloud Practitioner Certification Cheat Sheet_files/0_CIN9GQdKLwJt_tK4.png">
                            </picture>
                        </div>
                    </div>
                </figure>
                <ul>
                    <li id="bec8"><strong>Operational Excellence Pillar</strong> —
                        Includes the ability to run and monitor systems to deliver business value and to continually
                        improve supporting processes and procedures</li>
                    <li id="6116"><strong>Performance Efficiency Pillar</strong> — The
                        performance efficiency pillar focuses on the structured and streamlined allocation of IT and
                        computing resources. Key topics include selecting resource types and sizes optimized for
                        workload requirements, monitoring performance, and maintaining efficiency as business needs
                        evolve.</li>
                    <li id="15c2"><strong>Reliability Pillar </strong>— The reliability
                        pillar focuses on workloads performing their intended functions and how to recover quickly from
                        failure to meet demands. Key topics include distributed system design, recovery planning, and
                        adapting to changing requirements.</li>
                    <li id="6b36"><strong>Security Pillar</strong> — The security
                        pillar focuses on protecting information and systems. Key topics include confidentiality and
                        integrity of data, managing user permissions, and establishing controls to detect security
                        events.</li>
                    <li id="8690"><strong>Cost Optimization Pillar</strong> — The cost
                        optimization pillar focuses on avoiding unnecessary costs. Key topics include understanding
                        spending over time and controlling fund allocation, selecting resources of the right type and
                        quantity, and scaling to meet business needs without overspending.</li>
                    <li id="b078"><strong>Sustainability Pillar </strong>— The
                        sustainability pillar focuses on minimizing the environmental impacts of running cloud
                        workloads. Key topics include a shared responsibility model for sustainability, understanding
                        impact, and maximizing utilization to minimize required resources and reduce downstream impacts.
                    </li>
                </ul>
                <h2 id="a182">AWS Cloud Adoption Framework (AWS CAF)</h2>
                <figure>
                    <div role="button" tabindex="0">
                        <div>
                            <picture>
                                <img alt="" width="700" height="418" loading="lazy" role="presentation"
                                    src="\images\AWS Cloud Practitioner Certification Cheat Sheet_files/0_FMZm6iwa6Bu8YmH0.png">
                            </picture>
                        </div>
                    </div>
                </figure>
            </div>
        </div>

    </div>
    <div role="separator"><span></span><span></span><span></span></div>
    <div>
        <div>
            <div>
                <h1 id="2575">Other Services</h1>
                <ul>
                    <li id="3018"><strong>Amazon WorkSpace<br></strong>○ Managed
                        Desktop as a Service (DaaS) solution to easily <strong>provision Windows or Linux
                            desktops</strong><br>○ <strong>Great to eliminate management of on-premiseVDI
                        </strong>(Virtual Desktop Infrastructure)<br>○ Fast and quickly scalable to thousands of
                        users<br>○ Secured data – integrates with KMS<br>○ Pay-as-you-go service with monthly or hourly
                        rates</li>
                    <li id="e886"><strong>Amazon AppSteam 2.0</strong><br>○ Desktop
                        Application Streaming Service<br>○ Deliver to any computer, without acquiring, provisioning
                        infrastructure<br>○ <strong>The application is delivered from within a web
                            browser</strong></li>
                    <li id="597b"><strong>AWS IoT Core</strong><br>○ AWS IoT Core
                        allows you to easily connect IoT devices to the AWS Cloud<br>○ <strong>Serverless,
                            secure &amp; scalable</strong> to billions of devices and trillions of messages<br>○ Your
                        applications can communicate with your devices even when they aren’t connected</li>
                    <li id="2204"><strong>Amazon Elastic Transcoder<br></strong>○
                        ElasticTranscoder is used to <strong>convert media files stored in S3 into media
                            files in the formats required by consumer playback devices</strong> (phones etc..)</li>
                    <li id="0b56"><strong>AWS AppSync</strong><br>○ Store and sync data
                        across mobile and web apps in real-time<br>○ <strong>Makes use of GraphQL</strong>
                        (mobile technology from Facebook)</li>
                    <li id="ac77"><strong>AWS Amplify — </strong>A set of tools and
                        services that helps you develop and deploy scalable full-stack web and mobile applications</li>
                    <li id="b0a7"><strong>AWS Device Farm</strong> — Fully-managed
                        service that tests your web and mobile apps against desktop browsers, real mobile devices, and
                        tablets</li>
                    <li id="c940"><strong>AWS Backup </strong>— Fully-managed service
                        to centrally manage and automate backups across AWS services</li>
                    <li id="017e"><strong>Disaster Strategy</strong><br>○ Backup and
                        Restore<br>○ Pilot Light<br>○ Warm Standby<br>○ Multi-site/Hot-site</li>
                </ul>
                <figure>
                    <div role="button" tabindex="0">
                        <div>
                            <picture>
                                <img alt="" width="700" height="356" loading="eager" role="presentation"
                                    src="\images\AWS Cloud Practitioner Certification Cheat Sheet_files/0_HI8EzgiOc8wd-6iT.jpg">
                            </picture>
                        </div>
                    </div>
                </figure>
                <ul>
                    <li id="431e"><strong>Amazon Elastic Disaster Recovery (DRS) —
                        </strong>Quickly and easily recover your physical, virtual, and cloud-based servers into AWS
                    </li>
                    <li id="94a2"><strong>AWS DataSync</strong><br>○ Move large amounts
                        of data from on-premises to AWS<br>○ Replication tasks can be scheduled hourly, daily,
                        weekly<br>○ The replication tasks are <strong><em>incremental</em></strong> after the first full
                        load</li>
                    <li id="a9fa"><strong>AWS Application Discovery
                            Service</strong><br>○ Plan migration projects by gathering information about on-premises
                        data centers<br>○ Server utilization data and dependency mapping are important for
                        migrations<br>○<strong> Agentless Discovery</strong> (AWS Agentless Discovery
                        Connector) → VM inventory, configuration, and performance history such as CPU, memory, and disk
                        usage <br>○ <strong>Agent-based Discovery</strong> (AWS Application Discovery
                        Agent) → System configuration, system performance, running processes, and details of the network
                        connections between systems<br>○ Resulting data can be viewed within AWS Migration Hub</li>
                    <li id="f364">AWS Application Migration Service (MNG)</li>
                    <li id="e796">AWS Migration Evaluator</li>
                    <li id="9b57"><strong>AWS Migration Hub</strong><br>○ Central
                        location to collect servers and applications inventory data for the assessment, planning, and
                        tracking of migrations to AWS<br>○ Helps accelerate your migration to AWS, automate
                        lift-and-shift<br>○ <strong>AWS Migration Hub Orchestrator</strong> — provides
                        pre-built templates to save time and effort migrating enterprise apps (e.g., SAP, Microsoft SQL
                        Server…)<br>○ Supports migrations status updates from A<strong>pplication
                            Migration Service (MGN)</strong> and <strong>Database Migration Service
                            (DMS)</strong></li>
                    <li id="350b"><strong>AWS Fault Injection Simulator
                            (FIS)</strong><br>○ A fully managed service for running fault injection experiments on AWS
                        workloads<br>○ Based on Chaos Engineering — stressing an application by creating disruptive
                        events (e.g., a sudden increase in CPU or memory), observing how the system responds, and
                        implementing improvements<br><strong>AWS Step Functions</strong><br>○ Build a
                        serverless visual workflow to orchestrate your Lambda functions<br>○Use cases: order
                        fulfillment, data processing, web applications, any workflow</li>
                    <li id="00ae"><strong>AWS Ground Station</strong><br>○ Fully
                        managed service that lets you control satellite communications, process data, and scale your
                        satellite operations<br>○ Use cases: weather forecasting, surface imaging, communications, video
                        broadcasts</li>
                    <li id="6e04"><strong>Amazon Pinpoint</strong><br>○ Scalable 2-ways
                        (inbound/outbound) marketing communication service<br>○ Supports email, SMS, push, voice, and
                        in-app messaging<br>○ Use cases: run campaigns by sending marketing, bulk, and transactional SMS
                        messages</li>
                </ul>
            </div>
        </div>
    </div>

    <div></div>

</body>

</html>

<!-- regular expression to specify all classes ==> class="[^"]*" -->