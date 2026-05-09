import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

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
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/whitepapers-hero-research-v1-789--fda9debe575a.jpg"
            alt="White Papers Hero"
            className="w-full h-full object-cover object-top"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Research & <span className="bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] bg-clip-text text-transparent">White Papers</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            In-depth research, technical insights, and comprehensive guides on AI, cloud computing, and digital transformation
          </p>
        </div>
      </section>

      {/* White Papers Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitePapers.map((paper) => (
              <div
                key={paper.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-full h-64 overflow-hidden bg-gray-100">
                  <img
                    src={paper.image}
                    alt={paper.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                      {paper.category}
                    </span>
                    <span className="text-xs text-gray-500">{paper.pages} pages</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {paper.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 italic">
                    {paper.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {paper.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">{paper.publishDate}</span>
                    <button
                      onClick={() => setSelectedPaper(selectedPaper === paper.id ? null : paper.id)}
                      className="text-teal-600 font-semibold text-sm hover:text-teal-700 flex items-center gap-1 whitespace-nowrap cursor-pointer"
                    >
                      {selectedPaper === paper.id ? 'Hide Details' : 'View Details'}
                      <i className={`ri-arrow-${selectedPaper === paper.id ? 'up' : 'down'}-line`}></i>
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedPaper === paper.id && (
                  <div className="px-6 pb-6 border-t border-gray-100 pt-6">
                    <h4 className="font-bold text-gray-900 mb-3">Key Topics Covered:</h4>
                    <ul className="space-y-2 mb-6">
                      {paper.keyTopics.map((topic, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <i className="ri-checkbox-circle-fill text-teal-500 flex-shrink-0 mt-0.5"></i>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer">
                      <i className="ri-download-line text-lg"></i>
                      Download ({paper.downloadSize})
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Need Custom Research?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our research team can develop custom white papers and technical reports tailored to your specific industry and challenges.
          </p>
          <a
            href="mailto:info@forgebyte.ai"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors whitespace-nowrap cursor-pointer"
          >
            <i className="ri-mail-line text-xl"></i>
            Request Custom Research
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
