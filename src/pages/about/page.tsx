import { useEffect, useRef } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function AboutPage() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
  }, []);

  const setSectionRef = (index: number) => (el: HTMLElement | null) => {
    sectionsRef.current[index] = el;
  };

  const getSectionClasses = (baseClasses = '') => {
    return baseClasses;
  };

  const cultureValues = [
    { icon: 'ri-team-line', text: 'Collaboration over hierarchy' },
    { icon: 'ri-lightbulb-line', text: 'Curiosity as a way of life' },
    { icon: 'ri-user-heart-line', text: 'Technology that uplifts people' },
    { icon: 'ri-refresh-line', text: 'A workforce that adapts and evolves' },
    { icon: 'ri-rocket-line', text: 'Breaking limits through teamwork' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        ref={setSectionRef(0)}
        data-section="0"
        className={getSectionClasses("relative pt-32 pb-10 overflow-hidden")}
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/about-hero-workspace-v2-890--52aa1d366ec3.png"
            alt="About Forgebyte"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-[#00C896] to-[#00D9FF] bg-clip-text text-transparent">Forgebyte</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Where innovation meets intelligence. Engineering the future of AI-driven digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-10 pb-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main About Content */}
          <div
            ref={setSectionRef(1)}
            data-section="1"
            className={getSectionClasses("mb-20")}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Who We <span className="bg-gradient-to-r from-[#00C896] to-[#00D9FF] bg-clip-text text-transparent">Are</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Forgebyte stands at the intersection of AI, automation, and digital evolution, empowering organizations to transform with precision, clarity, and next-generation technology. We are not just adapting to the future — we are engineering it.
              </p>
              <p>
                We believe that true innovation happens when AI works with humans, not around them. Our Human-in-the-Loop philosophy ensures that every automated decision is guided, validated, and refined by real expertise—creating AI that thinks fast but behaves responsibly.
              </p>
              <p>
                We operate as an ecosystem of innovators — engineers, strategists, analysts, and creators — united by a mission to build intelligent, scalable, and self-evolving digital environments. Our teams push boundaries, challenge conventions, and reimagine what technology can achieve for businesses of tomorrow.
              </p>
              <p>
                Founded in 2013 as an IT consulting firm, Formerly TestPerform - Forgebyte expanded into software testing and custom development, steadily strengthening our data engineering and analytics capabilities. By 2022, we evolved into an AI-driven organization, establishing our AI Center of Excellence to build responsible, secure, and human-aligned intelligent systems.
              </p>
            </div>
          </div>

          {/* Vision & Mission */}
          <div
            ref={setSectionRef(2)}
            data-section="2"
            className={getSectionClasses("grid md:grid-cols-2 gap-8 mb-20")}
          >
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#00C896] to-[#00D9FF] rounded-2xl mb-6">
                <i className="ri-eye-line text-3xl text-white"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To create a future where innovation and intelligence seamlessly converge, empowering organizations of all sizes to operate smarter, faster, and with limitless potential.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#00D9FF] to-[#00C896] rounded-2xl mb-6">
                <i className="ri-compass-line text-3xl text-white"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To transform businesses through Technology. To engineer intelligent, future-ready solutions powered by AI and emerging technologies, ensuring both our clients and Forgebyte grow, evolve, and advance together in an ever-changing digital world.
              </p>
            </div>
          </div>

          {/* Culture Section */}
          <div
            ref={setSectionRef(3)}
            data-section="3"
            className={getSectionClasses("bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white")}
          >
            <h3 className="text-4xl font-bold mb-6 text-center">Our Culture</h3>
            <p className="text-xl text-gray-300 mb-10 text-center max-w-3xl mx-auto">
              Forgebyte is powered by people who dream boldly, think differently, and execute fearlessly.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {cultureValues.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#00C896] to-[#00D9FF] rounded-full mx-auto mb-4">
                    <i className={`${value.icon} text-2xl text-white`}></i>
                  </div>
                  <p className="text-sm font-medium">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
