import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { FadeIn } from '../../../components/animations/FadeIn';
import successHero from '../../../assets/bg/download (1).jpg';
import { CheckCircle2, Cpu, BarChart3, Mail, Layout, Zap } from 'lucide-react';

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
      'Improved compliance accuracy by 25%',
      'Higher throughput for review teams'
    ],
    techStack: ['Python', 'Azure ML', 'OpenAI', 'Power BI', 'Microservices'],
    image: '/images/gov-design-validation-001--c775a8e1da66.jpg'
  },
  {
    id: 2,
    industry: 'Wellness & Fitness Services',
    title: 'Agentic AI for Customer Onboarding + Assistant Chatbot',
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
      'Higher retention & satisfaction'
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
      'Limited support for technicians'
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
      '40% reduction in inspection effort',
      'Operational efficiency up by 25%',
      'Enhanced technician productivity'
    ],
    techStack: ['Python', 'Azure IoT', 'GPT-based AI', 'Grafana', 'Postgres'],
    image: '/images/utilities-anomaly-008--e275a219bdee.jpg'
  },
  {
    id: 4,
    industry: 'Manufacturing',
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
      '20% improvement in efficiency',
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
      '35% faster access to knowledge',
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
      'Frequent production issues',
      'Large number of test scenarios',
      'No centralized test validation'
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
  }
];

export default function SuccessStoriesPage() {
  const [selectedStory, setSelectedStory] = useState(successStories[0]);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={successHero}
            alt="Success Stories"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/40 via-bg-primary/80 to-bg-primary"></div>
        </div>

        <div className="container-xl mx-auto relative z-10 text-center">
          <FadeIn direction="up">
            <h1 className="text-display-xl md:text-display-2xl font-display font-bold text-white mb-8 tracking-tighter leading-none">
              Client <span className="gradient-text">Success.</span>
            </h1>
            <p className="text-2xl text-text-muted max-w-3xl mx-auto font-medium leading-relaxed">
              Real-world transformations powered by AI and data analytics. Explore how we help organizations achieve measurable breakthroughs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story Selector */}
      <section className="py-12 bg-bg-primary border-y border-white/5 sticky top-[72px] z-20 backdrop-blur-xl bg-bg-primary/80 overflow-x-auto">
        <div className="container-xl mx-auto px-6">
          <div className="flex flex-nowrap md:flex-wrap gap-3 justify-start md:justify-center min-w-max md:min-w-0">
            {successStories.map((story) => (
              <button
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap border ${
                  selectedStory.id === story.id
                    ? 'bg-primary-500 border-primary-500 text-white shadow-glow-sm'
                    : 'bg-white/5 border-white/10 text-text-muted hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {story.industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Story Detail */}
      <section className="py-24 bg-bg-primary">
        <div className="container-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <FadeIn direction="right">
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-1.5 bg-primary-500/10 text-primary-400 rounded-lg text-xs font-bold uppercase tracking-widest border border-primary-500/20">
                      {selectedStory.industry}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
                    {selectedStory.title}
                  </h2>
                  <p className="text-xl text-text-muted font-medium italic border-l-2 border-primary-500 pl-6 py-2">
                    {selectedStory.designation}
                  </p>
                </div>

                <div className="glass rounded-[2.5rem] overflow-hidden border-white/5 mb-12">
                   <img
                    src={selectedStory.image}
                    alt={selectedStory.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>

                <div className="space-y-16">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-4">
                      <Layout className="w-6 h-6 text-primary-500" />
                      The Scenario
                    </h3>
                    <p className="text-lg text-text-muted leading-relaxed font-medium">
                      {selectedStory.scenario}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-4">
                      <Zap className="w-6 h-6 text-primary-500" />
                      The Challenges
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {selectedStory.challenges.map((challenge, index) => (
                        <div key={index} className="glass p-6 rounded-2xl border-white/5 flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-primary-500 text-xs font-bold">{index + 1}</span>
                          </div>
                          <p className="text-text-muted font-medium">{challenge}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-4">
                      <Cpu className="w-6 h-6 text-primary-500" />
                      The Engineering Solution
                    </h3>
                    <div className="glass p-10 rounded-[2.5rem] border-white/5 bg-gradient-to-br from-bg-primary to-primary-900/10">
                      <p className="text-lg text-text-muted leading-relaxed mb-10 font-medium">
                        {selectedStory.solution}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {selectedStory.features.map((feature, index) => (
                          <div
                            key={index}
                            className="px-5 py-3 glass rounded-xl border-white/10 text-white font-bold text-sm flex items-center gap-3"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary-500" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Content - Metrics & Stack */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-8">
                <FadeIn direction="left">
                  <div className="glass rounded-[2.5rem] p-10 border-white/5 bg-gradient-to-br from-bg-primary to-accent-900/10">
                    <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-4">
                      <BarChart3 className="w-6 h-6 text-accent-500" />
                      Impact Metrics
                    </h3>
                    <div className="grid gap-6">
                      {selectedStory.impact.map((metric, index) => (
                        <div key={index} className="glass p-6 rounded-2xl border-white/5 relative overflow-hidden group">
                           <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/5 blur-2xl group-hover:bg-primary-500/20 transition-all" />
                           <div className="flex items-center gap-4">
                              <CheckCircle2 className="w-6 h-6 text-primary-500" />
                              <p className="text-xl font-bold text-white tracking-tight">{metric}</p>
                           </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>

                <FadeIn direction="left" delay={0.2}>
                  <div className="glass rounded-[2.5rem] p-10 border-white/5">
                    <h3 className="text-2xl font-display font-bold text-white mb-8">Tech Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedStory.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-5 py-3 glass border-white/5 rounded-xl text-text-muted font-bold text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>

                {/* Case Study CTA */}
                <FadeIn direction="left" delay={0.4}>
                  <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-[2.5rem] p-10 text-white text-center shadow-glow-md">
                    <h3 className="text-3xl font-display font-bold mb-4">Want the Full Story?</h3>
                    <p className="text-white/80 mb-8 font-medium">
                      Request the complete technical architecture and ROI analysis for this transformation.
                    </p>
                    <a
                      href="mailto:Assist@codebytesol.ai"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 rounded-xl font-bold hover:scale-[1.05] transition-transform shadow-lg"
                    >
                      <Mail className="w-5 h-5" />
                      Request Full PDF
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
