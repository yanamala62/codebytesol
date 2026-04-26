import { useEffect, useRef } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function PressPage() {
    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

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
      <Header />

      {/* Hero Section */}
      <section
        ref={setSectionRef(0)}
        data-section="0"
        className={getSectionClasses(0, "relative pt-32 pb-20 overflow-hidden")}
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/press-hero-v5-293--976e4c1f016c.jpg"
            alt="Press Contact"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Press <span className="bg-gradient-to-r from-[#00C896] to-[#00D9FF] bg-clip-text text-transparent">Contact</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              For media inquiries, press releases, and partnership opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          {/* Latest Press Releases */}
          <div className="mb-16 space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest Press Releases</h3>

            {/* Press Release 1 - Rebranding */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#00C896] to-[#00D9FF] rounded-2xl flex-shrink-0">
                  <i className="ri-rocket-line text-3xl text-white"></i>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    Forgebyte Unveils Its New Identity: A Complete Revamp & Rebrand
                  </h4>
                  <p className="text-sm text-gray-500">Press Release</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We are excited to announce our transformation from Test Perform Technologies to Forgebyte—a brand built for the future of intelligent engineering.
                </p>
                <p>
                  This rebranding reflects our evolution from a specialized testing company into a full-scale digital innovation partner, delivering AI-driven solutions, data engineering, automation, cloud modernization, and trustworthy intelligent systems.
                </p>
                <p>
                  Forgebyte represents our commitment to innovation, trust engineering, and continuous evolution, ensuring we stay ahead of the technology curve while empowering our clients to do the same.
                </p>
              </div>
            </div>

            {/* Press Release 2 - Great Place to Work */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#00D9FF] to-[#00C896] rounded-2xl flex-shrink-0">
                  <i className="ri-award-line text-3xl text-white"></i>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    Forgebyte Recognized as a Great Place to Work®
                  </h4>
                  <p className="text-sm text-gray-500">Press Release</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We are proud to share that Forgebyte has been officially certified as a Great Place to Work®.
                </p>
                <p>
                  This recognition highlights our commitment to building a culture driven by trust, collaboration, diversity of thought, and people-first values. At Forgebyte, we believe innovation thrives where people feel valued, supported, and inspired.
                </p>
                <p>
                  This certification is a testament to our team's passion, our leadership's vision, and the environment we collectively cultivate—one where learning, growth, and excellence are part of everyday life.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Media Inquiries */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#00C896] to-[#00D9FF] rounded-2xl mb-6">
                <i className="ri-newspaper-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Media Inquiries</h3>
              <p className="text-gray-600 mb-6">
                For press releases, interviews, and media coverage
              </p>
              <div className="space-y-3">
                <a href="mailto:info@forgebyte.ai" className="flex items-center gap-3 text-gray-700 hover:text-[#00C896] transition-colors cursor-pointer">
                  <i className="ri-mail-line text-xl"></i>
                  info@forgebyte.ai
                </a>
                <a href="tel:+18121010266" className="flex items-center gap-3 text-gray-700 hover:text-[#00C896] transition-colors cursor-pointer">
                  <i className="ri-phone-line text-xl"></i>
                  +1 (812) 101-0266
                </a>
              </div>
            </div>

            {/* Partnership Opportunities */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#00D9FF] to-[#00C896] rounded-2xl mb-6">
                <i className="ri-team-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnerships</h3>
              <p className="text-gray-600 mb-6">
                Explore collaboration and strategic partnership opportunities
              </p>
              <div className="space-y-3">
                <a href="mailto:info@forgebyte.ai" className="flex items-center gap-3 text-gray-700 hover:text-[#00C896] transition-colors cursor-pointer">
                  <i className="ri-mail-line text-xl"></i>
                  info@forgebyte.ai
                </a>
                <a href="tel:+18121010266" className="flex items-center gap-3 text-gray-700 hover:text-[#00C896] transition-colors cursor-pointer">
                  <i className="ri-phone-line text-xl"></i>
                  +1 (812) 101-0266
                </a>
              </div>
            </div>
          </div>

          {/* Press Kit */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white text-center mb-12">
            <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-[#00C896] to-[#00D9FF] rounded-full mx-auto mb-6">
              <i className="ri-folder-download-line text-4xl"></i>
            </div>
            <h3 className="text-3xl font-bold mb-4">Press Kit</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Download our official press kit including logos, brand guidelines, executive photos, and company information
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-download-line text-xl"></i>
              Request Press Kit
            </a>
          </div>

          {/* Office Locations */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Locations</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-[#00C896]/10 rounded-full mx-auto mb-3">
                  <i className="ri-map-pin-line text-2xl text-[#00C896]"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">HQ - Texas, USA</h4>
                <p className="text-sm text-gray-600">North America Headquarters</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-[#00C896]/10 rounded-full mx-auto mb-3">
                  <i className="ri-map-pin-line text-2xl text-[#00C896]"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Hyderabad, India</h4>
                <p className="text-sm text-gray-600">Development Center</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-[#00C896]/10 rounded-full mx-auto mb-3">
                  <i className="ri-map-pin-line text-2xl text-[#00C896]"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">UAE</h4>
                <p className="text-sm text-gray-600">Middle East Operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        ref={setSectionRef(2)}
        data-section="2"
        className={getSectionClasses(2)}
      >
        <Footer />
      </div>
    </div>
  );
}
