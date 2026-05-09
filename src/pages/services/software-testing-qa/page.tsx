import { useRef } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: 'ri-bug-line',
    title: 'Functional Manual Testing',
    points: [
      'We perform comprehensive manual testing to identify issues early, ensuring reliable, seamless, and stable user experiences with infusion of AI.',
      'Our risk-based, requirement-driven approach validates features across workflows, delivering consistent performance and operational excellence in every release.'
    ]
  },
  {
    icon: 'ri-robot-line',
    title: 'Test Automation',
    points: [
      'We deliver automation testing that accelerates release cycles, increases coverage, and ensures reliable, high-quality software deployments through our Tool Agnostic AI Framework.',
      'Our CI/CD-integrated solutions provide continuous validation, reduce manual effort, and enhance operational efficiency across every release.'
    ]
  },
  {
    icon: 'ri-speed-up-line',
    title: 'Performance Testing',
    points: [
      'We conduct performance testing to ensure applications remain fast, stable, and scalable under real-world conditions.',
      'Our testing identifies bottlenecks and inefficiencies, providing actionable insights to optimize responsiveness and maintain peak system efficiency.'
    ]
  },
  {
    icon: 'ri-wheelchair-line',
    title: 'Accessibility Testing',
    points: [
      'We perform accessibility testing to ensure digital products meet WCAG 2.1 standards and are usable by all users.',
      'Our evaluations provide actionable recommendations, improving compliance, user reach, and inclusive experiences across devices and browsers.'
    ]
  },
  {
    icon: 'ri-flask-line',
    title: 'Specialized Testing',
    points: [
      'Block Chain - We test blockchain applications and smart contracts to ensure security, reliability, and flawless performance for confident production deployment.',
      'AI ML- We validate AI/ML models to ensure accuracy, fairness, and reliability, enabling ethical, compliant, and business-aligned deployment.'
    ]
  },
  {
    icon: 'ri-shake-hands-line',
    title: 'Test Advisory',
    points: [
      'We optimize QA strategies to deliver scalable, efficient, and high-quality testing across agile, DevOps, and hybrid delivery models.',
      'Our approach implements automation, CI/CD pipelines, and best practices, ensuring consistent quality, faster releases, and long-term testing excellence.'
    ]
  }
];

const qaFrameworks = [
  {
    category: 'Test Automation',
    tools: ['Selenium', 'Cypress', 'Playwright', 'Appium', 'RestAssured', 'TestNG', 'JUnit', 'Cucumber']
  },
  {
    category: 'Performance Testing',
    tools: ['JMeter', 'Gatling', 'Locust', 'BlazeMeter', 'Apache Bench', 'NeoLoad']
  },
  {
    category: 'Monitoring, CI/CD & DevOps Integration',
    tools: ['Jenkins', 'GitLab CI', 'Azure DevOps', 'Bamboo', 'Grafana', 'Prometheus', 'New Relic', 'ELK Stack']
  },
  {
    category: 'Manual Testing',
    tools: ['TestRail', 'Zephyr', 'qTest', 'Jira', 'Exploratory Testing', 'Regression Testing', 'Smoke & Sanity Testing']
  }
];

export default function SoftwareTestingQA() {
  /* const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [visibleTools, setVisibleTools] = useState<Set<number>>(new Set()); */
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardsRef.current[index] = el;
  };



  const getCardClasses = () => {
    return 'bg-white border border-gray-200 rounded-xl p-8 hover:border-[var(--color-primary-500)] hover:shadow-lg transition-all duration-500 transform opacity-100 translate-x-0 scale-100 flex flex-col h-full';
  };



  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 min-h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/qa-testing-hero-bg-002--6434804bb005.jpg)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <i className="ri-bug-line text-white"></i>
              <span className="text-sm font-medium text-white">Software Testing & QA</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Deliver Flawless Software With <span className="bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] bg-clip-text text-transparent">Rigorous Testing</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Ensure quality, performance, and reliability with comprehensive testing strategies that catch issues before they reach production.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary-500)] text-white rounded-lg font-medium hover:bg-[#00B085] transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Ensure Quality
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
              Our <span className="bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] bg-clip-text text-transparent">Testing & QA Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive QA solutions for every stage of development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                ref={setCardRef(index)}
                data-card={index}
                className={getCardClasses()}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[var(--color-primary-500)]/10 to-[var(--color-accent-500)]/10 rounded-lg flex-shrink-0">
                    <i className={`${service.icon} text-xl text-[var(--color-primary-500)]`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                </div>
                <ul className="text-gray-600 space-y-3 flex-grow">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-[var(--color-primary-500)] mt-1.5">•</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise Ready <span className="bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] bg-clip-text text-transparent">Software Testing & QA</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              ForgeByte follows a tool-agnostic, AI-infused QA approach, powered by our proprietary FB QA Framework, ensuring consistent quality, risk mitigation, and reliable releases across the entire software lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qaFrameworks.map((framework, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:border-[var(--color-primary-500)] hover:shadow-lg transition-all duration-300"
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
      <section className="py-16 bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-accent-500)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Software Quality?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's build a testing strategy that ensures flawless user experiences.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-primary-500)] rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            Start Testing Today
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
