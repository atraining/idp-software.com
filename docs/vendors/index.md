# List of IDP Vendors

This section contains information about various vendors that provide IDP (Intelligent Document Processing) software solutions.

Each vendor has its own dedicated page with detailed information about their product offerings, features, pricing, and integration capabilities.

## Adding a New Vendor

If you would like to add information about a new vendor:

1. Follow the [contribution guide](../contribution/index.md) to learn how to set up a vendor folder
2. Create a pull request with your additions
3. I will review and merge your contribution

## Comparing Vendors

When evaluating different IDP software vendors, consider the following aspects:

- **OCR Capabilities**: Accuracy, language support, handling of complex layouts
- **AI/ML Features**: Machine learning capabilities, training requirements
- **LLM Integration**: Use of Large Language Models for enhanced understanding
- **Integration Options**: APIs, connectors to other systems
- **Deployment Options**: Cloud, on-premise, hybrid
- **Pricing Model**: Subscription, pay-per-use, volume-based
- **Industry Focus**: Whether the vendor specializes in specific industries

Each vendor page aims to provide this information to help you make informed decisions.

### Text Recognition & Data Extraction  

- Can the system extract text from PDFs (e.g., orders, invoices)?  
- Does the system support multilingual text recognition?  
- Can structured data fields be recognized?  
- Can the AI recognize tables and offer positions?  
- Can individual items be extracted from offers?  
- Is handwriting recognized?  
- Is the text recognition trainable?  
- What is the text recognition rate after training?  
- Does the system support the recognition of structured free-text information?  
- Can text be extracted from scanned images?  
- Can specific content such as customer numbers be extracted?  

### Document Formats & Layouts  

- Which file formats are supported?  
- Can PDF, Word, and Excel files be processed?  
- Does the system support different layouts (free and structured)?  
- Can documents with a cover page be recognized?  
- Can the system handle multi-page documents?  
- Which layouts can be processed automatically?  
- How many document types can be processed at once?  
- Can documents with multiple tables per page be recognized?  

### Time Details & Date Formats  

- Are different date formats recognized?  
- Can time zones be interpreted correctly?  
- Is customization for country-specific date formats possible?  

### AI Technology & Model Training  

- Does the system learn with each run?  
- Does the system support incremental learning?  
- Can individual models be trained?  
- Is there an SDK or GUI for training?  
- Are models provided or must they be created manually?  
- How demanding is the training for new layouts?  
- Can already trained models be adapted to new clients?  
- What recognition rate is realistic relative to training effort?  
- Does the system support uploading custom training data?  

### Automation & Processing  

- Is automatic batch processing possible?  
- Can multiple documents be processed in parallel?  
- Is there a function for automatic reading without user interaction?  
- Can uploads be processed automatically?  
- Is there a drag-and-drop function?  
- Can the system automatically categorize new documents?  
- Can workflows be triggered automatically?  

### Validation & Error Handling  

- How is accuracy measured?  
- What is the validation accuracy?  
- Is user-based validation available?  
- Is human correction foreseen?  
- Can validations be commented and versioned?  
- What happens in the case of false recognition?  
- Is the original document displayed for correction?  
- Can manual corrections be made afterwards?  

### Interfaces & Integration  

- Is there an API, and what standard does it use?  
- Does the system support REST/SOAP?  
- Is an SDK available for third-party integration?  
- Which systems are integrable (e.g., SAP, SharePoint, Outlook)?  
- Can data be exported automatically?  
- Which data formats are exported?  
- Are webhooks available?  
- Can metadata be exported?  
- How does the integration with DMS systems occur?  
- Is there a conversion interface?  
- Can external OCR results be imported?  
- Are different APIs supported in parallel?  

### Performance & Scalability  

- How quickly are documents processed?  
- Is guaranteed performance provided?  
- Is horizontal scaling supported?  
- Is vertical scaling supported?  
- Which technologies ensure 0-downtime?  
- How many documents per minute/hour can be processed?  
- Are performance logs available?  
- Can the system scale during peak times?  

### Architecture & Operation  

- Is on-premises deployment supported?  
- Is private cloud deployment possible?  
- What are the prerequisites for on-premises deployment (RAM, CPU)?  
- How is deployment carried out?  
- Are container solutions (e.g., Docker/Kubernetes) provided?  
- What is the system architecture?  
- Is multi-tenancy supported?  
- Are separate environments (test, production) available?  

### Security & Data Protection  

