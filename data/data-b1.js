const dataB1 = [
  {
    que: [
      'What is the MAIN management tool used for managing Azure resources with a graphical user interface?',
    ],
    ans: ['Azure Portal'],
  },
  {
    que: [
      'Which of the following Azure features is most likely to deliver the most immediate savings when it comes to reducing Azure costs?',
    ],
    ans: ['Using Azure Reserved Instances for most of your virtual machines'],
  },
  {
    que: ['Using Azure Reserved Instances for most of your virtual machines'],
    ans: ['Azure DevOps'],
  },
  {
    que: [
      'Which of the following is something that Azure Cognitive Services API can currently do?',
    ],
    ans: ['All of these! Azure can do it all!'],
  },
  {
    que: [
      'Azure Services can go through several phases in a Service Lifecycle. What are the three phases called?',
    ],
    ans: ['Private Preview, Public Preview, and General Availability'],
  },
  {
    que: [
      'True or false:',
      'you can create your own policies if built-in Azure Policy is not sufficient to your needs',
    ],
    ans: ['True'],
  },
  {
    que: [
      'What Azure tool gives you the ability to manage multiple subscriptions into nested hierarchies?',
    ],
    ans: ['Management Groups'],
  },
  {
    que: [
      'What is the most number of virtual machines that can me managed under a single Virtual Machine Scale Set?',
    ],
    ans: ['1000'],
  },
  {
    que: ['What makes a system highly available?'],
    ans: [
      'A system specifically designed to be resilient, with no single point of failures',
    ],
  },
  {
    que: [
      'Which major cloud provider offers the most international locations for customers to provision virtual machines and other servers?',
    ],
    ans: ['Microsoft Azure'],
  },
  {
    que: [
      'True or False:',
      'Azure has the responsibility to manage the hardware in the Infrastructure as a Service model',
    ],
    ans: ['True'],
  },
  {
    que: ['What are Azure Availability Zones?'],
    ans: [
      'A feature of Azure that allows you to manually specify into which data center your virtual machines are placed, which allows you to achieve higher availability than any other option.',
    ],
  },
  {
    que: [
      'Can you give someone else access to your Azure subscription without giving them your user name and password?',
    ],
    ans: ['Yes'],
  },
  {
    que: [
      'Which Azure website tool is available for you to estimate the future costs of your Azure products and services by adding products to a shopping basket and helping you calculate the costs?',
    ],
    ans: ['Azure Pricing Calculator'],
  },
  {
    que: [
      'True or false:',
      'there are no service level guarantees (SLA) when a service is in General Availability (GA)',
    ],
    ans: ['False'],
  },
  {
    que: ['Outlook 365 is what type of hosting model?'],
    ans: ['SaaS'],
  },
  {
    que: [
      'One of the benefits of the cloud is agility. What does that mean in the context of the cloud?',
    ],
    ans: ['The ability to respond to and drive market change quickly'],
  },
  {
    que: ['What is a DDoS attack?'],
    ans: [
      'A denial of service attack that sends so much traffic to a network that it cannot respond fast enough; legitimate users become unable to use the service',
    ],
  },
  {
    que: [
      'A denial of service attack that sends so much traffic to a network that it cannot respond fast enough; legitimate users become unable to use the service',
    ],
    ans: [
      'Resources that perform some type of task that requires CPU cycles to perform the work',
    ],
  },
  {
    que: [
      'What is the basic way of protecting an Azure Virtual Network subnet?',
    ],
    ans: ['Network Security Group'],
  },
  {
    que: [
      'An IT administrator has the requirement to control access to a specific app resource using multi-factor authentication. What Azure service satisfies this requirement?',
    ],
    ans: ['Azure AD'],
  },
  {
    que: [
      'Logic apps, functions, and service fabric are all examples of what model of compute within Azure?',
    ],
    ans: ['Serverless model'],
  },
  {
    que: ['What is Single Sign-On?'],
    ans: [
      'The ability to use an existing user id and password to sign in other applications, and not have to create/memorize a new one.',
    ],
  },
  {
    que: [
      'What hardware device is required to exist or be installed on your company network in order to set up a site-to-site VPN?',
    ],
    ans: ['VPN Gateway'],
  },
  {
    que: [
      'Your organization has implemented an Azure Policy that restricts the type of Virtual Machine instances you can use. How can you create a VM that is blocked by the policy?',
    ],
    ans: [
      'The only way is to remove the policy, create the resource and add the policy back',
    ],
  },
  {
    que: [
      'The only way is to remove the policy, create the resource and add the policy back',
    ],
    ans: ['Azure Security Center'],
  },
  {
    que: [
      'True or false:',
      'Formal support is not included in private preview mode.',
    ],
    ans: ['True'],
  },
  {
    que: [
      'Which tool within Azure helps you to track your compliance with various international standards and government laws?',
    ],
    ans: ['Compliance Manager'],
  },
  {
    que: ["What is the name of Azure's hosted SQL database service?"],
    ans: ['Azure SQL Database'],
  },
  {
    que: [
      'What service does Azure provide as an optional upgrade to protect against DDoS attacks?',
    ],
    ans: ['Azure DDoS Protection Standard'],
  },
  {
    que: [
      'What service does Azure provide as an optional upgrade to protect against DDoS attacks?',
    ],
    ans: [
      'Two or more virtual machines across availability zones in the same region',
    ],
  },
  {
    que: [
      'Which of the following is a feature of the cool access tier for Azure Storage?',
    ],
    ans: ['Much cheaper to store your files than the hot access tier'],
  },
  {
    que: [
      'Which feature within Azure collects all of the logs from various resources into a central dashboard, where you can run queries, view graphs, and create alerts on certain events?',
    ],
    ans: ['Azure Monitor'],
  },
  {
    que: [
      'What feature within Azure will make recommendations to you about reducing cost on your account?',
    ],
    ans: ['Azure Advisor'],
  },
  {
    que: ['A virtual machine is called what type of hosting model?'],
    ans: ['IaaS'],
  },
  {
    que: [
      'True or false:',
      'You cannot have more than one Azure subscription per company',
    ],
    ans: ['False'],
  },
  {
    que: [
      'What benefit does a Content Delivery Network (CDN) provide its users?',
    ],
    ans: [
      'Allows you to reduce the traffic coming into a web server for static, unchanging files such as images, videos and PDFs',
    ],
  },
  {
    que: [
      'Who is responsible for the security of your Azure Storage account access keys?',
    ],
    ans: ['I am responsible for securing the access keys'],
  },
  {
    que: [
      'What is the name of the group of services inside Azure that hosts the Apache Hadoop big data analysis tools?',
    ],
    ans: ['HDInsight'],
  },
  {
    que: ['What feature of a system makes it elastic?'],
    ans: ['The ability to increase and reduce capacity based on actual demand'],
  },
  {
    que: [
      'Which Azure Service contains pre-built machine learning models that you can use in your own code, using an API?',
    ],
    ans: ['Cognitive Services'],
  },
  {
    que: [
      'True or False:',
      'Azure is a public cloud, and has no private cloud offerings',
    ],
    ans: ['False'],
  },
  {
    que: [
      'What type of container is used to collect log and metric data from various Azure Resources?',
    ],
    ans: ['Log Analytics Workspace'],
  },
  {
    que: [
      'Who is responsible for the security of the physical servers in an Azure data center?',
    ],
    ans: ['Azure is responsible for securing the physical data centers'],
  },
  {
    que: [
      'If you wanted to simply use Azure as an extension of your own datacenter, not primarily hosting anything there but using it for extra storage or taking advantage of some services, what hosting model is that called?',
    ],
    ans: ['Hybrid Cloud'],
  },
  {
    que: [
      'Which ways does the Azure Resource Manager model provide to deploy resources?',
    ],
    ans: ['CLI', 'REST API/SDK', 'Azure Portal', 'Powershell'],
  },
  {
    que: ["What is Azure's preferred Identity/authentication service?"],
    ans: ['Azure Active Directory'],
  },
  {
    que: [
      'What is the default amount of credits that you are given when you first create an Azure Free account?',
    ],
    ans: ['The default is US$200'],
  },
  {
    que: [
      'Which feature of Azure Active Directory will require users to have their mobile phone in order to be able to log in?',
    ],
    ans: ['Multi-Factor Authentication'],
  },
  {
    que: [
      'Why would someone prefer a Consumption-based pricing model as opposed to a Time-based pricing model?',
    ],
    ans: [
      "You can save a lot of money if you don't use the resource often as opposed to having it available for use 24/7",
    ],
  },
]
