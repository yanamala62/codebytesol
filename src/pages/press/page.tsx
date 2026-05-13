import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { FadeIn } from '../../components/animations/FadeIn';
import { Newspaper, Rocket, Award, Mail, Phone, MapPin, Download } from 'lucide-react';
import { Button } from '../../components/primitives/Button';

export default function PressPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-gray-900 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/source_images/company/com_press.png" 
            alt="Press Background" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/60" />
        </div>

        <div className="container-xl mx-auto relative z-10">
          <FadeIn direction="up">
            <h1 className="text-6xl md:text-[120px] font-black text-white mb-10 leading-[0.85] tracking-tighter uppercase italic">
              Press <br />
              <span className="text-primary-500">Center.</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 max-w-3xl leading-relaxed font-medium drop-shadow-md">
              For media inquiries, press releases, and partnership opportunities with the leaders in intelligent engineering.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container-xl mx-auto px-6">
          {/* Latest Press Releases */}
          <div className="mb-24 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-12 text-center tracking-tight">Latest Press Releases</h2>

            {/* Press Release 1 - Rebranding */}
            <FadeIn direction="up">
              <div className="bg-gray-50 rounded-3xl p-10 border border-border relative overflow-hidden group hover:border-primary-500 hover:bg-white hover:shadow-soft transition-all duration-300">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="w-16 h-16 flex items-center justify-center bg-primary-500 text-white rounded-2xl flex-shrink-0">
                    <Rocket className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-primary-500 transition-colors tracking-tight">
                      CodeByteSol Unveils Its New Identity: A Complete Revamp & Rebrand
                    </h3>
                    <p className="text-[10px] font-bold text-text-faint uppercase tracking-widest mb-6">Press Release</p>
                    <div className="space-y-4 text-text-muted leading-relaxed text-lg font-medium">
                      <p>
                        We are excited to announce our transformation from Test Perform Technologies to CodeByteSol—a brand built for the future of intelligent engineering.
                      </p>
                      <p>
                        This rebranding reflects our evolution from a specialized testing company into a full-scale digital innovation partner, delivering AI-driven solutions, data engineering, automation, cloud modernization, and trustworthy intelligent systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Press Release 2 - Great Place to Work */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-gray-50 rounded-3xl p-10 border border-border relative overflow-hidden group hover:border-primary-500 hover:bg-white hover:shadow-soft transition-all duration-300">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="w-16 h-16 flex items-center justify-center bg-accent-500 text-white rounded-2xl flex-shrink-0">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-primary-500 transition-colors tracking-tight">
                      CodeByteSol Recognized as a Great Place to Work®
                    </h3>
                    <p className="text-[10px] font-bold text-text-faint uppercase tracking-widest mb-6">Press Release</p>
                    <div className="space-y-4 text-text-muted leading-relaxed text-lg font-medium">
                      <p>
                        We are proud to share that CodeByteSol has been officially certified as a Great Place to Work®.
                      </p>
                      <p>
                        This recognition highlights our commitment to building a culture driven by trust, collaboration, diversity of thought, and people-first values.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {/* Media Inquiries */}
            <FadeIn direction="right">
              <div className="bg-white border border-border rounded-3xl p-10 shadow-sm hover:shadow-soft transition-all duration-300">
                <div className="w-16 h-16 flex items-center justify-center bg-primary-50 rounded-2xl mb-8 border border-primary-100">
                  <Newspaper className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4 tracking-tight">Media Inquiries</h3>
                <p className="text-text-muted text-lg mb-8 leading-relaxed font-medium">
                  For press releases, interviews, and media coverage regarding our AI initiatives.
                </p>
                <div className="space-y-4">
                  <a href="mailto:codebytesol@gmail.com" className="flex items-center gap-4 text-text-muted hover:text-primary-500 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-primary-50">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-bold">codebytesol@gmail.com</span>
                  </a>
                  <a href="tel:+919000328387" className="flex items-center gap-4 text-text-muted hover:text-primary-500 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-primary-50">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-bold">+91 90003 28387</span>
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Partnership Opportunities */}
            <FadeIn direction="left">
              <div className="bg-white border border-border rounded-3xl p-10 shadow-sm hover:shadow-soft transition-all duration-300">
                <div className="w-16 h-16 flex items-center justify-center bg-primary-50 rounded-2xl mb-8 border border-primary-100">
                  <Rocket className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4 tracking-tight">Partnerships</h3>
                <p className="text-text-muted text-lg mb-8 leading-relaxed font-medium">
                  Explore collaboration and strategic partnership opportunities globally.
                </p>
                <div className="space-y-4">
                  <a href="mailto:codebytesol@gmail.com" className="flex items-center gap-4 text-text-muted hover:text-primary-500 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-primary-50">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-bold">codebytesol@gmail.com</span>
                  </a>
                  <a href="tel:+919000328387" className="flex items-center gap-4 text-text-muted hover:text-primary-500 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-primary-50">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-bold">+91 90003 28387</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Press Kit */}
          <FadeIn direction="up">
            <div className="bg-gray-50 rounded-[2.5rem] p-12 md:p-20 text-center mb-24 border border-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-50/50 blur-[120px] rounded-full translate-x-1/2" />
              
              <div className="w-20 h-20 flex items-center justify-center bg-primary-500 text-white rounded-2xl mx-auto mb-8 shadow-sm">
                <Download className="w-10 h-10" />
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight">Media Assets</h3>
              <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                Download our official press kit including high-resolution logos, brand guidelines, and executive photography.
              </p>
              <Button
                onClick={() => window.location.href = "/contact"}
                size="lg"
                className="h-16 px-12 rounded-2xl"
              >
                <Download className="w-6 h-6 mr-3" />
                Request Press Kit
              </Button>
            </div>
          </FadeIn>

          {/* Office Locations */}
          <FadeIn direction="up">
            <div className="bg-white border border-border rounded-3xl p-12 shadow-sm">
              <h3 className="text-3xl font-bold text-text-primary mb-12 text-center tracking-tight">Our Global Presence</h3>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center group">
                  <div className="w-14 h-14 flex items-center justify-center bg-gray-50 border border-border rounded-2xl mx-auto mb-6 group-hover:bg-primary-50 group-hover:border-primary-500 transition-all duration-300">
                    <MapPin className="w-7 h-7 text-primary-500" />
                  </div>
                  <h4 className="text-xl font-bold text-text-primary mb-2 tracking-tight">HQ - Texas, USA</h4>
                  <p className="text-text-muted font-medium">North America Headquarters</p>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 flex items-center justify-center bg-gray-50 border border-border rounded-2xl mx-auto mb-6 group-hover:bg-primary-50 group-hover:border-primary-500 transition-all duration-300">
                    <MapPin className="w-7 h-7 text-primary-500" />
                  </div>
                  <h4 className="text-xl font-bold text-text-primary mb-2 tracking-tight">Hyderabad, India</h4>
                  <p className="text-text-muted font-medium">Global Delivery Center</p>
                </div>
                <div className="text-center group">
                  <div className="w-14 h-14 flex items-center justify-center bg-gray-50 border border-border rounded-2xl mx-auto mb-6 group-hover:bg-primary-50 group-hover:border-primary-500 transition-all duration-300">
                    <MapPin className="w-7 h-7 text-primary-500" />
                  </div>
                  <h4 className="text-xl font-bold text-text-primary mb-2 tracking-tight">UAE</h4>
                  <p className="text-text-muted font-medium">Middle East Operations</p>
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
