import { useRef } from 'react'; // fixed
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

const EnergyUtilitiesPage = () => {
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
            src="/images/energy-hero-001--03f25965053e.jpg"
            alt="Energy & Utilities Technology"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <i className="ri-flashlight-line text-4xl text-white"></i>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Energy & Utilities</h1>
          </div>
          <p className="text-2xl text-white/90 mb-12 max-w-4xl leading-relaxed">
            Transforming energy and utilities through intelligent, secure, and data-driven digital platforms
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-8 py-4 bg-[var(--color-primary-500)] text-white font-semibold rounded-lg hover:bg-[#00B386] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
              Request Energy Brief
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-white hover:bg-white/90 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Empowering Digital Energy Section */}
      <section
        ref={setSectionRef(1)}
        data-section="1"
        className={getSectionClasses(1, "py-20 px-6 bg-white")}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16 leading-tight">
            Powering resilient, intelligent, and sustainable digital energy ecosystems globally
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#E8F8F5] to-white border border-[var(--color-primary-500)]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Mission</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                ForgeByte delivers secure, scalable, intelligent digital energy solutions to improve outcomes.<br />
                <span className="block mt-2">✓ Grid reliability and operational efficiency</span>
                <span className="block">✓ Customer service and sustainability goals</span>
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#E8F8F5] to-white border border-[var(--color-primary-500)]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Digital Energy Enablement</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                ForgeByte enables utilities to build and scale modern digital energy platforms.<br />
                <span className="block mt-2">✓ Smart grids, billing, asset management</span>
                <span className="block">✓ Omnichannel customer engagement</span>
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#E8F8F5] to-white border border-[var(--color-primary-500)]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Trust, Compliance &<br />Interoperability</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                ForgeByte ensures secure, interoperable, and regulation-ready utility ecosystems.<br />
                <span className="block mt-2">✓ Data security and regulatory compliance</span>
                <span className="block">✓ Seamless system integration</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Intelligent Energy Section */}
      <section
        ref={setSectionRef(2)}
        data-section="2"
        className={getSectionClasses(2, "py-10 bg-gradient-to-br from-gray-50 to-white")}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Energy and utilities powered by AI-driven intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital energy and utility technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI & Intelligent Energy Management */}
            {/* AI & Intelligent Energy Management */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[var(--color-primary-500)]/10 to-[var(--color-accent-500)]/10 rounded-lg flex-shrink-0">
                  <i className="ri-brain-line text-xl text-[var(--color-primary-500)]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">AI & Intelligent Energy Management</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Predictive maintenance and asset performance optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>AI-driven demand forecasting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Smarter grid management and energy distribution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Real-time insights for operational and sustainability decisions</span>
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
                  <span>IoT and edge-enabled monitoring automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Meter reading, billing, and compliance workflow automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Reduced downtime and operational costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Faster decision-making and improved field operations</span>
                </li>
              </ul>
            </div>

            {/* System Modernization & Integration */}
            {/* System Modernization & Integration */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[var(--color-primary-500)]/10 to-[var(--color-accent-500)]/10 rounded-lg flex-shrink-0">
                  <i className="ri-database-2-line text-xl text-[var(--color-primary-500)]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">System Modernization & Integration</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>SCADA, ERP, CRM, and field-service system integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Cloud modernization and big data analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Scalable, secure, high-performance architectures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Seamless data flow across distributed energy resources</span>
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
                  <span>Cloud-native and resilient energy platforms</span>
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
                  <span>High availability, performance, and operational reliability</span>
                </li>
              </ul>
            </div>

            {/* Future-Ready Energy Operations */}
            {/* Future-Ready Energy Operations */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[var(--color-primary-500)]/10 to-[var(--color-accent-500)]/10 rounded-lg flex-shrink-0">
                  <i className="ri-flashlight-line text-xl text-[var(--color-primary-500)]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Future-Ready Energy Operations</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>AI-driven predictive maintenance and demand forecasting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Faster, more accurate energy management decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Scalable, interoperable, and resilient energy systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Ready for continuous innovation and sustainability initiatives</span>
                </li>
              </ul>
            </div>

            {/* Market-Observed Outcomes in Travel & Logistics */}
            {/* Market-Observed Outcomes in Travel & Logistics */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[var(--color-primary-500)]/10 to-[var(--color-accent-500)]/10 rounded-lg flex-shrink-0">
                  <i className="ri-trophy-line text-xl text-[var(--color-primary-500)]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Market-Observed Outcomes in Travel & Logistics in Energy & Utilities</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Up to 30% increase in asset uptime with predictive maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>20-25% improvement in grid efficiency through AI and analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-primary-500)] mt-1">•</span>
                  <span>Reduced operational costs and downtime with intelligent automation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future of Energy */}
      <section
        ref={setSectionRef(3)}
        data-section="3"
        className={getSectionClasses(3, "py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800")}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Engineering the Future of Energy & Utilities
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            ForgeByte delivers end-to-end AI/ML, Application Development, Software Testing, Data, Cloud, and ERP services, enabling energy and utility organizations to modernize operations, strengthen reliability and compliance, drive data-led decisions, and deliver scalable, secure digital energy solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <i className="ri-lightbulb-flash-line text-5xl text-[var(--color-primary-500)] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Smart Engineering</h3>
              <p className="text-gray-300">Scalable AI-driven and custom energy platform application development services</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <i className="ri-bar-chart-grouped-line text-5xl text-[var(--color-primary-500)] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Data Excellence</h3>
              <p className="text-gray-300">Secure data modernization, analytics, and operational insights for utilities</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <i className="ri-shield-check-line text-5xl text-[var(--color-primary-500)] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Operational Integrity</h3>
              <p className="text-gray-300">Core system integration with rigorous reliability and compliance assurance</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-[var(--color-primary-500)] text-white font-semibold rounded-lg hover:bg-[#00B386] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
              Schedule Consultation
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Download Energy Brief
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

export default EnergyUtilitiesPage;
