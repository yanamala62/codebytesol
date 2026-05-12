import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { FadeIn, StaggerChildren } from '../../components/animations/FadeIn';

export default function AboutPage() {
  const cultureValues = [
    { icon: 'ri-team-line', text: 'Collaboration over hierarchy' },
    { icon: 'ri-lightbulb-line', text: 'Curiosity as a way of life' },
    { icon: 'ri-user-heart-line', text: 'Technology that uplifts people' },
    { icon: 'ri-refresh-line', text: 'A workforce that adapts and evolves' },
    { icon: 'ri-rocket-line', text: 'Breaking limits through teamwork' }
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-gray-900 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/source_images/company/com_about.png" 
            alt="About Background" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <FadeIn direction="up">
            <h1 className="text-6xl md:text-[100px] font-black text-white mb-10 leading-[0.9] tracking-tighter uppercase italic">
              About <br />
              <span className="text-primary-500">CodeByteSol</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 max-w-3xl leading-relaxed font-medium drop-shadow-md">
              Where innovation meets intelligence. Engineering the future of AI-driven digital transformation with precision and discipline.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-32">
            <FadeIn direction="up">
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-12 text-center tracking-tight">
                Who We <span className="text-primary-500">Are</span>
              </h2>
              <div className="max-w-4xl mx-auto space-y-8 text-lg md:text-xl text-text-muted leading-relaxed font-medium">
                <p>
                  CodeByteSol stands at the intersection of AI, automation, and digital evolution, empowering organizations to transform with precision, clarity, and next-generation technology. We are not just adapting to the future — we are engineering it.
                </p>
                <p>
                  We believe that true innovation happens when AI works with humans, not around them. Our Human-in-the-Loop philosophy ensures that every automated decision is guided, validated, and refined by real expertise—creating AI that thinks fast but behaves responsibly.
                </p>
                <p>
                  We operate as an ecosystem of innovators — engineers, strategists, analysts, and creators — united by a mission to build intelligent, scalable, and self-evolving digital environments. Our teams push boundaries, challenge conventions, and reimagine what technology can achieve for businesses of tomorrow.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Vision & Mission */}
          <StaggerChildren className="grid md:grid-cols-2 gap-8 mb-32">
            <FadeIn direction="up">
              <div className="bg-gray-50 p-12 h-full border border-border rounded-3xl hover:border-primary-500 hover:bg-white hover:shadow-soft transition-all duration-300">
                <div className="w-16 h-16 flex items-center justify-center bg-primary-50 rounded-2xl mb-8 border border-primary-100">
                  <i className="ri-eye-line text-3xl text-primary-500"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 tracking-tight">Our Vision</h3>
                <p className="text-lg text-text-muted leading-relaxed font-medium">
                  To create a future where innovation and intelligence seamlessly converge, empowering organizations of all sizes to operate smarter, faster, and with limitless potential.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <div className="bg-gray-50 p-12 h-full border border-border rounded-3xl hover:border-primary-500 hover:bg-white hover:shadow-soft transition-all duration-300">
                <div className="w-16 h-16 flex items-center justify-center bg-primary-50 rounded-2xl mb-8 border border-primary-100">
                  <i className="ri-compass-line text-3xl text-primary-500"></i>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 tracking-tight">Our Mission</h3>
                <p className="text-lg text-text-muted leading-relaxed font-medium">
                  To transform businesses through technology. To engineer intelligent, future-ready solutions powered by AI and emerging technologies, ensuring both our clients and CodeByteSol grow, evolve, and advance together.
                </p>
              </div>
            </FadeIn>
          </StaggerChildren>

          {/* Culture Section */}
          <FadeIn direction="up">
            <div className="bg-gray-50 p-16 border border-border rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-50/50 blur-[120px] rounded-full translate-x-1/2" />
              
              <h3 className="text-3xl md:text-5xl font-bold text-text-primary mb-8 text-center tracking-tight">Our Culture</h3>
              <p className="text-lg text-text-muted mb-16 text-center max-w-3xl mx-auto font-medium leading-relaxed">
                CodeByteSol is powered by people who dream boldly, think differently, and execute fearlessly.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {cultureValues.map((value, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full mx-auto mb-6 border border-border group-hover:border-primary-500 group-hover:shadow-md transition-all duration-300">
                      <i className={`${value.icon} text-3xl text-primary-500 group-hover:scale-110 transition-transform`}></i>
                    </div>
                    <p className="text-xs font-bold text-text-muted group-hover:text-text-primary transition-colors uppercase tracking-widest leading-tight">{value.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
