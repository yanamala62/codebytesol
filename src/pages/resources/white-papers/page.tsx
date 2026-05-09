import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { FadeIn, StaggerChildren } from '../../../components/animations/FadeIn';
import wpHero from '../../../assets/bg/download (2).jpg';
import { FileText, Download, CheckCircle2, Mail, ChevronDown, ChevronUp, Clock, BookOpen } from 'lucide-react';

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
    image: '/images/wp-ai-framework-001--a5720c5d4d05.jpg',
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
    image: '/images/wp-cloud-finance-002--20de9b0ff2a7.jpg',
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
    image: '/images/wp-data-mesh-003--772b62d13474.jpg',
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
    image: '/images/wp-mlops-maturity-004--1585aecbce4c.jpg',
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
    image: '/images/wp-zero-trust-005--8135e6b2727e.jpg',
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
    image: '/images/wp-digital-roi-006--b8c1620553db.jpg',
    downloadSize: '2.8 MB'
  }
];

export default function WhitePapersPage() {
  const [selectedPaper, setSelectedPaper] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={wpHero}
            alt="White Papers Hero"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/40 via-bg-primary/80 to-bg-primary"></div>
        </div>

        <div className="container-xl mx-auto relative z-10 text-center">
          <FadeIn direction="up">
            <h1 className="text-display-xl md:text-display-2xl font-display font-bold text-white mb-8 tracking-tighter leading-none">
              Technical <span className="gradient-text">Research.</span>
            </h1>
            <p className="text-2xl text-text-muted max-w-3xl mx-auto font-medium leading-relaxed">
              In-depth analysis, strategic frameworks, and comprehensive guides on AI, cloud computing, and digital transformation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* White Papers Grid */}
      <section className="py-24 bg-bg-primary">
        <div className="container-xl mx-auto px-6">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitePapers.map((paper) => (
              <FadeIn key={paper.id} direction="up">
                <div
                  className="glass rounded-3xl overflow-hidden border-white/5 hover:border-primary-500/30 transition-all duration-500 group flex flex-col h-full"
                >
                  <div className="relative w-full h-64 overflow-hidden">
                    <img
                      src={paper.image}
                      alt={paper.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 bg-bg-primary/80 backdrop-blur-md text-primary-400 rounded-lg text-xs font-bold uppercase tracking-widest border border-white/10">
                        {paper.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-4 mb-4 text-xs font-mono text-text-faint uppercase tracking-widest">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-primary-500" />
                        {paper.pages} Pages
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary-500" />
                        {paper.publishDate}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold text-white mb-2 tracking-tight group-hover:text-primary-400 transition-colors">
                      {paper.title}
                    </h3>
                    <p className="text-sm text-primary-500/80 font-bold mb-4 uppercase tracking-wider">
                      {paper.subtitle}
                    </p>
                    <p className="text-text-muted mb-8 line-clamp-3 font-medium leading-relaxed">
                      {paper.description}
                    </p>
                    
                    <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs font-mono text-text-faint uppercase tracking-widest">{paper.downloadSize} PDF</span>
                      <button
                        onClick={() => setSelectedPaper(selectedPaper === paper.id ? null : paper.id)}
                        className="text-white font-bold text-sm hover:text-primary-400 flex items-center gap-2 transition-colors"
                      >
                        {selectedPaper === paper.id ? 'Hide Details' : 'View Details'}
                        {selectedPaper === paper.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Expanded Details */}
                    {selectedPaper === paper.id && (
                      <div className="mt-8 pt-8 border-t border-white/5 animate-in fade-in slide-in-from-top-4 duration-300">
                        <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary-500" />
                          Key Topics Covered:
                        </h4>
                        <ul className="space-y-3 mb-8">
                          {paper.keyTopics.map((topic, index) => (
                            <li key={index} className="flex items-start gap-3 text-sm text-text-muted font-medium">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                        <button className="w-full h-14 bg-gradient-aurora text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-glow-sm">
                          <Download className="w-5 h-5" />
                          Download Resource
                        </button>
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
      <section className="py-24 bg-bg-primary border-t border-white/5">
        <div className="container-xl mx-auto px-6">
          <FadeIn direction="up">
            <div className="bg-gradient-to-br from-bg-primary to-accent-900/10 rounded-[3rem] p-12 md:p-20 text-center border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/5 blur-[100px] -z-10" />
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
                Need Custom Research?
              </h2>
              <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto font-medium">
                Our research team can develop custom technical reports and industry frameworks tailored to your specific enterprise challenges.
              </p>
              <a
                href="mailto:Assist@codebytesol.ai"
                className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-aurora text-white rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-glow-md"
              >
                <Mail className="w-6 h-6" />
                Request Custom Strategy
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
