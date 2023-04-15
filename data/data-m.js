const dataM = [
  {
    que: ['What feature of a system makes it elastic?'],
    ans: [
      'The ability of it to add and reduce capacity based on actual demand',
    ],
  },
  {
    que: [
      'Which Azure technology allows you to log in to Azure Active Directory device or application using your face, a PIN code, or a gesture instead of having to type a password?',
    ],
    ans: ['Password less'],
  },
  {
    que: [
      'Which Azure AD licenses (select two) are made available through Azure?',
    ],
    ans: ['Office 365', 'Azure Active Directory Free'],
  },
  {
    que: [
      'It can be said that most services in Azure have a public endpoint by default. What is a public endpoint?',
    ],
    ans: [
      'Enables access to your data or application from outside the virtual network.',
    ],
  },
  {
    que: [
      'Which feature within Azure alerts you to service issues that happen in Azure itself, not specifically related to your own resources?    ',
    ],
    ans: ['Azure Service Health'],
  },
  {
    que: ['Why is Azure App Services considered Platform as a Service?'],
    ans: [
      'You give Azure the code and the configuration, and you have no access to the underlying hardware',
    ],
  },
  {
    que: [
      'What benefit does Azure Scale sets provide when it comes to virtual machines in Azure?',
    ],
    ans: ['Can manage groups of virtual machines as one unit.'],
  },
  {
    que: ['What are Resource Groups in Azure?'],
    ans: [
      'A folder structure in Azure in which you organize resources like databases, virtual machines, virtual networks, or almost any resource ',
    ],
  },
  {
    que: [
      'Which of the following services would NOT be considered Infrastructure as a Service?',
    ],
    ans: ['Azure Functions App'],
  },
  {
    que: [
      'What Azure tool gives you the ability to manage multiple subscriptions into nested hierarchies?',
    ],
    ans: ['Management Groups'],
  },
  {
    que: [
      'True or false:',
      'You can create your own policies if built-in Azure Policy is not sufficient to your needs',
    ],
    ans: ['True'],
  },
  {
    que: [
      'Which Azure technology allows you to manage virtual machines running in Azure, in your own environment, and in other environments such as AWS?',
    ],
    ans: ['Azure Arc'],
  },
  {
    que: ['How does Multi-Factor Authentication make a system more secure?'],
    ans: [
      'It requires the user to have access to an additional device for identity verification',
    ],
  },
  {
    que: [
      'Which feature within Azure collects all of the logs from various resources into a central dashboard, where you can run queries, view graphs, and create alerts on certain events?',
    ],
    ans: ['Azure Monitor'],
  },
  {
    que: [
      'True or False:',
      'An Azure Storage Account can have both a public endpoint and a private endpoint at the same time.',
    ],
    ans: ['True'],
  },
  {
    que: [
      'Which of the following are factors in Total Cost of Ownership? Choose all that apply.',
    ],
    ans: [
      'Cost to access the Internet',
      'Real estate costs',
      'Cost of electricity',
      'Salary costs of employees managing the servers',
    ],
  },
  {
    que: [
      'True of false:',
      'Azure Powershell scripts and Command Line Interface (CLI) scripts are entirely compatible with each other?',
    ],
    ans: ['False'],
  },
  {
    que: ['Which storage redundancy option is the cheapest?'],
    ans: ['LRS'],
  },
  {
    que: ['What is the purpose of Azure Blueprints?'],
    ans: [
      'Allows you to create new subscriptions that already have policies, roles, resource groups, and ARM templates.',
    ],
  },
  {
    que: ['Which of the following are examples of Azure Sovereign Regions?'],
    ans: ['Azure China', 'Azure US Government'],
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
      'Why would someone prefer a Consumption-based pricing model as opposed to a Time-based (Fixed) pricing model?',
    ],
    ans: [
      "You can save a lot of money if you don't use the resource often as opposed to having it available for use 24/7",
    ],
  },
  {
    que: [
      'What Azure resource allows you to evenly split traffic coming in and direct it to several identical virtual machines to do the work and respond to the request?',
    ],
    ans: ['Load Balancer or Application Gateway'],
  },
  {
    que: [
      'What benefit does Availability Sets provide when it comes to virtual machines in Azure?',
    ],
    ans: [
      'Physically and logically separates virtual machines so that if one goes down, the others do not go down.',
    ],
  },
  {
    que: [
      'True or false:',
      'Azure Cloud Shell allows access to the CLI and Powershell consoles in the Azure Portal',
    ],
    ans: ['True'],
  },
  {
    que: [
      'Which of the following elements is considered part of the perimeter layer of security?',
    ],
    ans: ['Use a Firewall'],
  },
  {
    que: [
      'Which of the following scenarios would Azure Policy be a recommended method for enforcement?',
    ],
    ans: [
      'Prevent certain Azure Virtual Machine instance types from being used in a resource group',
    ],
  },
  {
    que: [
      'Which Azure Service gives you access to your own personalized Windows 10 or 11 desktop machine in the cloud, so that you can access your work files and applications wherever you go from any device?',
    ],
    ans: ['Azure Virtual Desktop'],
  },
  {
    que: [
      'True or false:',
      'Azure charges for bandwidth used inbound to Azure',
    ],
    ans: ['False'],
  },
  {
    que: ['What types of resources are defined as compute resources?'],
    ans: [
      'Resources that perform some type of task that requires CPU cycles to perform the work',
    ],
  },
  {
    que: [
      'True or false:',
      'You cannot have more than one Azure subscription per company',
    ],
    ans: ['False'],
  },
  {
    que: ['What is the benefit of economies of scale?'],
    ans: ['The more you buy of something, the cheaper it is for you'],
  },
  {
    que: [
      'With Azure public cloud, anyone with a valid credit card can sign up and get services immediately (subject to the usual country restrictions of course)',
    ],
    ans: ['True'],
  },
  {
    que: [
      'What operating systems does Microsoft supply Azure Virtual Machine images for?',
    ],
    ans: ['Window and Linux'],
  },
  {
    que: [
      'True or false:',
      'Azure Active Directory is a network gateway that load balances user logins using a CDN (Content Delivery Network).',
    ],
    ans: ['False'],
  },
  {
    que: ['What is a core principle of Zero Trust?'],
    ans: ['Assume your network has been breached already'],
  },
  {
    que: ['What does ARM an abbreviation for in Azure?'],
    ans: ['Azure Resource Manager'],
  },
  {
    que: [
      'What type of documents does the Microsoft Service Trust Portal provide?',
    ],
    ans: [
      "A list of standards that Microsoft follows, pen test results, security assessments, white papers, faqs, and other documents that can be used to show Microsoft's compliance efforts",
    ],
  },
  {
    que: [
      'Which of the following Azure Resources are required in order to have a virtual machine? Only choose services that are required, not ones that are optional.',
    ],
    ans: ['Virtual Network', 'Network Interface Card (NIC)', 'Storage Account'],
  },
  {
    que: [
      'What affect does using a "read only" resource lock on a Azure Storage Account have?',
    ],
    ans: [
      "The storage account cannot have its properties altered but it doesn't affect the data itself.",
    ],
  },
  {
    que: ['What are Azure Availability Zones?'],
    ans: [
      'A feature of Azure that allows you to manually specify into which Datacenter your virtual machines are placed, which allows you to achieve higher availability than any other option.',
    ],
  },
  {
    que: [
      'Which tool within the Azure Portal will make specific recommendations based on your actual usage for how you can improve your use of Azure?',
    ],
    ans: ['Azure Advisor'],
  },
  {
    que: ['Azure Advisor'],
    ans: ['Separate servers into distinct subnets by role'],
  },
  {
    que: ['What is Single Sign-On?'],
    ans: [
      'The ability to log in once and use the existing userId and password to sign in other applications, and not have to create/memorize a new one.',
    ],
  },
  {
    que: [
      'How many availability zones are there in each region (for regions that have them)?',
    ],
    ans: ['3'],
  },
  {
    que: [
      'True or False:',
      'Under the Infrastructure as a Service model, Azure is responsible for managing the physical host, physical network, and physical Datacenter.',
    ],
    ans: ['True'],
  },
  {
    que: [
      'Which of the following is the best approach when you need to copy large amount of files between two Azure Storage accounts?',
    ],
    ans: ['AzCopy'],
  },
  {
    que: ['What are the two features that Azure AD provides? Choose two.'],
    ans: ['Application management', 'Authentication'],
  },
  {
    que: ["What is Azure's preferred Identity/authentication service?"],
    ans: ['Azure Active Directory'],
  },
  {
    que: [
      'What is the fastest connection type between your on-premises network and Microsoft Azure, if money was not a concern?',
    ],
    ans: ['Express Route'],
  },
]
