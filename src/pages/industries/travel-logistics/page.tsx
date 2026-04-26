import { useState, useEffect, useRef } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

const TravelLogisticsPage = () => {
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
            src="/images/travel-logistics-hero-001--0ea8f283ece0.jpg"
            alt="Travel & Logistics Technology"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <i className="ri-plane-line text-4xl text-white"></i>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">Travel & Logistics</h1>
          </div>
          <p className="text-2xl text-white/90 mb-12 max-w-4xl leading-relaxed">
            Orchestrating seamless travel and logistics operations through intelligent, connected digital platforms
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-8 py-4 bg-[#00C896] text-white font-semibold rounded-lg hover:bg-[#00B386] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
              Request Travel & Logistics Brief
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-white hover:bg-white/90 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Empowering Digital Travel & Logistics Section */}
      <section
        ref={setSectionRef(1)}
        data-section="1"
        className={getSectionClasses(1, "py-20 px-6 bg-white")}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16 leading-tight">
            Powering connected, intelligent, and resilient digital travel logistics ecosystems globally
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#E8F8F5] to-white border border-[#00C896]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Mission</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                ForgeByte delivers secure, scalable, intelligent digital travel and logistics solutions to improve outcomes.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">✓</span>
                  <span>Operational efficiency and reliability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">✓</span>
                  <span>Customer experience and service quality</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#E8F8F5] to-white border border-[#00C896]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Digital Travel Enablement</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                ForgeByte enables travel and logistics firms to build and scale modern digital platforms.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">✓</span>
                  <span>Booking, tracking, and fulfillment systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">✓</span>
                  <span>Seamless end-to-end journey visibility</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#E8F8F5] to-white border border-[#00C896]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Trust, Compliance &<br />Interoperability</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                ForgeByte ensures secure, interoperable, and regulation-ready logistics ecosystems.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">✓</span>
                  <span>Data security and compliance readiness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">✓</span>
                  <span>Seamless partner and system integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Intelligent Travel & Logistics Section */}
      <section
        ref={setSectionRef(2)}
        data-section="2"
        className={getSectionClasses(2, "py-10 bg-gradient-to-br from-gray-50 to-white")}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Travel & Logistics Powered by AI-Driven Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital travel and logistics technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI & Intelligent Operations */}
            {/* AI & Intelligent Operations */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                  <i className="ri-route-line text-xl text-[#00C896]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">AI & Intelligent Operations</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>AI-powered delivery predictions and route optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Fleet utilization and operational efficiency insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Real-time shipment tracking and logistics analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Intelligent decision support for resource allocation</span>
                </li>
              </ul>
            </div>

            {/* Automation & Workflow Optimization */}
            {/* Automation & Workflow Optimization */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                  <i className="ri-price-tag-line text-xl text-[#00C896]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Automation & Workflow Optimization</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>RPA for ticketing, invoicing, claims, and partner operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Reduced operational costs and manual effort</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Accelerated end-to-end logistics and travel workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Faster response times and improved service reliability</span>
                </li>
              </ul>
            </div>

            {/* System Modernization & Integration */}
            {/* System Modernization & Integration */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                  <i className="ri-truck-line text-xl text-[#00C896]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">System Modernization & Integration</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Integration with ERP, WMS, TMS, CRM, and carrier networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Cloud-native infrastructure and scalable architectures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Real-time dashboards for operational KPIs and shipment visibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Seamless data flow across travel and logistics systems</span>
                </li>
              </ul>
            </div>

            {/* Cloud, Data & Security */}
            {/* Cloud, Data & Security */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                  <i className="ri-customer-service-line text-xl text-[#00C896]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Cloud, Data & Security</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Cloud-native, resilient travel and logistics platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Strong data governance and compliance frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Continuous monitoring and risk management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>High availability, performance, and operational reliability</span>
                </li>
              </ul>
            </div>

            {/* Future-Ready Travel & Logistics */}
            {/* Future-Ready Travel & Logistics */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                  <i className="ri-building-line text-xl text-[#00C896]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Future-Ready Travel & Logistics</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>AI-driven predictions for routing, demand, and fleet optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Faster, more accurate decision-making across operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Scalable and interoperable logistics and travel platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Ready for continuous innovation and enhanced customer experience</span>
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
                <h3 className="text-xl font-bold text-gray-900">Market-Observed Outcomes in Travel & Logistics</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Up to 30–40% reduction in routing inefficiencies with AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Up to 25% reduction in operational costs through automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Over 35% improvement in delivery reliability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future of Travel & Logistics */}
      <section
        ref={setSectionRef(3)}
        data-section="3"
        className={getSectionClasses(3, "py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800")}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Engineering the Future of Travel Logistics
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            ForgeByte delivers end-to-end AI/ML, Application Development, Software Testing, Data, Cloud, and ERP services, enabling travel and logistics organizations to modernize operations, improve reliability and compliance, drive data-led decisions, and deliver scalable, secure digital platforms.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <i className="ri-map-pin-line text-5xl text-[#00C896] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Smart Engineering</h3>
              <p className="text-gray-300">Scalable AI-driven and custom travel logistics application development services</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <i className="ri-bar-chart-box-line text-5xl text-[#00C896] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Data Excellence</h3>
              <p className="text-gray-300">Secure data modernization, analytics, and real-time logistics intelligence.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <i className="ri-customer-service-2-line text-5xl text-[#00C896] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Operational Integrity</h3>
              <p className="text-gray-300">Enterprise system integration with rigorous reliability and compliance assurance</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-[#00C896] text-white font-semibold rounded-lg hover:bg-[#00B386] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
              Schedule Consultation
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Download Travel & Logistics Brief
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

export default TravelLogisticsPage;
