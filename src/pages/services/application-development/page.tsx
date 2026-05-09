import { useRef } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: 'ri-smartphone-line',
    title: 'Mobile & Web Development',
    points: [
      'We build secure, scalable mobile and web applications aligned to business needs, using modern frameworks and well-structured architectures.',
      'Our development approach enables faster releases, reliable integrations, and consistent user experiences across devices and platforms.'
    ]
  },
  {
    icon: 'ri-layout-masonry-line',
    title: 'UI / UX Development',
    points: [
      'We design intuitive, accessible user experiences that simplify navigation and align digital products with real user needs.',
      'Our UI designs are tested and implemented to ensure consistency, clarity, and reliable performance across all devices.'
    ]
  },
  {
    icon: 'ri-code-s-slash-line',
    title: 'Custom Application Development',
    points: [
      'We build custom applications tailored to enterprise workflows, ensuring scalability, security, and alignment with business requirements.',
      'Our structured development approach delivers reliable systems that integrate seamlessly and support long-term operational growth.'
    ]
  },
  {
    icon: 'ri-links-line',
    title: 'Application Integration',
    points: [
      'We integrate enterprise applications and data sources to create connected systems that reduce manual effort and improve operational flow.',
      'Our integrations ensure secure, reliable data exchange, helping organizations operate with greater agility and consistency.'
    ]
  },
  {
    icon: 'ri-cloud-windy-line',
    title: 'Application Modernization & Migration',
    points: [
      'We modernize legacy applications into cloud-ready systems that improve scalability, security, and long-term maintainability.',
      'Our approach reduces technical risk and supports faster change without disrupting existing business operations.'
    ]
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Application Maintenance & Support',
    points: [
      'We provide proactive application maintenance that ensures security, reliability, and continuous performance for critical business systems.',
      'Our monitoring, updates, and automated management deliver stability, minimize downtime, and support seamless digital operations.'
    ]
  }
];

const technologies = [
  {
    category: 'Frontend',
    tools: ['React', 'Angular', 'Vue.js', 'Next.js', 'TypeScript']
  },
  {
    category: 'Backend',
    tools: ['Node.js', 'Java', '.NET', 'Python', 'Go']
  },
  {
    category: 'Mobile',
    tools: ['React Native', 'Flutter', 'Swift', 'Kotlin']
  },
  {
    category: 'Database',
    tools: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis']
  }
];

export default function ApplicationDevelopment() {
  /* const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [visibleTech, setVisibleTech] = useState<Set<number>>(new Set()); */
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const techRef = useRef<(HTMLDivElement | null)[]>([]);

  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardsRef.current[index] = el;
  };

  const setTechRef = (index: number) => (el: HTMLDivElement | null) => {
    techRef.current[index] = el;
  };

  const getCardClasses = () => {
    return 'bg-white border border-gray-200 rounded-xl p-8 hover:border-[var(--color-primary-500)] hover:shadow-lg transition-all duration-500 transform opacity-100 translate-x-0 scale-100 flex flex-col h-full';
  };

  const getTechClasses = () => {
    return 'bg-white border border-gray-200 rounded-xl p-6 transition-all duration-500 transform opacity-100 translate-x-0 scale-100';
  };

  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 min-h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/app-dev-hero-bg-002--5ad734544f4b.jpg)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <i className="ri-code-box-line text-white"></i>
              <span className="text-sm font-medium text-white">Application Development</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Build Digital Products That <span className="bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] bg-clip-text text-transparent">Scale & Perform</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              From concept to deployment, we engineer custom applications that deliver exceptional user experiences and drive business growth.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary-500)] text-white rounded-lg font-medium hover:bg-[#00B085] transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Start Your Project
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] bg-clip-text text-transparent">Development Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end application development across all platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                ref={setCardRef(index)}
                data-card={index}
                className={getCardClasses()}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[var(--color-primary-500)]/10 to-[var(--color-accent-500)]/10 rounded-lg flex-shrink-0">
                    <i className={`${service.icon} text-xl text-[var(--color-primary-500)]`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                </div>
                <ul className="text-gray-600 space-y-3 flex-grow">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-[var(--color-primary-500)] mt-1.5">•</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise Ready <span className="bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] bg-clip-text text-transparent">Application Development</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              ForgeByte follows a tool-agnostic, AI-infused development approach, powered by our proprietary FB Development Framework, enabling structured design, rapid development, secure deployment, and continuous improvement across application lifecycles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                ref={setTechRef(index)}
                data-tech={index}
                className={getTechClasses()}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {tech.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tech.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-xs font-medium border border-gray-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-accent-500)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Next Application?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's turn your vision into a powerful digital solution that drives results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-primary-500)] rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            Get Started Today
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
