import React from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { FadeIn } from '../../components/animations/FadeIn';
import helpHero from '../../assets/bg/download (3).jpg';
import { 
  Wrench, 
  Play, 
  TrendingUp, 
  Rocket, 
  Clock, 
  Users, 
  Brain, 
  Layers, 
  Search, 
  ListChecks, 
  PenTool, 
  Hammer, 
  ArrowRight 
} from 'lucide-react';

const HowWeHelpPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-bg-primary text-text-primary flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-48 pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={helpHero}
              alt="How We Help"
              className="w-full h-full object-cover opacity-20 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/40 via-bg-primary/80 to-bg-primary"></div>
          </div>

          <div className="container-xl mx-auto relative z-10 text-center">
            <FadeIn direction="up">
              <h1 className="text-display-xl md:text-display-2xl font-display font-bold text-white mb-8 tracking-tighter leading-none">
                Engineering <span className="gradient-text">Value.</span>
              </h1>
              <p className="text-2xl text-text-muted max-w-3xl mx-auto font-medium leading-relaxed">
                A structured, transparent approach to delivering AI-driven excellence and digital transformation for the modern enterprise.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Section 1: Capabilities */}
        <section className="py-24 bg-bg-primary border-y border-white/5">
          <div className="container-xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Left — What We Do */}
              <div className="lg:col-span-7">
                <FadeIn direction="right">
                  <h2 className="text-4xl font-display font-bold text-white mb-12 tracking-tight">Our Core Capabilities</h2>
                  <div className="space-y-12">
                    {[
                      {
                        title: 'Build',
                        icon: <Wrench className="w-6 h-6 text-primary-500" />,
                        items: ['App Development', 'UI / UX', 'Integration', 'Data Engineering', 'AI / ML'],
                        desc: 'Developing high-performance digital products from the ground up.'
                      },
                      {
                        title: 'Run',
                        icon: <Play className="w-6 h-6 text-primary-500" />,
                        items: ['Testing', 'QA Automation', 'Cloud Operations', 'Monitoring', 'Process Automation'],
                        desc: 'Ensuring seamless operations and uncompromising quality.'
                      },
                      {
                        title: 'Scale',
                        icon: <TrendingUp className="w-6 h-6 text-primary-500" />,
                        items: ['Cloud Migration', 'BI & Analytics', 'AI Automation', 'Modernization', 'Architecture Advisory'],
                        desc: 'Expanding your reach through intelligent optimization.'
                      },
                    ].map((section) => (
                      <div key={section.title} className="group">
                        <div className="flex items-start gap-6">
                          <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center border border-white/10 group-hover:border-primary-500/30 transition-all">
                            {section.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-widest text-sm font-mono opacity-60">
                              {section.title}
                            </h3>
                            <p className="text-text-muted mb-4 font-medium">{section.desc}</p>
                            <div className="flex flex-wrap gap-2">
                              {section.items.map((item) => (
                                <span
                                  key={item}
                                  className="px-4 py-2 text-sm font-medium text-text-muted glass rounded-full border-white/5 hover:border-primary-500/30 hover:text-white transition-all cursor-default"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>

              {/* Right — Engagement Models */}
              <div className="lg:col-span-5">
                <FadeIn direction="left">
                  <div className="bg-gradient-to-br from-primary-900/20 to-accent-900/20 rounded-[2.5rem] p-10 border border-white/10 relative overflow-hidden">
                    <h2 className="text-3xl font-display font-bold text-white mb-8">Engagement Models</h2>
                    <div className="space-y-6">
                      {[
                        {
                          title: 'PoC / MVP',
                          desc: 'Rapid prototyping (2–6 weeks) to validate business value and feasibility.',
                          icon: <Rocket className="w-5 h-5 text-primary-400" />,
                        },
                        {
                          title: 'Fixed Price / T&M',
                          desc: 'Flexible delivery for fixed scope or ongoing development.',
                          icon: <Clock className="w-5 h-5 text-primary-400" />,
                        },
                        {
                          title: 'Staff Augmentation',
                          desc: 'Instant access to specialized AI, data, and app engineers.',
                          icon: <Users className="w-5 h-5 text-primary-400" />,
                        },
                      ].map((model) => (
                        <div
                          key={model.title}
                          className="glass p-6 rounded-2xl border-white/5 hover:border-white/10 transition-all group"
                        >
                          <div className="flex items-center gap-4 mb-3">
                            <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary-500/20 transition-colors">
                              {model.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white">
                              {model.title}
                            </h3>
                          </div>
                          <p className="text-text-muted leading-relaxed font-medium">
                            {model.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Why Codebytesol */}
        <section className="py-24 bg-bg-primary relative overflow-hidden">
          <div className="container-xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left — Why Codebytesol */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <FadeIn direction="right">
                  <div className="bg-gradient-to-br from-accent-900/20 to-primary-900/20 rounded-[2.5rem] p-10 border border-white/10">
                    <h2 className="text-4xl font-display font-bold text-white mb-8 tracking-tight">
                      Why Codebytesol
                    </h2>
                    
                    <div className="grid grid-cols-1 gap-4 mb-10">
                      {[
                        { icon: <Brain className="w-5 h-5 text-primary-400" />, label: 'AI-First Engineering' },
                        { icon: <Layers className="w-5 h-5 text-primary-400" />, label: 'Structured Delivery' },
                        { icon: <Rocket className="w-5 h-5 text-primary-400" />, label: 'Faster Deployment' },
                        { icon: <Users className="w-5 h-5 text-primary-400" />, label: 'Long-Term Partnership' },
                      ].map((pillar) => (
                        <div key={pillar.label} className="flex items-center gap-4 glass p-4 rounded-xl border-white/5">
                          {pillar.icon}
                          <span className="text-white font-bold tracking-tight">
                            {pillar.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                      {[
                        { num: '23+', label: 'AI Engineers' },
                        { num: '50+', label: 'Data Engineers' },
                        { num: '50+', label: 'Projects Delivered' },
                        { num: '9+', label: 'Industries' },
                      ].map((metric) => (
                        <div key={metric.label}>
                          <div className="text-3xl font-display font-bold text-white mb-1">
                            {metric.num}
                          </div>
                          <div className="text-xs font-mono text-text-faint uppercase tracking-widest">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Right — How We Engage */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <FadeIn direction="left">
                  <div className="mb-12">
                    <h2 className="text-4xl font-display font-bold text-white mb-4 tracking-tight">
                      How We Engage
                    </h2>
                    <p className="text-xl text-text-muted max-w-2xl font-medium">
                      A structured, transparent approach to delivering value from day one.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        title: 'Identify',
                        icon: <Search className="w-6 h-6" />,
                        desc: 'Analyze workflows, pain points, and manual processes',
                      },
                      {
                        title: 'Assess',
                        icon: <ListChecks className="w-6 h-6" />,
                        desc: 'Evaluate data readiness, integration, and ROI potential',
                      },
                      {
                        title: 'Define',
                        icon: <PenTool className="w-6 h-6" />,
                        desc: 'Select high-value Engineering, Automation or AI opportunity',
                      },
                      {
                        title: 'Build',
                        icon: <Hammer className="w-6 h-6" />,
                        desc: 'Develop production-grade, scalable architecture',
                      },
                      {
                        title: 'Deploy',
                        icon: <Rocket className="w-6 h-6" />,
                        desc: 'Deploy securely and optimize continuously',
                      },
                    ].map((step, idx) => (
                      <div
                        key={step.title}
                        className="flex items-center gap-6 glass p-6 rounded-2xl border-white/5 relative group"
                      >
                        <div className="absolute left-12 top-full h-4 w-px bg-white/10 last:hidden" />
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-500 group-hover:bg-primary-500/10 transition-colors">
                          {step.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-xs font-mono text-primary-500 font-bold">0{idx + 1}</span>
                            <h3 className="text-xl font-bold text-white tracking-tight">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-text-muted font-medium">
                            {step.desc}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 ml-auto text-text-faint opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowWeHelpPage;
