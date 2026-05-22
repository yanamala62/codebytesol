import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { FadeIn, StaggerChildren } from '../../../components/animations/FadeIn';
import { Download, CheckCircle2, Mail, ChevronDown, ChevronUp, Clock, BookOpen } from 'lucide-react';
import { Button } from '../../../components/primitives/Button';

const whitePapers = [
  {
    id: 1,
    title: 'The Enterprise AI Adoption Framework',
    subtitle: 'A Strategic Guide to Implementing AI at Scale',
    category: 'AI Strategy',
    pages: 42,
    publishDate: 'March 2024',
    description: 'This comprehensive framework provides enterprise leaders with a structured approach to AI adoption, covering strategy development, technology selection, organizational readiness, and change management.',
    keyTopics: [
      'AI Maturity Assessment Model',
      'Building the AI-Ready Organization',
      'Technology Stack Selection Criteria',
      'ROI Measurement Framework',
      'Risk Management & Governance',
      'Change Management Best Practices'
    ],
    image: '/source_images/services/service_ai.png',
    downloadSize: '3.2 MB'
  },
  {
    id: 2,
    title: 'Cloud Migration Playbook for Financial Services',
    subtitle: 'Navigating Regulatory Compliance in Cloud Transformation',
    category: 'Cloud Computing',
    pages: 38,
    publishDate: 'February 2024',
    description: 'A detailed playbook specifically designed for financial institutions, addressing unique regulatory requirements, security considerations, and compliance frameworks for cloud migration.',
    keyTopics: [
      'Regulatory Compliance Mapping',
      'Security Architecture Patterns',
      'Data Residency & Sovereignty',
      'Risk Assessment Methodology',
      'Vendor Selection Criteria',
      'Migration Execution Framework'
    ],
    image: '/source_images/services/service_cloud.png',
    downloadSize: '4.1 MB'
  },
  {
    id: 3,
    title: 'Data Mesh Architecture: Implementation Guide',
    subtitle: 'Building Decentralized Data Platforms at Scale',
    category: 'Data Architecture',
    pages: 56,
    publishDate: 'February 2024',
    description: 'An in-depth technical guide to implementing data mesh architecture, including domain-driven design principles, self-serve data infrastructure, and federated governance models.',
    keyTopics: [
      'Domain-Oriented Data Ownership',
      'Self-Serve Data Infrastructure',
      'Federated Computational Governance',
      'Data Product Thinking',
      'Platform Architecture Patterns',
      'Migration from Monolithic Data Lakes'
    ],
    image: '/source_images/services/service_data.png',
    downloadSize: '5.8 MB'
  },
  {
    id: 4,
    title: 'MLOps Maturity Model',
    subtitle: 'From Experimentation to Production ML at Scale',
    category: 'Machine Learning',
    pages: 45,
    publishDate: 'January 2024',
    description: 'A comprehensive maturity model for MLOps practices, helping organizations assess their current state and plan their journey to production-grade machine learning operations.',
    keyTopics: [
      'MLOps Maturity Assessment',
      'CI/CD for Machine Learning',
      'Model Monitoring & Observability',
      'Feature Store Architecture',
      'Model Governance & Compliance',
      'Automated Retraining Pipelines'
    ],
    image: '/source_images/services/service_ai.png',
    downloadSize: '4.5 MB'
  },
  {
    id: 5,
    title: 'Zero Trust Security Architecture',
    subtitle: 'Implementing Modern Security in Hybrid Environments',
    category: 'Cybersecurity',
    pages: 51,
    publishDate: 'January 2024',
    description: 'A practical guide to designing and implementing zero trust security architecture across hybrid cloud and on-premises environments, with real-world implementation patterns.',
    keyTopics: [
      'Zero Trust Principles & Framework',
      'Identity & Access Management',
      'Micro-Segmentation Strategies',
      'Continuous Verification',
      'Security Monitoring & Analytics',
      'Implementation Roadmap'
    ],
    image: '/source_images/services/service_cloud.png',
    downloadSize: '3.9 MB'
  },
  {
    id: 6,
    title: 'Digital Transformation ROI Measurement',
    subtitle: 'Quantifying Business Value from Technology Investments',
    category: 'Business Strategy',
    pages: 34,
    publishDate: 'December 2023',
    description: 'A practical framework for measuring and communicating the return on investment from digital transformation initiatives, with industry benchmarks and case studies.',
    keyTopics: [
      'ROI Measurement Framework',
      'KPI Selection & Tracking',
      'Business Case Development',
      'Value Realization Methodology',
      'Industry Benchmarks',
      'Executive Reporting Templates'
    ],
    image: '/source_images/home_hero.png',
    downloadSize: '2.8 MB'
  }
];

