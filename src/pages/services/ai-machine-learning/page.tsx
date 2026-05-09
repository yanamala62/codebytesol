import { useRef } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';

const capabilities = [
  {
    icon: 'ri-shake-hands-line',
    title: 'AI Consulting',
    points: [
      'We help organizations identify practical AI use cases aligned with business goals through structured assessments of data, processes, and readiness.',
      'We design scalable, responsible AI solutions and guide implementation to ensure measurable outcomes, governance, and long-term sustainability.'
    ]
  },
  {
    icon: 'ri-robot-2-line',
    title: 'Agentic AI',
    points: [
      'We build autonomous AI agents that understand context, automate workflows, and integrate with enterprise systems to reduce manual effort.',
      'These agents support better decisions, improve accuracy, and help teams operate more efficiently across business and technical functions.'
    ]
  },
  {
    icon: 'ri-line-chart-line',
    title: 'Predictive Modeling & Analytics',
    points: [
      'We build predictive models that convert data into reliable forecasts, supporting planning, risk assessment, and informed business decisions.',
      'Our models are validated, deployed, and continuously monitored to ensure consistent insights across sales, operations, and customer-focused teams.'
    ]
  },
  {
    icon: 'ri-settings-5-line',
    title: 'Business Process Automation (BPA)',
    points: [
      'We automate manual business processes using AI and RPA, helping teams reduce effort, errors, and operational delays.',
      'Our automated workflows integrate with enterprise systems to improve accuracy, productivity, and overall cost efficiency.'
    ]
  },
  {
    icon: 'ri-eye-line',
    title: 'Computer Vision & OCR',
    points: [
      'We build computer vision and OCR solutions that automate inspections, detect patterns, and convert visual data into usable digital information.',
      'These solutions run on cloud or edge environments, helping organizations improve accuracy, speed, and operational efficiency.'
    ]
  },
  {
    icon: 'ri-chat-3-line',
    title: 'AI Chatbots',
    points: [
      'We build intelligent AI chatbots that automate customer queries, service requests, and internal support across multiple digital channels.',
      'These chatbots connect to enterprise data and systems, providing consistent responses, faster resolution, and improved operational efficiency.'
    ]
  }
];

const aiFrameworks = [
  {
    category: 'LLM / ML',
    tools: ['OpenAI', 'Meta', 'Gemini', 'Claude', 'TensorFlow', 'PyTorch', 'ONNX']
  },
  {
    category: 'AI Agent Frameworks',
    tools: ['LangChain', 'Haystack', 'LlamaIndex', 'Langflow', 'CrewAI']
  },
  {
    category: 'Computer Vision',
    tools: ['OpenCV', 'DALL-E', 'Meta', 'SAM 2', 'Nvidia', 'Midjourney']
  },
  {
    category: 'AI Orchestration',
    tools: ['Zapier', 'Temporal', 'AirOps', 'n8n', 'HuggingFace']
  }
];

export default function AIMachineLearning() {
  //   const [isScrolled, setIsScrolled] = useState(false);

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);


  //   useEffect(() => {
  //     const handleScroll = () => {
  //       setIsScrolled(window.scrollY > 50);
  //     };
  //     window.addEventListener('scroll', handleScroll);
  //     return () => window.removeEventListener('scroll', handleScroll);
  //   }, []);



  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardsRef.current[index] = el;
  };



  const getCardClasses = () => {
    return 'bg-white border border-gray-200 rounded-xl p-8 hover:border-[var(--color-primary-500)] hover:shadow-lg transition-all duration-500 transform opacity-100 translate-x-0 scale-100';
  };



  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 min-h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/ai-ml-hero-bg-002--ba63f6e52795.png)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <i className="ri-brain-line text-white"></i>
              <span className="text-sm font-medium text-white">AI & Machine Learning</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Build Intelligent Systems That <span className="bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] bg-clip-text text-transparent">Learn & Adapt</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Transform your business with AI-powered solutions that automate processes, uncover insights, and drive intelligent decision-making at scale.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-primary-500)] text-white rounded-lg font-medium hover:bg-[#00B085] transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Start Your AI Journey
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-8 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] bg-clip-text text-transparent">AI Capabilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive machine learning solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                ref={setCardRef(index)}
                data-card={index}
                className={getCardClasses()}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[var(--color-primary-500)]/10 to-[var(--color-accent-500)]/10 rounded-lg flex-shrink-0">
                    <i className={`${capability.icon} text-xl text-[var(--color-primary-500)]`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {capability.title}
                  </h3>
                </div>
                <ul className="text-gray-600 space-y-3">
                  {capability.points.map((point, idx) => (
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

      {/* Enterprise Ready AI ML Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Enterprise Ready <span className="bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] bg-clip-text text-transparent">AI ML</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              ForgeByte follows a tool-agnostic approach, powered by our proprietary FB AI/ML Framework, to accelerate AI adoption and streamline end-to-end AI/ML processes that align with business goals, governance, and measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiFrameworks.map((framework, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:border-[var(--color-primary-500)] hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
                  {framework.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {framework.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-100"
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
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how machine learning can transform your business operations and drive growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--color-primary-500)] rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            Schedule a Consultation
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
