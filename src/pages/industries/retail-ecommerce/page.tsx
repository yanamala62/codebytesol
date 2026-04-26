import { useState, useEffect, useRef } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

const RetailEcommercePage = () => {
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
            src="/images/retail-hero-001--3a24e3d07bca.jpg"
            alt="Retail & eCommerce Technology"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <i className="ri-shopping-cart-line text-4xl text-white"></i>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Retail & Ecomm</h1>
          </div>
          <p className="text-2xl text-white/90 mb-12 max-w-4xl leading-relaxed">
            Elevate customer experience, streamline operations, and scale rapidly with intelligent digital solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-8 py-4 bg-[#00C896] text-white font-semibold rounded-lg hover:bg-[#00B386] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
              Request Retail Brief
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-white hover:bg-white/90 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Empowering Digital Retail Section */}
      <section
        ref={setSectionRef(1)}
        data-section="1"
        className={getSectionClasses(1, "py-20 px-6 bg-white")}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16 leading-tight">
            Powering scalable, intelligent, and seamless digital retail commerce experiences globally
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#E8F8F5] to-white border border-[#00C896]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Mission</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                ForgeByte delivers secure, scalable, intelligent digital retail solutions to improve outcomes.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">✓</span>
                  <span>Customer experience and engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">✓</span>
                  <span>Operational efficiency and revenue growth</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#E8F8F5] to-white border border-[#00C896]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Digital Retail Enablement</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                ForgeByte enables retailers to build and scale modern digital commerce platforms.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">✓</span>
                  <span>Omnichannel commerce and marketplaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">✓</span>
                  <span>Personalized customer journeys</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#E8F8F5] to-white border border-[#00C896]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Trust, Compliance &<br />Interoperability</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                ForgeByte ensures secure, interoperable, and resilient retail ecosystems.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">✓</span>
                  <span>Data security and compliance readiness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">✓</span>
                  <span>Seamless system integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Intelligent Retail Section */}
      <section
        ref={setSectionRef(2)}
        data-section="2"
        className={getSectionClasses(2, "py-10 bg-gradient-to-br from-gray-50 to-white")}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Retail and e-commerce powered by AI-driven intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital retail and commerce technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI & Intelligent Retail */}
            {/* AI & Intelligent Retail */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                  <i className="ri-brain-line text-xl text-[#00C896]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">AI & Intelligent Retail</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Personalized product recommendations and promotions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>AI-driven demand forecasting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Pricing optimization and dynamic offers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Customer segmentation and insights</span>
                </li>
              </ul>
            </div>

            {/* Automation & Operational Optimization */}
            {/* Automation & Operational Optimization */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                  <i className="ri-settings-3-line text-xl text-[#00C896]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Automation & Operational Optimization</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Inventory management and order fulfillment automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Warehouse and supply chain process optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Reduced stockouts and operational costs Faster delivery and improved logistics precision</span>
                </li>
              </ul>
            </div>

            {/* Platform Modernization & System Integration */}
            {/* Platform Modernization & System Integration */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                  <i className="ri-cloud-line text-xl text-[#00C896]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Platform Modernization & System Integration</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Cloud-native retail architectures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Integration of POS, ERP, CRM, and other retail systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Scalable microservices for high performance applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Real-time analytics dashboards for operational insights</span>
                </li>
              </ul>
            </div>

            {/* Cloud, Data & Security */}
            {/* Cloud, Data & Security */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                  <i className="ri-shield-check-line text-xl text-[#00C896]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Cloud, Data & Security</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Cloud-native and scalable retail platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Strong data governance and security frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Continuous monitoring and risk management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>High availability, performance, and resilience</span>
                </li>
              </ul>
            </div>

            {/* Future-Ready Retail */}
            {/* Future-Ready Retail */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                  <i className="ri-rocket-line text-xl text-[#00C896]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Future-Ready Retail</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>AI-driven personalization and predictive insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Faster, more accurate inventory and supply chain decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Scalable and interoperable retail platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Ready for continuous innovation and customer engagement</span>
                </li>
              </ul>
            </div>

            {/* Market-Observed Outcomes in Travel & Logistics in Digital Retail */}
            {/* Market-Observed Outcomes in Travel & Logistics in Digital Retail */}
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
                  <span>Up to 25% increase in sales through AI-powered personalization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>15–30% reduction in supply chain costs using automation and analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>40% faster operational processes through workflow optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future of Retail */}
      <section
        ref={setSectionRef(3)}
        data-section="3"
        className={getSectionClasses(3, "py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800")}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Engineering the Future of Retail & Ecommerce
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            ForgeByte delivers end-to-end AI/ML, Application Development, Software Testing, Data, Cloud, and ERP services, enabling retailers to modernize operations, optimize customer experiences, drive data-led decisions, and deliver scalable, secure digital commerce platforms.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <i className="ri-shopping-bag-line text-5xl text-[#00C896] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Smart Engineering</h3>
              <p className="text-gray-300">Scalable AI-driven and custom retail commerce application development services</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <i className="ri-bar-chart-box-line text-5xl text-[#00C896] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Data Excellence</h3>
              <p className="text-gray-300">Secure data modernization, analytics, and real-time logistics intelligence.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <i className="ri-global-line text-5xl text-[#00C896] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Operational Integrity</h3>
              <p className="text-gray-300">Enterprise system integration with rigorous performance and quality assurance</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-[#00C896] text-white font-semibold rounded-lg hover:bg-[#00B386] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
              Schedule Consultation
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Download Retail Brief
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

export default RetailEcommercePage;