export default function WhitePapersPage() {
  const [selectedPaper, setSelectedPaper] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-gray-900 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/source_images/resources/res_whitepaper.png" 
            alt="Whitepapers Background" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/60" />
        </div>

        <div className="container-xl mx-auto relative z-10">
          <FadeIn direction="up">
            <h1 className="text-6xl md:text-[120px] font-black text-white mb-10 leading-[0.85] tracking-tighter uppercase italic">
              Technical <br />
              <span className="text-primary-500">Research.</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 max-w-3xl leading-relaxed font-medium drop-shadow-md">
              In-depth analysis, strategic frameworks, and comprehensive guides on AI, cloud computing, and digital transformation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* White Papers Grid */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container-xl mx-auto px-6">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitePapers.map((paper) => (
              <FadeIn key={paper.id} direction="up">
                <div
                  className="bg-white rounded-3xl overflow-hidden border border-border hover:border-primary-500 hover:shadow-soft transition-all duration-500 group flex flex-col h-full"
                >
                  <div className="relative w-full h-64 overflow-hidden">
                    <img
                      src={paper.image}
                      alt={paper.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-600 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-border shadow-sm">
                        {paper.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-4 mb-4 text-[10px] font-bold text-text-faint uppercase tracking-widest">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-primary-500" />
                        {paper.pages} Pages
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary-500" />
                        {paper.publishDate}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-text-primary mb-2 tracking-tight group-hover:text-primary-500 transition-colors">
                      {paper.title}
                    </h3>
                    <p className="text-xs text-primary-600 font-bold mb-4 uppercase tracking-wider">
                      {paper.subtitle}
                    </p>
                    <p className="text-sm text-text-muted mb-8 line-clamp-3 font-medium leading-relaxed">
                      {paper.description}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                      <span className="text-[10px] font-bold text-text-faint uppercase tracking-widest">{paper.downloadSize} PDF</span>
                      <button
                        onClick={() => setSelectedPaper(selectedPaper === paper.id ? null : paper.id)}
                        className="text-primary-600 font-bold text-xs hover:text-primary-700 flex items-center gap-1 transition-colors"
                      >
                        {selectedPaper === paper.id ? 'Hide Details' : 'View Details'}
                        {selectedPaper === paper.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Expanded Details */}
                    {selectedPaper === paper.id && (
                      <div className="mt-6 pt-6 border-t border-border animate-in fade-in slide-in-from-top-4 duration-300">
                        <h4 className="text-sm font-bold text-text-primary mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary-500" />
                          Key Topics Covered:
                        </h4>
                        <ul className="space-y-2 mb-8">
                          {paper.keyTopics.map((topic, index) => (
                            <li key={index} className="flex items-start gap-3 text-sm text-text-muted font-medium">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full h-12 rounded-xl text-sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download Resource
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 border-t border-border">
        <div className="container-xl mx-auto px-6">
          <FadeIn direction="up">
            <div className="bg-white rounded-[3rem] p-12 md:p-20 text-center border border-border shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-50/50 blur-[120px] rounded-full translate-x-1/2" />
              
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight relative z-10">
                Need Custom Research?
              </h2>
              <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto font-medium relative z-10">
                Our research team can develop custom technical reports and industry frameworks tailored to your specific enterprise challenges.
              </p>
              <Button
                size="lg"
                className="h-16 px-12 rounded-2xl relative z-10"
                onClick={() => window.location.href = "mailto:codebytesolution.info@gmail.com"}
              >
                <Mail className="w-6 h-6 mr-3" />
                Request Custom Strategy
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
