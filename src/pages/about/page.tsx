import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { FadeIn, StaggerChildren } from '../../components/animations/FadeIn';
import aboutHero from '../../assets/bg/download.jpg';

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
      <section className="relative pt-48 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutHero}
            alt="About Codebytesol"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/40 via-bg-primary/80 to-bg-primary"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h1 className="text-display-xl md:text-display-2xl font-display font-bold text-white mb-8 tracking-tighter leading-[0.9]">
              About <span className="gradient-text">Codebytesol</span>
            </h1>
            <p className="text-2xl text-text-muted max-w-3xl mx-auto font-medium leading-relaxed">
              Where innovation meets intelligence. Engineering the future of AI-driven digital transformation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-32">
            <FadeIn direction="up">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-12 text-center tracking-tighter">
                Who We <span className="gradient-text">Are</span>
              </h2>
              <div className="max-w-4xl mx-auto space-y-8 text-xl text-text-muted leading-relaxed font-medium">
                <p>
                  Codebytesol stands at the intersection of AI, automation, and digital evolution, empowering organizations to transform with precision, clarity, and next-generation technology. We are not just adapting to the future — we are engineering it.
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
              <div className="glass p-12 h-full border-white/5 hover:border-primary-500/30 transition-all">
                <div className="w-16 h-16 flex items-center justify-center bg-primary-500/10 rounded-2xl mb-8 border border-primary-500/20">
                  <i className="ri-eye-line text-3xl text-primary-500"></i>
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-6 tracking-tight">Our Vision</h3>
                <p className="text-lg text-text-muted leading-relaxed font-medium">
                  To create a future where innovation and intelligence seamlessly converge, empowering organizations of all sizes to operate smarter, faster, and with limitless potential.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <div className="glass p-12 h-full border-white/5 hover:border-primary-500/30 transition-all">
                <div className="w-16 h-16 flex items-center justify-center bg-primary-500/10 rounded-2xl mb-8 border border-primary-500/20">
                  <i className="ri-compass-line text-3xl text-primary-500"></i>
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-6 tracking-tight">Our Mission</h3>
                <p className="text-lg text-text-muted leading-relaxed font-medium">
                  To transform businesses through technology. To engineer intelligent, future-ready solutions powered by AI and emerging technologies, ensuring both our clients and Codebytesol grow, evolve, and advance together.
                </p>
              </div>
            </FadeIn>
          </StaggerChildren>

          {/* Culture Section */}
          <FadeIn direction="up">
            <div className="glass bg-bg-secondary/50 p-16 border-white/5 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-500/5 blur-[120px] rounded-full translate-x-1/2" />
              
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 text-center tracking-tighter">Our Culture</h3>
              <p className="text-xl text-text-muted mb-16 text-center max-w-3xl mx-auto font-medium leading-relaxed">
                Codebytesol is powered by people who dream boldly, think differently, and execute fearlessly.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                {cultureValues.map((value, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 flex items-center justify-center glass rounded-full mx-auto mb-6 border border-white/10 group-hover:border-primary-500/30 transition-all">
                      <i className={`${value.icon} text-3xl text-primary-500 group-hover:scale-110 transition-transform`}></i>
                    </div>
                    <p className="text-sm font-bold text-text-muted group-hover:text-white transition-colors uppercase tracking-widest leading-tight">{value.text}</p>
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
