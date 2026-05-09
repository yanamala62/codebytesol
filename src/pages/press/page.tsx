import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { FadeIn } from '../../components/animations/FadeIn';
import pressHero from '../../assets/bg/download (1).jpg';
import { Newspaper, Rocket, Award, Mail, Phone, MapPin, Download } from 'lucide-react';

export default function PressPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={pressHero}
            alt="Press Contact"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/40 via-bg-primary/80 to-bg-primary"></div>
        </div>

        <div className="container-xl mx-auto relative z-10 text-center">
          <FadeIn direction="up">
            <h1 className="text-display-xl md:text-display-2xl font-display font-bold text-white mb-8 tracking-tighter leading-none">
              Press <span className="gradient-text">Contact</span>
            </h1>
            <p className="text-2xl text-text-muted max-w-3xl mx-auto font-medium leading-relaxed">
              For media inquiries, press releases, and partnership opportunities with Codebytesol
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-bg-primary">
        <div className="container-xl mx-auto px-6">
          {/* Latest Press Releases */}
          <div className="mb-24 space-y-12">
            <h2 className="text-4xl font-display font-bold text-white mb-12 text-center tracking-tight">Latest Press Releases</h2>

            {/* Press Release 1 - Rebranding */}
            <FadeIn direction="up">
              <div className="glass rounded-3xl p-10 border-white/5 relative overflow-hidden group">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex-shrink-0">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                      Codebytesol Unveils Its New Identity: A Complete Revamp & Rebrand
                    </h3>
                    <p className="text-sm font-mono text-text-faint uppercase tracking-widest mb-6">Press Release</p>
                    <div className="space-y-4 text-text-muted leading-relaxed text-lg">
                      <p>
                        We are excited to announce our transformation from Test Perform Technologies to Codebytesol—a brand built for the future of intelligent engineering.
                      </p>
                      <p>
                        This rebranding reflects our evolution from a specialized testing company into a full-scale digital innovation partner, delivering AI-driven solutions, data engineering, automation, cloud modernization, and trustworthy intelligent systems.
                      </p>
                      <p>
                        Codebytesol represents our commitment to innovation, trust engineering, and continuous evolution, ensuring we stay ahead of the technology curve while empowering our clients to do the same.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Press Release 2 - Great Place to Work */}
            <FadeIn direction="up" delay={0.2}>
              <div className="glass rounded-3xl p-10 border-white/5 relative overflow-hidden group">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-accent-500 to-primary-500 rounded-2xl flex-shrink-0">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                      Codebytesol Recognized as a Great Place to Work®
                    </h3>
                    <p className="text-sm font-mono text-text-faint uppercase tracking-widest mb-6">Press Release</p>
                    <div className="space-y-4 text-text-muted leading-relaxed text-lg">
                      <p>
                        We are proud to share that Codebytesol has been officially certified as a Great Place to Work®.
                      </p>
                      <p>
                        This recognition highlights our commitment to building a culture driven by trust, collaboration, diversity of thought, and people-first values. At Codebytesol, we believe innovation thrives where people feel valued, supported, and inspired.
                      </p>
                      <p>
                        This certification is a testament to our team's passion, our leadership's vision, and the environment we collectively cultivate—one where learning, growth, and excellence are part of everyday life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-24">
            {/* Media Inquiries */}
            <FadeIn direction="right">
              <div className="glass rounded-3xl p-10 border-white/5 h-full">
                <div className="w-16 h-16 flex items-center justify-center bg-primary-500/10 rounded-2xl mb-8 border border-primary-500/20">
                  <Newspaper className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Media Inquiries</h3>
                <p className="text-text-muted text-lg mb-8 leading-relaxed">
                  For press releases, interviews, and media coverage regarding our AI initiatives.
                </p>
                <div className="space-y-4">
                  <a href="mailto:Assist@codebytesol.ai" className="flex items-center gap-4 text-text-muted hover:text-primary-400 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary-500/10">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-medium">Assist@codebytesol.ai</span>
                  </a>
                  <a href="tel:+19522001318" className="flex items-center gap-4 text-text-muted hover:text-primary-400 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary-500/10">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-medium">+1 (952) 200-1318</span>
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Partnership Opportunities */}
            <FadeIn direction="left">
              <div className="glass rounded-3xl p-10 border-white/5 h-full">
                <div className="w-16 h-16 flex items-center justify-center bg-accent-500/10 rounded-2xl mb-8 border border-accent-500/20">
                  <Rocket className="w-8 h-8 text-accent-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Partnerships</h3>
                <p className="text-text-muted text-lg mb-8 leading-relaxed">
                  Explore collaboration and strategic partnership opportunities globally.
                </p>
                <div className="space-y-4">
                  <a href="mailto:Assist@codebytesol.ai" className="flex items-center gap-4 text-text-muted hover:text-primary-400 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary-500/10">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-medium">Assist@codebytesol.ai</span>
                  </a>
                  <a href="tel:+19522001318" className="flex items-center gap-4 text-text-muted hover:text-primary-400 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary-500/10">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-medium">+1 (952) 200-1318</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Press Kit */}
          <FadeIn direction="up">
            <div className="bg-gradient-to-br from-bg-primary to-primary-900/20 rounded-[3rem] p-12 md:p-20 text-center mb-24 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 blur-[100px] -z-10" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 blur-[100px] -z-10" />
              
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl mx-auto mb-8 shadow-glow-sm">
                <Download className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-display font-bold text-white mb-6 tracking-tight">Media Assets</h3>
              <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                Download our official press kit including high-resolution logos, brand guidelines, and executive photography.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-aurora text-white rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-glow-md"
              >
                <Download className="w-6 h-6" />
                Request Press Kit
              </a>
            </div>
          </FadeIn>

          {/* Office Locations */}
          <FadeIn direction="up">
            <div className="glass rounded-3xl p-12 border-white/5">
              <h3 className="text-3xl font-display font-bold text-white mb-12 text-center tracking-tight">Our Global Presence</h3>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center group">
                  <div className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-2xl mx-auto mb-6 group-hover:bg-primary-500/10 transition-colors">
                    <MapPin className="w-7 h-7 text-primary-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">HQ - Texas, USA</h4>
                  <p className="text-text-muted">North America Headquarters</p>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-2xl mx-auto mb-6 group-hover:bg-primary-500/10 transition-colors">
                    <MapPin className="w-7 h-7 text-primary-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Hyderabad, India</h4>
                  <p className="text-text-muted">Global Delivery Center</p>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-2xl mx-auto mb-6 group-hover:bg-primary-500/10 transition-colors">
                    <MapPin className="w-7 h-7 text-primary-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">UAE</h4>
                  <p className="text-text-muted">Middle East Operations</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
