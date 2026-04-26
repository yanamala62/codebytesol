import { useState, useEffect, useRef } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

const ISVHiTechPage = () => {
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
            src="/images/isv-hitech-hero-001--7d29e419a1c2.jpg"
            alt="ISV & Hi-Tech Technology"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <i className="ri-code-box-line text-4xl text-white"></i>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">ISV & Hi-Tech</h1>
          </div>
          <p className="text-2xl text-white/90 mb-12 max-w-4xl leading-relaxed">
            Empowering technology leaders to build, scale, and innovate faster with confidence
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-8 py-4 bg-[#00C896] text-white font-semibold rounded-lg hover:bg-[#00B386] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
              Request ISV Brief
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-white hover:bg-white/90 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Empowering Digital ISV Section */}
      <section
        ref={setSectionRef(1)}
        data-section="1"
        className={getSectionClasses(1, "py-20 px-6 bg-white")}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16 leading-tight">
            Powering scalable, intelligent, and innovative digital products for technology leaders
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#E8F8F5] to-white border border-[#00C896]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Mission</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                ForgeByte delivers secure, scalable, intelligent digital solutions for ISVs and Hi-Tech firms.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">✓</span>
                  <span>Faster product innovation and scalability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">✓</span>
                  <span>Platform reliability and customer adoption</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#E8F8F5] to-white border border-[#00C896]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Digital Tech Enablement</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                ForgeByte enables ISVs to build and scale modern digital platforms.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">✓</span>
                  <span>SaaS, cloud-native, and AI products</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">✓</span>
                  <span>Seamless customer experiences</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#E8F8F5] to-white border border-[#00C896]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Trust, Compliance &<br />Interoperability</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                ForgeByte ensures secure, interoperable, and enterprise-ready technology ecosystems.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">✓</span>
                  <span>Data security and compliance readiness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">✓</span>
                  <span>API-first integrations and governance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Intelligent ISV Section */}
      <section
        ref={setSectionRef(2)}
        data-section="2"
        className={getSectionClasses(2, "py-10 bg-gradient-to-br from-gray-50 to-white")}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ISV and hi-tech innovation powered by AI-driven intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital ISV and hi-tech technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI & Intelligent Product Development */}
            {/* AI & Intelligent Product Development */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                  <i className="ri-brain-line text-xl text-[#00C896]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">AI & Intelligent Product Development</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>AI-driven product intelligence and feature optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Agentic automation for development and QA tasks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Enhanced user experience and product differentiation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Data-driven insights for smarter product decisions</span>
                </li>
              </ul>
            </div>

            {/* Automation & Workflow Optimization */}
            {/* Automation & Workflow Optimization */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                  <i className="ri-git-branch-line text-xl text-[#00C896]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Automation & Workflow Optimization</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>CI/CD pipeline automation and DevOps orchestration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Reduced development cycle time and operational costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>QA automation for faster release cycles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Streamlined end-to-end engineering workflows</span>
                </li>
              </ul>
            </div>

            {/* System Modernization & Integration */}
            {/* System Modernization & Integration */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                  <i className="ri-cloud-line text-xl text-[#00C896]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">System Modernization & Integration</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Cloud-native and scalable SaaS architectures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Multi-tenant and enterprise-grade product integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Flexible engagement models for high growth tech teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Seamless data flow across development, testing, and production</span>
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
                  <span>Cloud-native engineering platforms and architectures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Strong data governance and compliance frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Continuous monitoring, risk management, and scalability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>High availability and enterprise-grade reliability</span>
                </li>
              </ul>
            </div>

            {/* Future-Ready Product Engineering */}
            {/* Future-Ready Product Engineering */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                  <i className="ri-bar-chart-box-line text-xl text-[#00C896]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Future-Ready Product Engineering</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>AI-driven acceleration of product development and innovation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Faster, more reliable release cycles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Scalable and flexible architectures for rapid growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Ready for continuous innovation and competitive differentiation</span>
                </li>
              </ul>
            </div>

            {/* Market-Observed Outcomes */}
            {/* Market-Observed Outcomes */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg flex-shrink-0">
                  <i className="ri-line-chart-line text-xl text-[#00C896]"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Market-Observed Outcomes in Software Product Engineering</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Up to 45% automation of development tasks using AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>30–50% reduction in time-to-market for software products</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Nearly 40% increase in product innovation velocity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future of ISV */}
      <section
        ref={setSectionRef(3)}
        data-section="3"
        className={getSectionClasses(3, "py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800")}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Engineering the Future of ISV & Tech
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            ForgeByte delivers end-to-end AI/ML, Application Development, Software Testing, Data, Cloud, and ERP services, enabling ISVs and hi-tech companies to accelerate innovation, ensure platform security and compliance, drive data-led decisions, and deliver scalable, market-ready digital products.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <i className="ri-rocket-line text-5xl text-[#00C896] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Smart Engineering</h3>
              <p className="text-gray-300">Scalable AI-driven and custom ISV product application development services</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <i className="ri-server-line text-5xl text-[#00C896] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Data Excellence</h3>
              <p className="text-gray-300">Secure data modernization, analytics, and product intelligence for platforms</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <i className="ri-shield-check-line text-5xl text-[#00C896] mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-2">Operational Integrity</h3>
              <p className="text-gray-300">Platform integration with rigorous quality, security, and compliance assurance</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-[#00C896] text-white font-semibold rounded-lg hover:bg-[#00B386] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
              Schedule Consultation
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Download ISV Brief
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

export default ISVHiTechPage;
