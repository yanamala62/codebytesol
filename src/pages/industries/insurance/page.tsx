import { useRef } from 'react'; // fixed
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

const InsurancePage = () => {
    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);



  const setSectionRef = (index: number) => (el: HTMLDivElement | null) => {
    sectionsRef.current[index] = el;
  };

  const getSectionClasses = (_index: number, baseClasses = '') => {
    return baseClasses;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        ref={setSectionRef(0)}
        data-section="0"
        className={getSectionClasses(0, "pt-32 pb-20 px-6 relative overflow-hidden")}
      >
        <div className="absolute inset-0">
          <img
            src="/images/insurance-hero-001--1a6d897679a3.jpg"
            alt="Insurance Technology"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <i className="ri-shield-check-line text-4xl text-white"></i>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Insurance</h1>
          </div>
          <p className="text-2xl text-white/90 mb-12 max-w-4xl leading-relaxed">
            Intelligent, automated, and customer-centric digital solutions that empower insurers to accelerate claims, reduce fraud, and enhance customer satisfaction.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-8 py-4 bg-[var(--color-primary-500)] text-white font-semibold rounded-lg hover:bg-[#00B386] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
              Request Insurance Brief
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-white hover:bg-white/90 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Empowering Digital Insurance Section */}
      <section
        ref={setSectionRef(1)}
        data-section="1"
        className={getSectionClasses(1, "py-20 px-6 bg-white")}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16 leading-tight">
            Powering secure, intelligent, and compliant digital insurance experiences globally
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#E8F8F5] to-white border border-[var(--color-primary-500)]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Mission</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                ForgeByte delivers secure, compliant, intelligent digital insurance solutions to improve outcomes.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-[var(--color-primary-500)] mt-1">✓</span>
                  <span>Risk accuracy and operational efficiency</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-[var(--color-primary-500)] mt-1">✓</span>
                  <span>Customer trust and satisfaction</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#E8F8F5] to-white border border-[var(--color-primary-500)]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Digital Insurance Enablement</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                ForgeByte enables insurers to build and scale modern digital insurance platforms.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-[var(--color-primary-500)] mt-1">✓</span>
                  <span>Policy, claims, underwriting systems</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-[var(--color-primary-500)] mt-1">✓</span>
                  <span>Seamless omnichannel customer journeys</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#E8F8F5] to-white border border-[var(--color-primary-500)]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Trust, Compliance &<br />Interoperability</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                ForgeByte ensures secure, interoperable, and audit-ready insurance ecosystems.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-[var(--color-primary-500)] mt-1">✓</span>
                  <span>Regulatory compliance and data protection</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-[var(--color-primary-500)] mt-1">✓</span>
                  <span>Reliable system integration and governance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Intelligent Insurance Section */}
      <section
        ref={setSectionRef(2)}
        data-section="2"
        className={getSectionClasses(2, "py-10 bg-gradient-to-br from-gray-50 to-white")}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Insurance industry powered by AI-driven intelligence and automation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital insurance and technology services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI & Intelligent Insurance Service */}
            {/* AI & Intelligent Insurance Service */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[var(--color-primary-500)]/10 to-[var(--color-accent-500)]/10 rounded-lg flex-shrink-0">
                  <i className="ri-brain-line text-xl text-[var(--color-primary-500)]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">AI & Intelligent Insurance Service</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>AI-driven risk scoring and underwriting models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Claims fraud detection and prevention</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Premium calculation and pricing optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Customer behavior and portfolio analysis</span>
                </li>
              </ul>
            </div>

            {/* Automation & Operational Optimization */}
            {/* Automation & Operational Optimization */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[var(--color-primary-500)]/10 to-[var(--color-accent-500)]/10 rounded-lg flex-shrink-0">
                  <i className="ri-settings-3-line text-xl text-[var(--color-primary-500)]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Automation & Operational Optimization</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Robotic Process Automation (RPA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Automated claims processing and document handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Compliance workflow automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Reduced manual effort and faster settlements</span>
                </li>
              </ul>
            </div>

            {/* Legacy Modernization & Integration */}
            {/* Legacy Modernization & Integration */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[var(--color-primary-500)]/10 to-[var(--color-accent-500)]/10 rounded-lg flex-shrink-0">
                  <i className="ri-refresh-line text-xl text-[var(--color-primary-500)]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Legacy Modernization & Integration</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Legacy insurance system modernization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Core insurance platform integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Secure data migration to cloud environments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Seamless data flow across insurance operations</span>
                </li>
              </ul>
            </div>

            {/* Cloud, Data & Security */}
            {/* Cloud, Data & Security */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[var(--color-primary-500)]/10 to-[var(--color-accent-500)]/10 rounded-lg flex-shrink-0">
                  <i className="ri-cloud-line text-xl text-[var(--color-primary-500)]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Cloud, Data & Security</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Cloud-native insurance architectures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Strong data governance and compliance frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Continuous monitoring and risk management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>High availability, scalability, and performance</span>
                </li>
              </ul>
            </div>

            {/* Future-Ready Insurance Services */}
            {/* Future-Ready Insurance Services */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[var(--color-primary-500)]/10 to-[var(--color-accent-500)]/10 rounded-lg flex-shrink-0">
                  <i className="ri-rocket-line text-xl text-[var(--color-primary-500)]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Future-Ready Insurance Services</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Real-time AI/ML-driven decisioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Faster, more accurate underwriting and claims</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Scalable and interoperable insurance platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Ready for continuous innovation across P&C, Life, and Health</span>
                </li>
              </ul>
            </div>

            {/* Market-Observed Outcomes in Travel & Logistics */}
            {/* Market-Observed Outcomes in Travel & Logistics in Digital Insurance */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[var(--color-primary-500)]/10 to-[var(--color-accent-500)]/10 rounded-lg flex-shrink-0">
                  <i className="ri-line-chart-line text-xl text-[var(--color-primary-500)]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Number Driven Outcomes</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Up to 50% reduction in claims processing time with intelligent automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>30–40% reduction in fraud losses using AI-driven detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>20–30% improvement in underwriting accuracy through AI models</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future of Insurance */}
      <section
        ref={setSectionRef(3)}
        data-section="3"
        className={getSectionClasses(3, "py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800")}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Engineering the Future of Insurance
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            ForgeByte delivers end-to-end AI/ML, Application Development, Software Testing, Data, Cloud, and ERP services, enabling insurers to modernize operations, strengthen security and compliance, drive data-led decisions, and deliver trusted, scalable digital insurance experiences.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <i className="ri-robot-line text-5xl text-[var(--color-primary-500)] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Smart Engineering</h3>
              <p className="text-gray-300">Scalable AI-driven and custom insurance application development services</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <i className="ri-database-line text-5xl text-[var(--color-primary-500)] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Data Excellence</h3>
              <p className="text-gray-300">Secure data modernization, analytics, governance, and cloud insurance insights</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <i className="ri-shield-check-line text-5xl text-[var(--color-primary-500)] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Operational Integrity</h3>
              <p className="text-gray-300">Core insurance system integration with rigorous compliance-focused quality assurance</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-[var(--color-primary-500)] text-white font-semibold rounded-lg hover:bg-[#00B386] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
              Schedule Consultation
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Download Insurance Brief
            </Link>
          </div>
        </div>
      </section>

      <div
        ref={setSectionRef(4)}
        data-section="4"
        className={getSectionClasses(4)}
      >
        <Footer />
      </div>
    </div>
  );
};

export default InsurancePage;