- Is the solution GDPR-compliant?  
- Are ISO or SOC2 certifications available?  
- Where is the data stored?  
- Is it possible to choose a storage location (e.g., EU data centers)?  
- How is data encryption implemented?  
- Are backups encrypted?  
- How long are backups stored?  
- Who has access to the data?  
- Are role-based access concepts available?  
- Is two-factor authentication possible?  
- Are there password rules (complexity, history)?  
- Are access logs available?  
- How is data deletion handled after contract termination?  
- Are defined processes for data deletion (RTO, RPO) in place?  
- Is there an internal data protection concept?  
- Is it ensured that the model does not learn across clients?  

### Data Usage, Export & Contract Termination  

- How is data deleted after contract termination?  
- Can data be exported before the contract ends?  
- Is snapshot export available?  
- How is the data returned?  
- Is knowledge from the customer project reused?  
- How quickly is deletion carried out (e.g., 30 days, immediately)?  

### Support & Documentation  

- Is training material available?  
- Is technical documentation provided?  
- Is there separate documentation for developers and users?  
- Is there a hotline or email support?  
- Is 24/7 support offered?  
- Where is the support team located?  
- How many people provide support?  
- Which communication channels are possible (e.g., phone, email, chat)?  
- Is support provided internally or by third parties?  
- Which languages does the support team speak?  

### References & Provider Information  

- How long has the company been in existence?  
- How many employees work on the product?  
- How many customers use the product?  
- Are there references in the industrial/B2B sector?  
- Are there existing long-term customer relationships?  
- Does the company work with subcontractors?


## Vendors without individual page

I would appreciate contributions from the following companies:

12. AOTM ([https://aotm.ai](https://aotm.ai/)): A cognitive intelligent document processing solution built for automation and efficiency.Bengalaru, India
13. Ascron:[https://ascron.com/](https://ascron.com/). Ascron's IDP solution simplifies document management processes and minimizes repetitive tasks. Warsaw, Poland.
14. Automat ([https://www.runautomat.com](https://www.runautomat.com/)): Simplifies automation for mid-market and enterprise customers. San Francisco, United States
15. Automation Anywhere:[https://www.automationanywhere.com](https://www.automationanywhere.com/). A leader in AI-powered process automation. San Jose, United States.
16. AutomationEdge: Offers a hyperautomation platform with RPA, AI, and IDP capabilities for end-to-end automation. Located in Houston, United States.[https://automationedge.com/](https://automationedge.com/).
18. BIS: Creator of Grooper, an intelligent data platform with 35 years of experience. Potentially no real IDP vendor. Located in Edmond, United States.[https://www.bisok.com/](https://www.bisok.com/).
19. Botminds AI ([https://www.botminds.ai](https://www.botminds.ai/)): Believes 'Document Understanding is the next frontier in AI', offering an IDP solution. Bellevue, United States
20. Cambrion ([https://www.cambrion.ai](https://www.cambrion.ai/)): Provides context-aware document processing for business automation. Munich, Germany
21. Captova Technologies ([https://www.captova.com](https://www.captova.com/)): Mission is to deliver the best-in-class Intelligent Document Processin. Vancouver, Canada
23. Celaton:[https://celaton.com](https://celaton.com/). Applies Intelligent Process Automation (IPA) technology, inSTREAM, to deliver benefits. Keynes, United Kingdom.
24. Cinnamon AI (pitch: https://www.youtube.com/watch?v=9SsDXSRzrlk, https://www.youtube.com/watch?v=Ym13Uwja9xk) (Homepage no longer available): An AI Document Reader to automate the data extraction from unstructured documents. Tokyo, Japan
25. ClearDox ([https://www.cleardox.com](https://www.cleardox.com/)): Allows commodity-intensive businesses to secure a competitive advantage through document automation. Stamford, United States
26. codemantra:[https://codemantra.com](https://codemantra.com/). Helps businesses and organizations across industries with document processing. Boston, United States.
27. Cogent Labs (<https://www.cogent.co.jp/en/>): Develops and provides AI solutions, including SmartRead. Tokyo, Japan
28. Cognaize: Offers an Intelligent Document Processing solution that automates complex financial workflows. Located in New York, United States.[https://www.cognaize.com/](https://www.cognaize.com/).
29. Cogniquest: Specializes in developing solutions for extracting information from unstructured data. Located in Bengalaru, India. [https://www.cogniquest.ai/](https://www.cogniquest.ai/).
30. Concord Technologies ([https://concord.net](https://concord.net/)): A provider of secure document exchange and document processing. Seattle, United States
31. Datamatics:[https://www.datamatics.com](https://www.datamatics.com/). Enables enterprises to go Deep in Digital to boost productivity. Edison, United States.
32. DB Intelab:[https://www.dbintelab.com](https://www.dbintelab.com/). An enterprise solution company offering an Intelligent Document Processing, Petaling Jaya, Malaysia.
33. Deep Cognition ([https://deepcognition.ai](https://deepcognition.ai/)): Specializes in using advanced AI to automate complex data entry. Dallas, United States
34. DeepOpinion ([https://www.deepopinion.ai](https://www.deepopinion.ai/)): A no-code platform enabling teams to build human-level AI bots for document automation. Innsbruck, Austria
35. DocAcquire: Helps companies unlock value from unstructured content through their platform. Located in London, United Kingdom.[https://www.docacquire.com/](https://www.docacquire.com/).
36. DocBits ([https://docbits.com](https://docbits.com/)): FELLOWPRO AG's star product, a software solution for document capture. Poing, Germany
37. Docketry ([https://docketry.ai](https://docketry.ai/)): An intelligent document processing solution built with advanced AI/M. Cranbury, United States
38. DOConvert ([https://doconvert.co](https://doconvert.co/)): An IDP platform specializing in the supply chain and manufacturing industries. Tel Aviv, Israel
39. DocScience ([https://www.docscience.ai](https://www.docscience.ai/)): An AI platform from Nexyom, a company specializing in product deve.Folsom, United States
40. Docufai ([https://www.docufai.com](https://www.docufai.com/)): Built on Generative AI, Docufai removes the barriers to finding the information. Hayward, United States
41. Docugami ([https://www.docugami.com](https://www.docugami.com/)): Provides Generative AI for business documents with patented AI designed for accuracy. Kirkland, United States
42. Docusense ([https://docusense.ai](https://docusense.ai/)): Employs Intelligent Document Processing (IDP) for document workflows. Italy.
43. Docuworx ([https://docuworx.com.au](https://docuworx.com.au/)): Implements intelligent data capture with advanced optical character rec.North Adelaide, Australia
45. DocVu.AI ([https://www.docvu.ai](https://www.docvu.ai/)): Uses AI and Machine learning to transform information on documents. Cranbury, United States
46. Duco:[https://du.co](https://du.co/). Duco is an enterprise platform for data automation in financial institutions. London, United Kingdom.
47. EdgeVerve ([https://www.edgeverve.com](https://www.edgeverve.com/)): Powered by native AI and automation capabilities, with security and scalability. 560100 Bengalaru, India
49. Evolution AI:[https://www.evolution.ai](https://www.evolution.ai/). A multiple award-winning data extraction solution using the latest advancements in AI. London, United Kingdom.
50. ExB ([https://exb.de](https://exb.de/)): The flexible Intelligent Document Processing (IDP) Plattform. Munich, Germany
51. EXL ([https://www.exlservice.com](https://www.exlservice.com/)): A global analytics and digital solutions company. New York, United States
52. Extract Systems ([https://www.extractsystems.com](https://www.extractsystems.com/)): Makes software that gives organizations quick access to the data. Madison, United States
53. Extractly ([https://extractly.ai](https://extractly.ai/)): Advanced AI understands and processes organizations' accounting. North Wollongong, Australia
54. FormX.ai ([https://www.formx.ai](https://www.formx.ai/)): Eliminates manual data extraction from documents using AI. Stockport, United Kingdom
55. Haystac ([https://haystac.com](https://haystac.com/)): Built with a state-of-the-art AI/Machine Learning(ML)/Deep Learning. Newton, United States
56. HCLTech ([https://www.hcltech.com](https://www.hcltech.com/)): A global technology company, home to more than 227,000 people. Noida, India
57. HubBroker Aps (<https://hubbroker.com/>): More than just about EDI, iPaaS, API integratio. Horsholm, Denmark
58. HubBroker Aps:[https://hubbroker.com/](https://hubbroker.com/). More than just about EDI, iPaaS, API integratio. Horsholm, Denmark.
59. HuLoop Automation: Focuses on Human-in-the-Loop Intelligent Automation to transform work. Located in Auburn, United States.[https://huloop.ai/](https://huloop.ai/).
60. Hyland (<https://www.hyland.com/>): Puts companies' content to work, making it smarter and more accessible. Westlake, United States
61. Hypatos:[https://www.hypatos.ai](https://www.hypatos.ai/). Builds autonomous finance solutions for the enterprise. 10117 Berlin, Germany.
62. ibml ([https://www.ibml.com](https://www.ibml.com/)): Data drives business decisions, but it's locked away in documents. Birmingham, United States
63. iCustoms ([https://www.icustoms.ai](https://www.icustoms.ai/)): Customs Declaration Software that leverages artificial intelligence. London, United Kingdom
64. Impactsure ([https://www.impactsure.com](https://www.impactsure.com/)): An AI/ML-powered intelligent document processing and analytics Web platform. Mumbai, India
65. Indico Data:[https://indicodata.ai](https://indicodata.ai/). Indico Data offers an intelligent intake solution without compromising speed or accuracy. Boston, United States.
66. Infinia ML, an aspirion company -> homepage down: [https://infiniaml.com](https://infiniaml.com/), [Web Archive](https://web.archive.org/web/20250512103709/https://infiniaml.com/) potentially due to [acquisition](https://www.aspirion.com/aspirion-acquires-infinia-ml-an-established-leader-in-ai-and-machine-learning/). Infinia ML applies machine learning to knowledge work. Durham, United States.
67. inserve.ai ([https://www.inserve.de](https://www.inserve.de/)): Companies use inserve.ai services for intelligent processing of complex document. Hannover, Germany
69. Insiders Technologies:[https://insiders-technologies.com/en/](https://insiders-technologies.com/en/). A team of visionaries, innovators, and tech enthusiasts focused on process automation. Kaiserslautern, Germany.
70. Instabase:[https://www.instabase.com](https://www.instabase.com/). Instabase enables organizations to automate mission-critical processes. Menlo Park, United States.
71. ITyX Solutions AG:[https://www.ityxsolutions.com](https://www.ityxsolutions.com/). A provider of intelligent process automation. Cologne, Germany.
72. JIFFY.ai:[https://jiffy.ai](https://jiffy.ai/). Offers a no-code AI-powered platform for financial institutions and Fortune companies. Milpitas, United States.
73. Kanverse.ai:[https://www.kanverse.ai/](https://www.kanverse.ai/). Kanverse.ai offers hyperautomation solutions for enterprises. San Jose, United States.
74. KAPTO AI Ltd (<https://www.kapto.ai/>): Aims to fully automate end-to-end business processes. London, United Kingdom
75. Klassif.ai:[https://www.klassif.ai](https://www.klassif.ai/). Klassif.ai helps order processing teams increase productivity. Leuven, Belgium.
76. KlearStack ([https://klearstack.com](https://klearstack.com/)): Specializes in achieving intelligent data extraction and auditing from documents. Piscataway, United States
77. Kritical ([https://www.kritical.com](https://www.kritical.com/)): Helps construction and legal professionals save time and money durin. Amman, Jordan
78. Laiye:[https://laiye.com/en](https://laiye.com/en). Laiye is the pioneer of the Work Execution System. Beijing, China.
79. Letxbe ([https://www.letxbe.ai](https://www.letxbe.ai/)): A no-code platform from France specializing in intelligent document pr. Paris, France
80. Mely.ai:[https://www.mely.ai](https://www.mely.ai/). Mely.ai's mission is to help organizations automate their document processing operations. Montreal, Canada.
81. Mindee ([https://www.mindee.com](https://www.mindee.com/)): At the forefront of transforming document processing through their AI-powered APIs.Paris, France
82. MuleSoft ([https://www.mulesoft.com](https://www.mulesoft.com/)): Empowers teams to use AI to automatically extract and organize data from documents. San Francisco, United States
83. Netfira ([https://netfira.com](https://netfira.com/)): Mission is rooted in a deep understanding of the challenges. Walldorf, Germany
84. Netfira:[https://netfira.com](https://netfira.com/). Mission is rooted in a deep understanding of the challenges faced in m. Walldorf, Germany.
85. Nividous:[https://nividous.com/](https://nividous.com/). Nividous is an intelligent automation company focused on enabling organizational agility. 800 N Church St, Suite 105, 08057 Moorestown, United States.
86. Notable Systems (<https://notablesystems.com/>): Decreases the cost of organizations' manual data entry. Denver, United States
87. Ocrolus:[https://www.ocrolus.com](https://www.ocrolus.com/). Ocrolus is a document AI platform that enables faster and more accurate financial decisions. New York, United States.
88. OpenBots:[https://openbots.ai](https://openbots.ai/). Automates documents to IT systems as a full-featured Business Automation platform. Edison, United States.
89. Paperbox ([https://www.paperbox.ai](https://www.paperbox.ai/)): An AI-driven software company specialising in intelligent document processing. Gent, Belgium.
90. Parble (<https://parble.com/>): The API-based solution for Intelligent Document Processing. Brussels, Belgium
91. Parseur (<https://parseur.com/>): A leading AI document processing software ranging from email parsing. Singapore, Singapore
92. Pixydocs ([https://pixydocs.com](https://pixydocs.com/)): Building the IDP solution of the next 5-10 years. Pixydocs provides in. Lehi, United States
93. Process Fusion Inc ([https://www.processfusion.com](https://www.processfusion.com/)): A software company and a cloud services provider. Toronto, Canada
95. ProcessMaker:[https://www.processmaker.com](https://www.processmaker.com/). An American multinational corporation. Durham, United States.
96. qBotica:[https://qbotica.com](https://qbotica.com/). Leverages AI technology to revolutionize the workplace. Phoenix, United States.
97. Quantiphi ([https://quantiphi.com](https://quantiphi.com/)): An AI-first digital engineering company providing solutions. Marlborough, United States
98. RaccoonDoc ([https://raccoondoc.com](https://raccoondoc.com/)): A global provider of intelligent document-processing solutions (IDP). Kyiv, Ukraine
99. Reshape AI ([https://reshape-ai.com](https://reshape-ai.com/)): Provides an adaptive communication platform for intelligent document processing. Thatcham, United Kingdom
100. Retarus ([https://www.retarus.com](https://www.retarus.com/)): Focuses on digital transformation for processes and supply chains with intelligent document processing. Munich, Germany
101. Scale:[https://scale.com/](https://scale.com/). Mission is to accelerate the development of AI applications through their data platform. San Francisco, United States.
102. Send AI:[https://www.send.ai/](https://www.send.ai/). Mission is to empower companies to work with unstructured data in miss. Rotterdam, Netherlands.
103. Sensible ([https://www.sensible.so](https://www.sensible.so/)): A flexible API that transforms documents into structured data. San Francisco, United States
104. Skwiz ([https://www.skwiz.ai](https://www.skwiz.ai/)): Uses a mix of generative AI and its own optical character recognition (OCR) engine for document processing. Sint-Pieters-Woluwe, Belgium
105. 4Semantics (<https://4semantics.pl/en/>): Provider of Semantic Analytics. Warsaw, Poland
105. Smart Touch Technologies ([https://www.smartouch.ro](https://www.smartouch.ro/)): Offers Apollo, its Intelligent Document Processing plat. Bucharest, Romania
106. SortSpoke ([https://www.sortspoke.com](https://www.sortspoke.com/)): Helps companies with complex, unstructured, and varied documents through their IDP platform. Toronto, Canada
108. Square 9 Softworks:[https://www.square-9.com](https://www.square-9.com/). The Square 9 AI-powered intelligent information management platform. New Haven, United States.
109. Staple ([https://staple.io](https://staple.io/)): Developed an ML tool that reads, interprets and extracts structured documents, 069116 Singapore, Singapore
110. Straive:[https://www.straive.com](https://www.straive.com/). Potentially not a real IDP vendor. Helps clients operationalize from Data to AI value chain. Singapore, Singapore.
111. super.AI ([https://super.ai](https://super.ai/)): Leverages the power of AI for its Intelligent Document Processing (IDP) solution. San Francisco, United States
113. Unstructured: Aims to provide organizations with access to all their data. Located in Rocklin, United States.[https://unstructured.io/](https://unstructured.io/).
114. UST ([https://www.ust.com](https://www.ust.com/)): A global digital transformation solutions provider with UST SmartVision for intelligent document processing. Aliso Viejo, United States
115. WorkFusion:[https://www.workfusion.com](https://www.workfusion.com/). WorkFusion is a provider of Intelligent Automation solutions for Fortune 500 enterprises. New York, United States.
116. Workist (<https://www.workist.com/en>): Solves companies' document processing holistically, Berlin, Germany
117. Xen.AI:[https://xen.ai/](https://xen.ai/). Intelligent Document Processing automates and simplifies the task of extracting documents. Wilmington, United States.
118. xSuite (<https://www.xsuite.com/en/>): Among the leading software manufacturers of intelligent applications. Ahrensburg, Germany
119. https://www.semantha.de/
120. Daitaku (https://www.dataiku.com/)
121. Convr (https://convr.com/)
122. Intellect AI (https://www.intellectai.com/)
123. Paradatec (https://www.paradatec.de/)
125. Convr (https://convr.com/)
126. Intellect AI (https://www.intellectai.com/)
130. Cytora (https://www.cytora.com/)
131. iCertis (https://www.icertis.com/)
134. Moresophy (https://www.moresophy.com/en)
135. Mea Platform (https://www.meaplatform.com/)
136. https://www.extend.ai/