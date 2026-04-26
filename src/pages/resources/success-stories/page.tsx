import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

const successStories = [
  {
    id: 1,
    industry: 'Government Administration',
    title: 'AI Recommendation Engine for Design Validation (POC)',
    designation: 'Lead Solution Architect – AI & Data Analytics',
    scenario: 'A government Construction body needed a fast and reliable way to validate design submissions, reduce manual review time, and improve compliance accuracy.',
    challenges: [
      'Manual validation causing delays',
      'Inconsistent design quality checks',
      'Limited visibility into design deviations',
      'Increasing backlog of submissions'
    ],
    solution: 'We deployed a Multimodal Design Validation Framework capable of ingesting 2D drawings, Level-3 BIM models, and blueprint documents. Inputs were standardized through an automated data-cleansing pipeline and aligned to government SOPs. A dual-layer engine—ML models trained on historical compliant designs + a rule-based validator mapped to SOP constraints—performed structural, dimensional, and compliance checks. A deviation-detection module highlighted non-matching elements, while an explainable API layer delivered traceable, audit-ready recommendations.',
    features: [
      'AI Recommendation Engine',
      'Automated Compliance Checks',
      'Multi-Layer Review Logic',
      'Explainable AI Outputs'
    ],
    impact: [
      '60% faster validation cycles',
      '30% reduction in design errors',
      'Improved compliance scoring accuracy by 25%',
      'Higher throughput for design review teams'
    ],
    techStack: ['Python', 'Azure ML', 'OpenAI', 'Power BI', 'Microservices'],
    image: '/images/gov-design-validation-001--c775a8e1da66.jpg'
  },
  {
    id: 2,
    industry: 'Wellness & Fitness Services',
    title: 'Agentic AI for Customer Onboarding + Equipment Assistant Chatbot',
    designation: 'Director of Data Analytics',
    scenario: 'A fitness and wellness chain wanted a unified AI-driven onboarding experience and a support chatbot for equipment usage and troubleshooting.',
    challenges: [
      'Manual onboarding journeys',
      'No proactive communication',
      'High customer support load',
      'Lack of digital self-help options'
    ],
    solution: 'We deployed an Agentic Onboarding Framework built on interconnected decision-making agents orchestrated through an event-driven pipeline. Customer data from mobile/web touchpoints was normalized and fed into a dynamic profiling engine to auto-generate personalized onboarding flows. A multimodal Equipment Assistant—powered by NLP, vision models, and SOP-trained troubleshooting rules—delivered step-by-step guidance and real-time diagnostics. A proactive notification microservice triggered behaviour-based reminders and alerts, integrating seamlessly with the client\'s CRM and membership systems.',
    features: [
      'Agentic AI Workflow Automation',
      'Proactive Notification Engine',
      'AI Equipment Chatbot',
      'Dynamic Customer Profiling'
    ],
    impact: [
      '50% reduced onboarding time',
      '40% drop in support tickets',
      '3× increase in customer engagement',
      'Higher retention & satisfaction rates'
    ],
    techStack: ['OpenAI GPT', 'Azure Functions', 'Python', 'Twilio', 'MongoDB'],
    image: '/images/wellness-agentic-ai-007--cc92d1ad359f.jpg'
  },
  {
    id: 3,
    industry: 'Utilities & Professional Services',
    title: 'Anomaly Detection + AI Conversational Interface',
    designation: 'COO & Co-Founder',
    scenario: 'A utilities consulting firm needed a smarter pipeline anomaly detection solution and an AI-powered conversational interface.',
    challenges: [
      'Hidden pipeline anomalies',
      'Manual field investigation',
      'No unified dashboard',
      'Limited conversational support for technicians'
    ],
    solution: 'We deployed a Real-Time Pipeline Intelligence Framework integrating SCADA, IoT sensor streams, and historical incident logs through a high-frequency ingestion and cleansing pipeline. A hybrid anomaly engine—combining statistical thresholds, ML-based pattern detection, and rules mapped to engineering SOPs—identified leaks, pressure drifts, and flow irregularities. A multimodal Conversational Interface, powered by domain-tuned LLMs, enabled technicians to query pipeline states, SOPs, and diagnostics instantly. A unified monitoring dashboard and alerting microservice delivered risk prioritization and operational insights in real time.',
    features: [
      'AI Anomaly Detection',
      'Conversational AI Assistant',
      'Real-Time Pipeline Monitoring',
      'Unified Analytics Dashboard'
    ],
    impact: [
      '70% faster anomaly identification',
      '40% reduction in field inspection efforts',
      'Operational efficiency up by 25%',
      'Enhanced technician productivity'
    ],
    techStack: ['Python', 'Azure IoT', 'GPT-based AI', 'Grafana', 'Postgres'],
    image: '/images/utilities-anomaly-008--e275a219bdee.jpg'
  },
  {
    id: 4,
    industry: 'Construction Machinery Manufacturing',
    title: 'AI for Sales Drop-Off Prediction & Targeting',
    designation: 'Head of IT',
    scenario: 'A heavy machinery manufacturer wanted AI insights into sales drop-offs and competitive targeting based on external market signals.',
    challenges: [
      'Manual sales pipeline tracking',
      'Lack of drop-off visibility',
      'No external competitive intelligence',
      'Difficulty prioritizing accounts'
    ],
    solution: 'We deployed a Sales Intelligence Framework that unified CRM, dealer logs, product lifecycle data, and external market feeds through an automated ETL and enrichment pipeline. A drop-off prediction engine—combining gradient-boosted models with behavioral scoring—flagged at-risk opportunities early. A competitive-intelligence microservice scraped market pricing, stock availability, and regional demand indicators. These features powered a targeting model that ranked high-value accounts, while an insights API delivered real-time recommendations directly into sales workflows.',
    features: [
      'AI Drop-Off Prediction Model',
      'Sales Pattern Analysis',
      'External Data Scraper',
      'Targeting Model'
    ],
    impact: [
      '33% increase in sales conversions',
      '25% better pipeline prioritization',
      '20% improvement in sales efficiency',
      'Faster market decision-making'
    ],
    techStack: ['Python', 'Scrapy', 'Azure ML', 'Power BI', 'GPT Models'],
    image: '/images/construction-sales-009--6ea3dff3b9b6.jpg'
  },
  {
    id: 5,
    industry: 'Manufacturing',
    title: 'Predictive Analytics & GPT-Enabled Automation',
    designation: 'Senior IT Product Manager',
    scenario: 'A manufacturing firm wanted AI to optimize production, quality control, and knowledge assistance using GPT.',
    challenges: [
      'Limited visibility into production trends',
      'Manual reporting',
      'Need for intelligent knowledge retrieval',
      'Desire for automated operational insights'
    ],
    solution: 'We built a comprehensive AI-powered manufacturing intelligence platform that combines predictive analytics with GPT-enabled automation. The system ingests production data, quality metrics, and operational logs through real-time data pipelines. Advanced ML models forecast production bottlenecks, quality issues, and maintenance needs. A GPT-4 powered knowledge assistant provides instant access to SOPs, troubleshooting guides, and historical insights. Self-service dashboards deliver actionable insights to operators and managers, while automated alert systems proactively notify teams of anomalies and optimization opportunities.',
    features: [
      'Predictive Analytics Pipeline',
      'GPT Knowledge Assistant',
      'Self-Service Dashboards',
      'Automated Alerts & Summaries'
    ],
    impact: [
      '30% improvement in production planning',
      '35% faster access to operational knowledge',
      'Reduced downtime by 20%',
      'Increased workforce efficiency'
    ],
    techStack: ['GPT-4', 'Azure ML', 'Databricks', 'Power BI', 'Python'],
    image: '/images/manufacturing-gpt-010--f2f724a69288.jpg'
  },
  {
    id: 6,
    industry: 'Insurance',
    title: 'Agent Portal Test Automation Framework',
    designation: 'Head of IT',
    scenario: 'A major insurance provider needed to automate regression cycles for its agent portal to improve release quality and reduce manual testing overhead.',
    challenges: [
      'Slow manual regression cycles',
      'Frequent production issues post-release',
      'Large number of test scenarios to validate',
      'No centralized test validation framework'
    ],
    solution: 'We deployed a comprehensive Test Automation Framework integrating Selenium for UI automation and API testing tools for backend validation. The framework was built on the Veloquity testing architecture, enabling modular, reusable test components. Automated regression packs were integrated into CI/CD pipelines via Jenkins, triggering daily automated test runs. A centralized test management dashboard provided real-time visibility into test execution, coverage metrics, and defect tracking. Data-driven testing approaches enabled rapid scenario expansion while maintaining test stability.',
    features: [
      'Test Automation Framework Setup',
      'Selenium + API Automation',
      'CI/CD Integration',
      'Daily Automated Regression Packs'
    ],
    impact: [
      '70% faster test cycles',
      '40% fewer production defects',
      '3× test coverage expansion',
      'Streamlined release readiness'
    ],
    techStack: ['Selenium', 'Postman', 'Jenkins', 'Veloquity Framework', 'TestNG'],
    image: '/images/insurance-test-automation-011--a8079d8f5a1b.jpg'
  },
  {
    id: 7,
    industry: 'Telecommunications',
    title: 'AI Use Case for Unstructured & Geospatial Datasets',
    designation: 'Vice Manager – Network Performance, AI & Automation Group',
    scenario: 'A telecom provider needed AI models to interpret customer behavior and network traces using geospatial data.',
    challenges: [
      'Massive unstructured datasets',
      'Complex geospatial patterns',
      'Slow manual analytics',
      'Need for intelligent clustering'
    ],
    solution: 'We implemented a Geospatial Intelligence Framework that unified network traces, customer behavior logs, RF metrics, and GIS layers through a scalable ingestion and vectorization pipeline. Unstructured datasets were embedded using domain-tuned models and stored in a vector database for high-speed similarity search. Geospatial ML models detected mobility patterns, coverage gaps, and performance hotspots across cell sectors. A geospatial visualization engine produced city-scale heatmaps, while an automated insights layer generated proactive network optimization alerts.',
    features: [
      'Geospatial AI Models',
      'Vector Database + Embeddings',
      'AI Impact Visualizations',
      'Automated Insights Engine'
    ],
    impact: [
      '50% faster network insights',
      '25% improvement in coverage optimization',
      'Reduction in manual analytics by 60%',
      'Better customer experience insights'
    ],
    techStack: ['Python', 'QGIS', 'Azure Maps', 'Vector DB', 'GPT Models'],
    image: '/images/telecom-geospatial-012--dca374ab8f95.jpg'
  },
  {
    id: 8,
    industry: 'Logistics',
    title: 'Freight Booking Portal Test Automation POC',
    designation: 'Senior Engineering Manager – QA',
    scenario: 'A logistics platform needed automated validation for freight booking workflows to handle high booking volumes and complex rate calculations.',
    challenges: [
      'High booking volume',
      'Complex rate calculations',
      'Multiple carrier integrations',
      'Manual testing delays'
    ],
    solution: 'We implemented a Test Automation POC using our Veloquity Framework, enabling modular, tool-agnostic automation for complex freight booking flows. Core booking scenarios, rate-calculation rules, and carrier integrations were validated using API + UI hybrid test layers. Data-driven test matrices ensured coverage of dynamic rate combinations, while a CI-integrated pipeline triggered automated regression on every build. The framework\'s plug-and-play architecture delivered scalable, high-volume validation aligned with peak-load logistics requirements.',
    features: [
      'Automation POC with Veloquity',
      'End-to-End Booking Validation',
      'API + UI Test Coverage',
      'CI Pipeline Integration'
    ],
    impact: [
      '55% reduction in regression effort',
      'Improved booking accuracy by 20%',
      'Accelerated release cycles',
      'Higher reliability during peak loads'
    ],
    techStack: ['Selenium', 'Postman', 'Jenkins', 'Veloquity Framework'],
    image: '/images/logistics-freight-automation-013--dd66ee2720c9.jpg'
  },
  {
    id: 9,
    industry: 'Hospitality',
    title: 'AI Vendor Invoice Automation (POC)',
    designation: 'IT Head',
    scenario: 'A hospitality group handled thousands of vendor invoices manually and wanted AI-driven processing to streamline operations and reduce errors.',
    challenges: [
      'Manual invoice extraction',
      'High error rates',
      'Slow processing time',
      'No automated validation'
    ],
    solution: 'We deployed an Invoice Intelligence Framework combining OCR, document parsing, and GPT-based classification to process multi-format vendor invoices. A structured extraction pipeline normalized line items, taxes, totals, and vendor metadata, while a rule-augmented validation engine cross-checked entries against PO, GRN, and contract data. Anomaly detection flagged mismatches and duplicates, and an automated approval micro-workflow routed invoices to finance teams with full traceability. The system delivered continuous learning through feedback loops to improve extraction accuracy over time.',
    features: [
      'AI Invoice OCR + GPT Classification',
      'Automated Field Extraction',
      'Validation Against PO Data',
      'Approval Workflow Automation'
    ],
    impact: [
      '65% faster invoice processing',
      '90% field extraction accuracy',
      '30% lower operational cost',
      'Zero backlog processing'
    ],
    techStack: ['Azure OCR', 'GPT-4', 'Power Automate', 'Python'],
    image: '/images/hospitality-invoice-automation-014--872b5592e118.jpg'
  },
  {
    id: 10,
    industry: 'Food & Beverage',
    title: 'AI-Assisted Figma Screen Development (Design Engineering)',
    designation: 'Engineering Manager',
    scenario: 'An F&B chain needed modern UI screens and wanted rapid Figma-based design creation to accelerate their digital transformation.',
    challenges: [
      'No existing design system',
      'Slow design cycles',
      'Need for modern UI/UX',
      'Multiple stakeholder iterations'
    ],
    solution: 'We implemented an AI-Assisted Design Engineering Framework that used generative wireframing agents to rapidly translate requirements into structured layouts. A modular UI component library—built from scratch due to the absence of a design system—ensured brand consistency and reusable patterns. High-fidelity Figma screens were produced using AI-accelerated variant creation, auto-layout rules, and accessibility guidelines. A design-to-development handoff pipeline generated specifications, tokens, and component mappings, enabling seamless adoption by frontend engineering teams.',
    features: [
      'AI-Assisted Wireframing',
      'Modern UI Component Library',
      'High-Fidelity Figma Screens',
      'Design-to-Development Handoff'
    ],
    impact: [
      '40% faster design delivery',
      'Consistent UI across modules',
      '30% reduced iteration cycles',
      'Improved overall digital experience'
    ],
    techStack: ['Figma', 'FigJam', 'AI UX Plugins', 'CSS Frameworks'],
    image: '/images/food-beverage-figma-design-015--48787a040b2c.jpg'
  },
  {
    id: 11,
    industry: 'Manufacturing',
    title: 'Development & Testing of Vibe-Coded Websites',
    designation: 'Chief Development Officer (CDO)',
    scenario: 'A manufacturing brand had a partially built Vibe-coded website and needed end-to-end development + QA support.',
    challenges: [
      'Incomplete page structures',
      'UI/UX inconsistencies',
      'Performance issues',
      'Lack of test coverage'
    ],
    solution: 'We deployed a Full-Stack Delivery Framework to stabilize, extend, and productionize the partially built Vibe-coded website. The codebase was refactored for component consistency, optimized rendering, and modular scalability. UI/UX gaps were resolved through design-system alignment and accessibility audits. A dual-layer QA pipeline—covering functional, regression, and performance testing—ensured defect-free releases. CI/CD-driven builds enabled automated validations, while SEO, Core Web Vitals tuning, and CDN optimization delivered high-speed, search-ready performance.',
    features: [
      'Code Stabilization & Completion',
      'UI/UX Alignment with Brand Guidelines',
      'Functional + Performance Testing',
      'SEO & Speed Optimization'
    ],
    impact: [
      '100% completion of pending modules',
      '2× faster load time',
      'Improved user experience scores',
      'Zero unresolved defects at launch'
    ],
    techStack: ['JavaScript', 'Vibe Coding Framework', 'Selenium', 'Figma'],
    image: '/images/manufacturing-vibe-website-016--1daf75d8df48.jpg'
  },
  {
    id: 12,
    industry: 'Travel & Logistics',
    title: 'AI & Intelligent Operations & Fleet Management',
    designation: 'VP of Operations',
    scenario: 'A logistics company needed to optimize delivery routes and improve fleet utilization across multiple regions.',
    challenges: [
      'Inefficient route planning',
      'High fuel costs',
      'Poor fleet utilization',
      'Delayed deliveries'
    ],
    solution: 'We implemented an AI-Powered Fleet Intelligence Platform that combines real-time traffic data, weather conditions, and delivery constraints to optimize routes dynamically. Machine learning models predict delivery times with high accuracy, while a fleet allocation engine maximizes vehicle utilization. The system integrates with GPS tracking, fuel monitoring, and driver management systems. An automated dispatch system assigns optimal routes to drivers, while a customer notification service provides real-time delivery updates.',
    features: [
      'Dynamic Route Optimization',
      'Predictive Delivery Time Estimation',
      'Fleet Utilization Analytics',
      'Automated Dispatch System'
    ],
    impact: [
      '35% reduction in fuel costs',
      '45% improvement in on-time deliveries',
      '28% increase in fleet utilization',
      '50% faster route planning'
    ],
    techStack: ['Python', 'Google Maps API', 'TensorFlow', 'AWS Lambda', 'PostgreSQL'],
    image: '/images/travel-logistics-fleet-017--32bc915934c1.jpg'
  }
];

