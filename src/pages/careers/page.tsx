import { useEffect, useRef } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function CareersPage() {
    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
  }, []);

  const setSectionRef = (index: number) => (el: HTMLDivElement | null) => {
    sectionsRef.current[index] = el;
  };

  const getSectionClasses = (_index: number, baseClasses = '') => {
    return baseClasses;
  };

  const careerOpenings = [
    {
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Hyderabad, India / Remote',
      type: 'Full-time',
      description: 'Build cutting-edge AI solutions using GPT, Azure ML, and advanced deep learning frameworks.'
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud Engineering',
      location: 'Texas, USA / Hybrid',
      type: 'Full-time',
      description: 'Design and implement scalable cloud architectures on AWS, Azure, and GCP platforms.'
    },
    {
      title: 'Data Analytics Consultant',
      department: 'Data Services',
      location: 'UAE / Remote',
      type: 'Full-time',
      description: 'Transform complex data into actionable insights using advanced analytics and visualization tools.'
    },
    {
      title: 'QA Automation Engineer',
      department: 'Software Testing & QA',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description: 'Develop automated testing frameworks and ensure quality across enterprise applications.'
    },
    {
      title: 'Full Stack Developer',
      department: 'Application Development',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create modern web applications using React, Node.js, and cloud-native technologies.'
    },
    {
      title: 'Product Manager - AI Solutions',
      department: 'Product Management',
      location: 'Texas, USA',
      type: 'Full-time',
      description: 'Drive product strategy and roadmap for AI-powered enterprise solutions.'
    }
  ];

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
            src="/images/careers-hero-v4-192--cfd505a7639b.jpg"
            alt="Careers at Forgebyte"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-[#00C896] to-[#00D9FF] bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of AI and digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Why Join Forgebyte */}
          <div className="bg-gradient-to-br from-[#00C896] to-[#00D9FF] rounded-3xl p-12 mb-16 text-white">
            <h3 className="text-3xl font-bold mb-8 text-center">Why Join Forgebyte?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4">
                  <i className="ri-rocket-line text-3xl"></i>
                </div>
                <h4 className="text-xl font-bold mb-2">Innovation First</h4>
                <p className="text-white/90">Work on cutting-edge AI and cloud technologies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4">
                  <i className="ri-team-line text-3xl"></i>
                </div>
                <h4 className="text-xl font-bold mb-2">Collaborative Culture</h4>
                <p className="text-white/90">Join a diverse team of passionate innovators</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mx-auto mb-4">
                  <i className="ri-line-chart-line text-3xl"></i>
                </div>
                <h4 className="text-xl font-bold mb-2">Growth Opportunities</h4>
                <p className="text-white/90">Continuous learning and career advancement</p>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Open <span className="bg-gradient-to-r from-[#00C896] to-[#00D9FF] bg-clip-text text-transparent">Positions</span>
            </h2>
            <div className="space-y-6">
              {careerOpenings.map((job, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-3">
                        <span className="flex items-center gap-1 text-gray-600">
                          <i className="ri-building-line"></i>
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1 text-gray-600">
                          <i className="ri-map-pin-line"></i>
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1 text-gray-600">
                          <i className="ri-time-line"></i>
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <a
                      href={`mailto:careers@forgebyte.ai?subject=Application for ${job.title}`}
                      className="px-6 py-3 bg-gradient-to-r from-[#00C896] to-[#00D9FF] text-white rounded-lg font-semibold hover:shadow-lg transition-all whitespace-nowrap cursor-pointer inline-block"
                    >
                      Apply Now
                    </a>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* General Application CTA */}
          <div className="text-center bg-gray-50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Don't See Your Role?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let's explore opportunities together.
            </p>
            <a
              href="mailto:careers@forgebyte.ai?subject=General Application"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00C896] to-[#00D9FF] text-white rounded-lg font-semibold hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
            >
              <i className="ri-mail-line text-xl"></i>
              Send General Application
            </a>
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
