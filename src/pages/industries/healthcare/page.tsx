import { useState, useEffect, useRef } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

const HealthcarePage = () => {
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
            src="/images/healthcare-hero-001--73feb9d221f4.jpg"
            alt="Healthcare Technology"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <i className="ri-heart-pulse-line text-4xl text-white"></i>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Healthcare</h1>
          </div>
          <p className="text-2xl text-white/90 mb-12 max-w-4xl leading-relaxed">
            Driving digital excellence in healthcare with advanced AI, cloud analytics, and custom engineering.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-8 py-4 bg-[#00C896] text-white font-semibold rounded-lg hover:bg-[#00B386] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
              Request Healthcare Brief
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-white hover:bg-white/90 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Empowering Digital Healthcare Section */}
      <section
        ref={setSectionRef(1)}
        data-section="1"
        className={getSectionClasses(1, "py-20 px-6 bg-white")}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16 leading-tight">
            Empowering Secure, Compliant, and Intelligent<br />Digital Healthcare
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#E8F8F5] to-white border border-[#00C896]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Mission</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                ForgeByte provides secure, compliant, and intelligent digital solutions to improve patient outcomes and operational efficiency for healthcare organizations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#E8F8F5] to-white border border-[#00C896]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Digital Care Enablement</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                ForgeByte enables healthcare providers to scale digital platforms like EHR, telemedicine, and analytics for seamless, connected patient care experiences.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#E8F8F5] to-white border border-[#00C896]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Trust, Compliance &<br />Interoperability</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                ForgeByte delivers HIPAA-compliant apps and secure FHIR/HL7 interoperability, ensuring healthcare organizations maintain protected, accessible, and reliable patient data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Intelligent Healthcare Section */}
      <section
        ref={setSectionRef(2)}
        data-section="2"
        className={getSectionClasses(2, "py-10 bg-gradient-to-br from-gray-50 to-white")}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Healthcare Powered by AI-Driven Intelligence and Intelligent Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital transformation for modern healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI & Intelligent Healthcare */}
            {/* AI & Intelligent Healthcare */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                  <i className="ri-brain-line text-xl text-[#00C896]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">AI & Intelligent Healthcare</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Predictive care models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Clinical decision support systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Automated medical imaging analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>AI-assisted diagnostics & insights</span>
                </li>
              </ul>
            </div>

            {/* Automation & Workflow Optimization */}
            {/* Automation & Workflow Optimization */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                  <i className="ri-flow-chart text-xl text-[#00C896]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Automation & Workflow Optimization</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Robotic Process Automation (RPA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Intelligent workflow orchestration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Reduced manual effort & paperwork</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Faster patient and clinical processes</span>
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
                  <span>Legacy system modernization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Hospital Management System (HMS) integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>PACS, RIS, LIMS integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Seamless data flow across departments</span>
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
                  <span>Cloud-native healthcare architectures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Strong data governance frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Continuous monitoring & risk management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>High availability & performance</span>
                </li>
              </ul>
            </div>

            {/* Future-Ready Healthcare */}
            {/* Future-Ready Healthcare */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                  <i className="ri-rocket-line text-xl text-[#00C896]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Future-Ready Healthcare</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>AI-driven predictive care models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Faster, more accurate diagnoses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Interoperable and scalable platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Ready for continuous innovation in healthcare</span>
                </li>
              </ul>
            </div>

            {/* Market-Observed Outcomes in Travel & Logistics */}
            {/* Market-Observed Outcomes in Travel & Logistics */}
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
                  <span>25-50% reduction in diagnostic errors using AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>30-40% reduction in administrative effort through automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>20-30% shorter patient wait times</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Improved patient satisfaction scores</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future of Healthcare */}
      <section
        ref={setSectionRef(3)}
        data-section="3"
        className={getSectionClasses(3, "py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800")}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Engineering the Future of Care
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            ForgeByte delivers end-to-end Al/ML, Application Development, Software Testing, Data, Cloud, and ERP services, empowering healthcare leaders to modernize operations, ensure data-driven precision, and provide superior patient  experiences through scalable, secure digital innovation.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <i className="ri-pulse-line text-5xl text-[#00C896] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Smart Engineering </h3>
              <p className="text-gray-300">Scalable Al and custom app
                development services. </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <i className="ri-speed-line text-5xl text-[#00C896] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Data Excellence </h3>
              <p className="text-gray-300">Secure data migration and cloud-
                based healthcare insights. </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <i className="ri-heart-pulse-line text-5xl text-[#00C896] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Operational Integrity </h3>
              <p className="text-gray-300">Seamless ERP integration with
                rigorous QA testing </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-[#00C896] text-white font-semibold rounded-lg hover:bg-[#00B386] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
              Schedule Consultation
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Download Healthcare Brief
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

export default HealthcarePage;
