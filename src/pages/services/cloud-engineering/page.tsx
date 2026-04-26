
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: 'ri-map-pin-line',
    title: 'Cloud Roadmap Advisory',
    points: [
      'We define cloud roadmaps aligned with business goals, ensuring scalable, secure, and cost-effective cloud adoption.',
      'Our advisory approach helps organizations plan, govern, and modernize cloud environments for long-term readiness.'
    ]
  },
  {
    icon: 'ri-money-dollar-circle-line',
    title: 'Multi-Cloud TCO Analysis',
    points: [
      'We analyze multi-cloud costs to give clear visibility into spend, helping organizations make informed and cost-efficient cloud investment decisions.',
      'Our approach improves budget predictability and governance by optimizing usage across AWS, Azure, and Google Cloud.'
    ]
  },
  {
    icon: 'ri-pulse-line',
    title: 'Cloud Wellness Checks',
    points: [
      'We assess cloud environments to ensure security, efficiency, and reliability across compute, storage, networking, and compliance layers.',
      'Our recommendations improve performance, reduce risk, and strengthen operational resilience for scalable, well-managed cloud operations.'
    ]
  },
  {
    icon: 'ri-cloud-windy-line',
    title: 'Cloud Modernization & Migration',
    points: [
      'We modernize legacy applications and migrate workloads to the cloud, enabling scalable, resilient systems with reduced downtime and optimized costs.',
      'Our structured, tool-agnostic approach ensures secure migration, automation, and validation for long-term cloud readiness and innovation.'
    ]
  }
];

const cloudFrameworks = [
  {
    category: 'Cloud Platforms',
    tools: ['AWS', 'Microsoft Azure', 'Google Cloud Platform (GCP)']
  },
  {
    category: 'Cloud Architecture & Modernization',
    tools: ['Docker', 'Kubernetes', 'Lambda', 'Azure Function']
  },
  {
    category: 'Cost, Governance & Security',
    tools: ['IAM', 'RBAC', 'OAuth', 'SSO']
  },
  {
    category: 'Monitoring, Automation & Operations',
    tools: ['Terraform', 'CloudFormation', 'CI/CD Pipelines', 'CloudWatch', 'Azure Monitor', 'Prometheus', 'Grafana']
  }
];

export default function CloudEngineering() {










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
            backgroundImage: 'url(/images/cloud-eng-hero-bg-002--fd891f815309.jpg)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <i className="ri-cloud-line text-white"></i>
              <span className="text-sm font-medium text-white">Cloud Engineering</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Architect Cloud Solutions That <span className="bg-gradient-to-r from-[#00C896] to-[#00D9FF] bg-clip-text text-transparent">Scale & Secure</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Design, build, and optimize cloud infrastructure that powers your digital transformation with reliability and efficiency.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00C896] text-white rounded-lg font-medium hover:bg-[#00B085] transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Explore Cloud Solutions
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
              Our <span className="bg-gradient-to-r from-[#00C896] to-[#00D9FF] bg-clip-text text-transparent">Cloud Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud engineering solutions for modern enterprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={getCardClasses()}
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
              Enterprise Ready <span className="bg-gradient-to-r from-[#00C896] to-[#00D9FF] bg-clip-text text-transparent">Cloud Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              ForgeByte follows a tool-agnostic, AI-infused cloud approach, powered by our proprietary FB Cloud Framework, enabling secure planning, cost governance, modernization, and resilient cloud operations across multi-cloud environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudFrameworks.map((framework, index) => (
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
            Ready to Modernize Your Infrastructure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's design a cloud strategy that accelerates your business growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#00C896] rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            Start Your Cloud Journey
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
