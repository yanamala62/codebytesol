import { useState, useEffect, useRef } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

const BankingFinancePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
  }, []);

  const setSectionRef = (index: number) => (el: HTMLDivElement | null) => {
    sectionsRef.current[index] = el;
  };

  const getSectionClasses = (_index: number, baseClasses = '') => {
    return baseClasses;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />

      {/* Hero Section */}
      <section
        ref={setSectionRef(0)}
        data-section="0"
        className={getSectionClasses(0, "pt-32 pb-20 px-6 relative overflow-hidden")}
      >
        <div className="absolute inset-0">
          <img
            src="/images/banking-hero-001--634b01222a12.jpg"
            alt="Banking & Finance Technology"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <i className="ri-bank-line text-4xl text-white"></i>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Banking & Finance</h1>
          </div>
          <p className="text-2xl text-white/90 mb-12 max-w-4xl leading-relaxed">
            Accelerating digital transformation through secure, scalable, and compliant technology solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-8 py-4 bg-[#00C896] text-white font-semibold rounded-lg hover:bg-[#00B386] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
              Request Banking Brief
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-white hover:bg-white/90 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Empowering Digital Banking Section */}
      <section
        ref={setSectionRef(1)}
        data-section="1"
        className={getSectionClasses(1, "py-20 px-6 bg-white")}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16 leading-tight">
            Powering secure, intelligent, and compliant digital banking experiences globally
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#E8F8F5] to-white border border-[#00C896]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Mission</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                ForgeByte delivers secure, compliant, intelligent digital banking solutions to improve outcomes.<br />
                ✓ Customer trust and engagement<br />
                ✓ Operational efficiency and risk control
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#E8F8F5] to-white border border-[#00C896]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Digital Banking Enablement</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                ForgeByte enables banks to build and scale modern digital banking platforms.<br />
                ✓ Core banking, payments, lending<br />
                ✓ Seamless omnichannel customer journeys
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#E8F8F5] to-white border border-[#00C896]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Trust, Compliance &<br />Interoperability</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                ForgeByte ensures secure, interoperable, and audit-ready banking ecosystems.<br />
                ✓ Regulatory compliance and data security<br />
                ✓ Reliable system integration and governance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Intelligent Banking Section */}
      <section
        ref={setSectionRef(2)}
        data-section="2"
        className={getSectionClasses(2, "py-10 bg-gradient-to-br from-gray-50 to-white")}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Banking and financial services powered by AI-driven intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital banking and financial technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI & Intelligent Financial Service */}
            {/* AI & Intelligent Financial Service */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                  <i className="ri-brain-line text-xl text-[#00C896]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">AI & Intelligent Financial Service</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Credit risk modeling and scoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>AI-driven fraud detection & prevention</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>KYC and AML automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Intelligent document processing & insights</span>
                </li>
              </ul>
            </div>

            {/* Automation & Operational Optimization */}
            {/* Automation & Operational Optimization */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                  <i className="ri-flow-chart text-xl text-[#00C896]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Automation & Operational Optimization</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Robotic Process Automation (RPA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Automated onboarding and verification Reduced manual processing and costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Faster lending and transaction workflows</span>
                </li>
              </ul>
            </div>

            {/* Legacy Modernization & Integration */}
            {/* Legacy Modernization & Integration */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                  <i className="ri-refresh-line text-xl text-[#00C896]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Legacy Modernization & Integration</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Legacy core banking modernization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Core banking system integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>CRM, ERP, and third-party fintech integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Secure API-driven data exchange</span>
                </li>
              </ul>
            </div>

            {/* Cloud, Data & Security */}
            {/* Cloud, Data & Security */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                  <i className="ri-cloud-line text-xl text-[#00C896]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Cloud, Data & Security</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Cloud-native financial architectures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Strong data governance & compliance frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Continuous monitoring & risk management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>High availability, resilience & disaster recovery</span>
                </li>
              </ul>
            </div>

            {/* Future-Ready Financial Services */}
            {/* Future-Ready Financial Services */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                  <i className="ri-rocket-line text-xl text-[#00C896]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Future-Ready Financial Services</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>AI-driven risk and decision intelligence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Faster, more accurate credit decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Scalable and interoperable financial platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Ready for continuous innovation in BFSI</span>
                </li>
              </ul>
            </div>

            {/* Market-Observed Outcomes in Travel & Logistics */}
            {/* Market-Observed Outcomes in Travel & Logistics in Digital Banking & Financials */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                  <i className="ri-line-chart-line text-xl text-[#00C896]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Number Driven Outcomes</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Up to 40% reduction in fraud losses with AI-driven fraud detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>20–30% reduction in operational costs through automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>50% faster credit and lending decisions using AI models</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future of Banking */}
      <section
        ref={setSectionRef(3)}
        data-section="3"
        className={getSectionClasses(3, "py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800")}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Engineering the Future of Banking
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            ForgeByte delivers end-to-end AI/ML, Application Development, Software Testing, Data, Cloud, and ERP services, enabling banks and financial institutions to modernize operations, strengthen security and compliance, drive data-led decisions, and deliver trusted, scalable digital financial experiences.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <i className="ri-pulse-line text-5xl text-[#00C896] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Smart Engineering</h3>
              <p className="text-gray-300">Scalable AI-driven and custom banking application development services</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <i className="ri-speed-line text-5xl text-[#00C896] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Data Excellence</h3>
              <p className="text-gray-300">Secure data modernization, analytics, governance, and cloud financial insights.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <i className="ri-shield-check-line text-5xl text-[#00C896] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Operational Integrity</h3>
              <p className="text-gray-300">Core system integration with rigorous compliance-focused quality assurance</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-[#00C896] text-white font-semibold rounded-lg hover:bg-[#00B386] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
              Schedule Consultation
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Download Banking Brief
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

export default BankingFinancePage;
