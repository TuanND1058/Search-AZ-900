const dataA1 = [
  {
    que: [
      'Which of the following services provides information about Azure service incidents, planned maintenance and can notify you of issues via Email, SMS and push notifications?',
    ],
    ans: ['Azure Service Health'],
  },
  {
    que: [
      'Which of the following services can automatically sign users in when they are on their corporate devices & connected to your corporate network?',
    ],
    ans: ['Single-Sign-On (SSO)'],
  },
  {
    que: [
      'The ___________________ is a regulation in EU law on data protection and privacy in the European Union and the European Economic Area.',
    ],
    ans: ['General Data Protection Regulation (GDPR)'],
  },
  {
    que: [
      'Which of the following is a distributed network of servers that can efficiently deliver web content to users?',
    ],
    ans: ['Azure Content Delivery Network'],
  },
  {
    que: [
      'A hacker group recently attacked your video streaming website and all your resources were exhausted and unavailable to your users. What can you do to prevent this type of attack in the future?',
    ],
    ans: ['Use Azure DDoS protection'],
  },
  {
    que: [
      'Your organization has an on-premise infrastructure. The requirement from senior management is to migrate everything to the cloud.',
    ],
    ans: ['Fault Tolerance'],
  },
  {
    que: [
      'Power BI can access infrequently used data from which of the following?',
    ],
    ans: ['Azure SQL Data Warehouse', 'Azure DataLake'],
  },
  {
    que: [
      'Suppose the lead architect in your company has asked your team to implement a PaaS based solution in Azure for a quick Proof-of-Concept (POC) to senior management. One of your colleagues goes ahead and creates an Azure App Service and 3 Azure Virtual machines.',
      'Would you agree with this implementation?',
    ],
    ans: ['No'],
  },
  {
    que: [
      'One of the primary benefits of using an Azure Key Vault is ____________.',
    ],
    ans: ['Key Management'],
  },
  {
    que: [
      'Which of the following Azure storage solutions meets ALL the following requirements:',
      '1) The ability to handle unstructured data (document, graph, key-value)',
      '2) Automatically index all data, regardless of the data model.',
      '3) Multi-region writes and data distribution to any Azure region.',
    ],
    ans: ['Azure Cosmos DB'],
  },
  {
    que: [
      'True or False:',
      "Resources don't inherit the tags you apply to a resource group or a subscription.",
    ],
    ans: ['True'],
  },
  {
    que: [
      'Which set of security standards in Azure relates to cardholder data?',
    ],
    ans: ['PCI DSS'],
  },
  {
    que: ['Select the characteristics of the Public Cloud from the following:'],
    ans: [
      'No capital expenditure to scale up',
      'Applications can be quickly provisioned and deprovisioned.',
    ],
  },
  {
    que: [
      '_________________ offers fully managed file shares in the cloud that are accessible via the industry standard Server Message Block (SMB) protocol or Network File System (NFS) protocol. This means it can be used to completely replace or supplement traditional on-premises file servers or NAS devices.',
    ],
    ans: ['Azure Files'],
  },
  {
    que: [
      'You plan to create a Netflix like streaming service and would like to serve video content to users worldwide. Which of the following would help you deliver the best possible service with least latency?',
    ],
    ans: ['A content delivery network (CDN)'],
  },
  {
    que: [
      'A resource group can contain resources from multiple Azure regions.',
    ],
    ans: ['Yes'],
  },
  {
    que: [
      'Which of the following can be used to manage your Azure Resources from an iPhone?',
    ],
    ans: ['Azure Cloud Shell', 'Azure Portal', 'Azure Mobile App'],
  },
  {
    que: [
      "When computing and processing demand increases beyond an on-premises datacenter's capabilities, businesses can easily use the ___________ cloud to instantly scale capacity up or down to handle excess capacity.",
    ],
    ans: ['Public'],
  },
  {
    que: [
      'You are a tech startup owner and would like to migrate your self hosted apps and services to Azure.',
      "Which of the following is an advantage of the Public Cloud that you'll realize thanks to the migration?",
    ],
    ans: [
      'Near unlimited scalability as on-demand resources are available to meet your business needs.',
    ],
  },
  {
    que: [
      'Which of the following Azure Support Plans grants access to:',
      '1) 24x7 Access to Support Engineers via email and phone',
      '2) Training in the form of webinars from Azure experts',
      '3) Access to the Support API',
    ],
    ans: ['Professional Direct'],
  },
  {
    que: ['Which of the following affect costs in Azure? (Choose 2)'],
    ans: ['Instance size', 'Location'],
  },
  {
    que: [
      'Which of the following can you use to implement strict governance and ensure that the right people have access to the right resources, and only when they need it.',
    ],
    ans: ['Azure Active Directory'],
  },
  {
    que: [
      'Yes or No:',
      'If you assign permissions to a resource group, all the resources inside it inherit these permissions',
    ],
    ans: ['Yes'],
  },
  {
    que: [
      'An organization would like to create a web app to allow its employees to enter their vacation / time-off details and then store that information in a backend storage solution. They have noted that Python is their preferred language.',
      'As the lead consultant, which service would you recommend?',
    ],
    ans: ['Azure App Service'],
  },
  {
    que: [
      'Yes or No:',
      'It is possible to deploy Azure resources through a Tablet by using Bash in the Azure Cloud Shell.',
    ],
    ans: ['Yes'],
  },
  {
    que: ['What is the present maximum capacity for storage accounts?'],
    ans: ['5 PB'],
  },
  {
    que: ['Yes or no?', 'All resource types support Tags in Azure.'],
    ans: ['No'],
  },
  {
    que: [
      'Azure virtual machines (VM) are classified as which of the following offerings?',
    ],
    ans: ['Infrastructure-as-a-service (Iaas)'],
  },
  {
    que: [
      'Which of the following services allows you to send events generated from Azure resources to applications?',
    ],
    ans: ['Azure Event Grid'],
  },
  {
    que: ['When should you scale out your deployment?'],
    ans: [
      'When you need additional Virtual Machines / computers to speed up your application',
    ],
  },
  {
    que: [
      'Yes or No:',
      'Your company has explored some of the services in Azure Public preview. One of the architects working in your team has advised to deploy mission critical services/applications to these services. Do you agree?',
    ],
    ans: ['No'],
  },
  {
    que: [
      'You are the senior architect of XYZ organization and the senior management has requested to migrate all on-prem resources to the cloud.',
      'The requirement is that only Platform as a Service (PaaS) solutions must be used in Azure.',
      'Solution: To begin with, you create an Azure App Service and Azure SQL databases.',
      'Would this meet the goal?',
    ],
    ans: ['Yes'],
  },
  {
    que: [
      'During live telecasts of football matches, streaming platforms sometimes experience massive spikes in viewerships and users visiting their websites when a goal is scored. Which of the following would be beneficial to deal with such expected demand of resources?',
    ],
    ans: ['Serverless Computing'],
  },
  {
    que: [
      'Which of the following services can help you:',
      '- Assign time-bound access to resources using start and end dates',
      '- Enforce multi-factor authentication to activate any role',
    ],
    ans: ['Azure Privileged Identity Management'],
  },
  {
    que: [
      'You can significantly reduce costs (up-to 72%) as compared to pay-as-you-go pricing by  _______________.',
    ],
    ans: ['Using Reserved Instances'],
  },
  {
    que: [
      'Which of the following services provides a personalized view of the health of the Azure services, regions, and resources you rely on?',
    ],
    ans: ['Azure Service Health'],
  },
  {
    que: [
      'You have managed an app that you developed and deployed On-Prem for a long time, but would now like to move it to Azure and be relieved of all the manual administration and maintenance. Which of the following buckets would be most suitable for your use case?',
    ],
    ans: ['Platform as a Service (PaaS)'],
  },
  {
    que: [
      'Yes or No:',
      'Permissions are by default inherited by all resources residing in a resource group.',
    ],
    ans: ['Yes'],
  },
  {
    que: [
      'Yes or No:',
      'Inter-Region transfer of data is always free of cost.',
    ],
    ans: ['No'],
  },
  {
    que: [
      'When you as a consumer are implementing a Software as a Service (SaaS) solution, you are responsible for configuring high availability.',
      'Instructions : Review the bolded text. If the statement is already correct, select',
      '"No change is needed". If the statement is incorrect, choose the option below that',
      'would make the statement correct.',
    ],
    ans: ['Configuring the SaaS solution'],
  },
  {
    que: [
      '________________  is the mission-critical cloud, delivering breakthrough innovation to US government customers and their partners. Only US federal, state, local, and tribal governments and their partners have access to this dedicated instance, with operations controlled by screened US citizens.',
    ],
    ans: ['Azure Government'],
  },
  {
    que: [
      'Yes or No:',
      'Deleting a resource groups deletes all the resources inside it as well.',
    ],
    ans: ['Yes'],
  },
  {
    que: [
      'Yes or No:',
      'A resource can belong to more than one resource group',
    ],
    ans: ['No'],
  },
  {
    que: [
      'You have dozens of Virtual Machines (VM) hosted in Azure. The lead architect has asked for your suggestions to migrate all the VMs to an Azure pay-as-you-go subscription. Which expenditure model would apply to the stated requirement?',
    ],
    ans: ['Operational'],
  },
  {
    que: [
      'Yes or No:',
      'When you create a resource group, you need to provide a location for that resource group.',
    ],
    ans: ['Yes'],
  },
  {
    que: [
      "You've been asked by senior management to prepare a presentation describing not only the benefits, but also the estimated cost savings you can realize by migrating your workloads to Azure. As the lead architect, which service would you use for these calculations?",
    ],
    ans: ['Azure TCO calculator'],
  },
  {
    que: [
      'A client of yours is a content creator and would like to be notified via Email whenever their course is purchased. Which of the following solutions would be best suited for this automation?',
    ],
    ans: ['A Logic App'],
  },
  {
    que: [
      'For industries that work with highly sensitive data, such as banking, finance, government, and healthcare, ___________ cloud may be their best cloud option.',
    ],
    ans: ['Hybrid'],
  },
  {
    que: [
      'Yes or No:',
      'We get total control of the underlying Operating System when working with Platform As a Service (PaaS) solutions.',
    ],
    ans: ['No'],
  },
  {
    que: [
      'Your company plans to deploy multiple Virtual Machines in Azure. As the lead architect, you must ensure that all these virtual machines are available if a single data center fails.',
      'Solution: You deploy the virtual machines to two or more Availability Zones.',
      'Would this solution meet the goal?',
    ],
    ans: ['yes'],
  },
  {
    que: [
      'Yes or No:',
      'One of the definitions of the Hybrid cloud model is to use multiple Public Clouds in conjunction with a Private Cloud.',
    ],
    ans: ['Yes'],
  },
  {
    que: [
      'Yes or No:',
      'Data in an Azure storage account is replicated 3 times in the primary region.',
    ],
    ans: ['Yes'],
  },
  {
    que: [
      'Which of the following is a server-less solution that allows you to write less code, maintain less infrastructure, and save on costs.?',
    ],
    ans: ['Azure Functions'],
  },
  {
    que: [
      'Which of the following services would you help achieve the following:',
      '1) Create and manage a group of load balanced VMs.',
      '2) Provide high availability and application resiliency by distributing VMs across availability zones',
      '3) Allows your application to automatically scale as resource demand changes',
    ],
    ans: ['Azure Scale Sets'],
  },
  {
    que: [
      '____________ is an agreement with Microsoft to use one or more Microsoft cloud platforms or services, for which charges accrue based on either a per-user license fee or on cloud-based resource consumption.',
    ],
    ans: ['A Subscription'],
  },
  {
    que: [
      'Which of the following statements is accurate?',
      'If you want to migrate a website that is hosted On-Prem at the moment to Azure, one of the clear benefits is the Pay-As-You-Go Pricing that comes with Azure.',
    ],
    ans: ['The given statement is correct.'],
  },
  {
    que: [
      'Which of the following statements is True?',
      'You have a mission critical deployment on the Azure cloud consisting of an Azure SQL  Database that has a Service Level Agreement (SLA) of 99.99 percent and a Web App that has an SLA of 99.95 percent.',
      'The composite SLA for the application is the product of both SLAs, which equals 99.94 percent.',
    ],
    ans: ['The given statement is correct without any changes needed.'],
  },
  {
    que: [
      'Suppose the lead architect in your company has asked your team to implement a PaaS based solution in Azure for a quick Proof-of-Concept (POC) to senior management. One of your colleagues goes ahead and creates an Azure Logic App and an Azure Data Factory deployment.',
      'Would you agree with this implementation?',
    ],
    ans: ['Yes'],
  },
  {
    que: [
      'One of the teams in your company is looking for a solution for collecting, analyzing, and potentially taking action based on the metric and logging data from your entire Azure and on-premises environment.',
      'Which of the following would you recommend?',
    ],
    ans: ['Azure Monitor'],
  },
  {
    que: [
      'Which of the following displays personalized recommendations for all your subscriptions, and you can use filters to select recommendations for specific subscriptions, resource groups, or services?',
    ],
    ans: ['Azure Advisor'],
  },
]
