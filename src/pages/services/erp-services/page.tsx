
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: 'ri-briefcase-4-line',
    title: 'ERP Consulting',
    points: [
      'ForgeByte provides ERP consulting to align systems with strategic goals, streamline operations across finance, HR, supply chain, and manufacturing, and reduce deployment risks.',
      'Using the FB AI-Infused ERP Framework, we design architectures, evaluate platforms, define data models, and deliver actionable implementation plans for scalable, secure outcomes'
    ]
  },
  {
    icon: 'ri-layout-grid-line',
    title: 'Custom ERP Modules',
    points: [
      'ForgeByte develops custom ERP modules to streamline operations, reduce manual work, and adapt systems across finance, HR, CRM, procurement, and supply chain.',
      'Using the FB AI-Infused ERP Framework, we follow a modular, tool-agnostic approach with UX design, database modeling, API development, automated testing, and seamless integration.'
    ]
  },
  {
    icon: 'ri-install-line',
    title: 'ERP Implementation',
    points: [
      'ForgeByte delivers structured ERP implementations that reduce risk, accelerate adoption, and ensure operational excellence aligned with business goals.',
      'Using the FB AI-Infused, tool-agnostic ERP Framework, we cover process mapping, configuration, data migration, automation, testing, security, training, and hypercare support.'
    ]
  },
  {
    icon: 'ri-links-line',
    title: 'Integrations (ERP + External Systems)',
    points: [
      'ForgeByte delivers ERP integrations that unify systems, reduce manual data handling, and provide real-time insights for faster, more accurate decision-making.',
      'Using the FB AI-Infused, tool-agnostic Integration Framework, we design secure APIs, automated data flows, mapping logic, and dashboards for actionable cross-system visibility.'
    ]
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'ERP Support & Maintenance',
    points: [
      'ForgeByte provides end-to-end ERP support, ensuring system performance, security, minimal downtime, and alignment with evolving business needs.',
      'Using the FB AI-Infused, tool-agnostic Support Framework, we manage updates, monitoring, audits, disaster recovery, and SLA-based issue resolution for stable operations.'
    ]
  }
];

const erpFrameworks = [
  {
    category: 'ERP Platforms',
    tools: ['SAP (S/4HANA)', 'Oracle ERP Cloud', 'Microsoft Dynamics 365', 'NetSuite']
  },
  {
    category: 'ERP Architecture & Customization',
    tools: ['Modular ERP Design', 'Custom Modules', 'Extensions', 'Workflow Automation', 'Role Based Configurations']
  },
  {
    category: 'Integration, Data & Automation',
    tools: ['REST APIs', 'Middleware', 'ETL Pipelines', 'Event Based Integrations', 'Data Migration & Validation']
  },
  {
    category: 'Security, Support & Operations',
    tools: ['Access Controls', 'Audit & Compliance', 'Monitoring', 'SLA-Based Support', 'Upgrades & Disaster Recovery']
  }
];

export default function ERPServices() {










  const getCardClasses = () => {
    return 'bg-white border border-gray-200 rounded-xl p-8 hover:border-[#00C896] hover:shadow-lg transition-all duration-500 transform opacity-100 translate-x-0 scale-100 flex flex-col h-full';
  };



  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 min-h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/erp-services-hero-bg-002--5abf69af5bfa.jpg)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <i className="ri-building-line text-white"></i>
              <span className="text-sm font-medium text-white">ERP Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Streamline Operations With <span className="bg-gradient-to-r from-[#00C896] to-[#00D9FF] bg-clip-text text-transparent">Integrated ERP</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Optimize your business processes with enterprise resource planning solutions that unify finance, operations, and supply chain management.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00C896] text-white rounded-lg font-medium hover:bg-[#00B085] transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Transform Your Business
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-[#00C896] to-[#00D9FF] bg-clip-text text-transparent">ERP Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end ERP solutions from implementation to optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${getCardClasses()} ${index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'
                  }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                    <i className={`${service.icon} text-xl text-[#00C896]`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                </div>
                <ul className="text-gray-600 space-y-3 flex-grow">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-[#00C896] mt-1.5">•</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise Ready <span className="bg-gradient-to-r from-[#00C896] to-[#00D9FF] bg-clip-text text-transparent">ERP Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              ForgeByte follows a tool-agnostic, AI-infused ERP approach, powered by our proprietary FB ERP Framework, enabling streamlined operations, secure implementations, seamless integrations, and scalable ERP ecosystems aligned with business goals.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {erpFrameworks.map((framework, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:border-[#00C896] hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
                  {framework.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {framework.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-100"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#00C896] to-[#00D9FF]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Optimize Your ERP?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's implement an ERP solution that streamlines your operations and drives efficiency.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#00C896] rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            Get Started Today
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