export default function SuccessStoriesPage() {
  const [selectedStory, setSelectedStory] = useState(successStories[0]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/success-stories-hero-celebration-v1-456--1b125e900749.jpg"
            alt="Success Stories Hero"
            className="w-full h-full object-cover object-top"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Real-world transformations powered by AI and data analytics. Explore how we've helped organizations across industries achieve measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Story Selector */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {successStories.map((story) => (
              <button
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className={`p-4 rounded-lg text-sm font-medium transition-all break-words ${selectedStory.id === story.id
                    ? 'bg-teal-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {story.industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Story Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Story Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                {selectedStory.industry}
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 break-words">
              {selectedStory.title}
            </h2>
            <p className="text-lg text-gray-600 italic break-words">
              {selectedStory.designation}
            </p>
          </div>

          {/* Story Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <div className="w-full h-96">
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Client Scenario */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Scenario</h3>
            <p className="text-lg text-gray-700 leading-relaxed break-words">
              {selectedStory.scenario}
            </p>
          </div>

          {/* Challenges */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Challenges</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {selectedStory.challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-900 break-words">{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution & Approach</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 break-words">
              {selectedStory.solution}
            </p>
            <div className="flex flex-wrap gap-3">
              {selectedStory.features.map((feature, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-teal-500 text-white rounded-full text-sm font-medium break-words"
                >
                  🔹 {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Impact Metrics</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {selectedStory.impact.map((metric, index) => (
                <div key={index} className="p-6 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl text-white">
                  <i className="ri-check-double-line text-3xl mb-3"></i>
                  <p className="text-lg font-semibold break-words">{metric}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {selectedStory.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-5 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium break-words"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Want the Full Story?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto break-words">
              Dive deeper into the complete case study with detailed technical architecture, implementation timeline, and ROI analysis.
            </p>
            <a
              href="mailto:info@forgebyte.ai"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-mail-line text-xl"></i>
              Request Full Case Study
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
