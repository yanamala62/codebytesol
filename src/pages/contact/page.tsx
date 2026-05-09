import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { FadeIn } from '../../components/animations/FadeIn';
import contactHero from '../../assets/bg/download (2).jpg';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Header />

      {/* Hero */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={contactHero} className="w-full h-full object-cover opacity-50" alt="Contact" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/40 via-bg-primary/80 to-bg-primary" />
        </div>
        <div className="container-xl mx-auto relative z-10 text-center">
          <FadeIn direction="up">
            <h1 className="text-display-xl md:text-display-2xl font-display font-bold text-white mb-8 tracking-tighter leading-none">
               Let's <span className="gradient-text">Connect.</span>
            </h1>
            <p className="text-2xl text-text-muted max-w-2xl mx-auto font-medium leading-relaxed">
              Ready to transform your enterprise with AI? Our team of experts is ready to discuss your next big breakthrough.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-bg-primary">
        <div className="container-2xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Info */}
              <div className="lg:col-span-5">
                 <FadeIn direction="right">
                    <h2 className="text-4xl font-display font-bold text-white mb-12 tracking-tight">Direct Channels</h2>
                    <div className="flex flex-col gap-10">
                       <div className="flex items-start gap-6 group">
                          <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center border border-white/10 group-hover:border-primary-500/30 transition-all">
                             <Mail className="w-6 h-6 text-primary-500" />
                          </div>
                          <div>
                             <p className="text-xs font-mono text-text-faint uppercase tracking-[0.2em] mb-2 font-bold">Email Advisory</p>
                             <p className="text-xl font-bold text-white">Assist@codebytesol.ai</p>
                          </div>
                       </div>

                       <div className="flex items-start gap-6 group">
                          <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center border border-white/10 group-hover:border-primary-500/30 transition-all">
                             <Phone className="w-6 h-6 text-primary-500" />
                          </div>
                          <div>
                             <p className="text-xs font-mono text-text-faint uppercase tracking-[0.2em] mb-2 font-bold">Global Support</p>
                             <div className="flex flex-col gap-1">
                                <p className="text-xl font-bold text-white">+1 952 200 1318</p>
                                <p className="text-xl font-bold text-white">+91 87900 57975</p>
                             </div>
                          </div>
                       </div>

                       <div className="flex items-start gap-6 group">
                          <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center border border-white/10 group-hover:border-primary-500/30 transition-all">
                             <MapPin className="w-6 h-6 text-primary-500" />
                          </div>
                          <div>
                             <p className="text-xs font-mono text-text-faint uppercase tracking-[0.2em] mb-2 font-bold">HQ Operations</p>
                             <p className="text-xl font-bold text-white">Texas, USA | Hyderabad, India | UAE</p>
                          </div>
                       </div>
                    </div>
                 </FadeIn>
              </div>

              {/* Form */}
              <div className="lg:col-span-7">
                 <FadeIn direction="left">
                    <div className="glass p-12 border-white/5 relative overflow-hidden">
                       <h2 className="text-3xl font-display font-bold text-white mb-8 tracking-tight">Send a Priority Message</h2>
                       <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="flex flex-col gap-3">
                             <label className="text-xs font-mono text-text-faint uppercase tracking-widest font-bold">Full Name</label>
                             <input type="text" className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="John Doe" />
                          </div>
                          <div className="flex flex-col gap-3">
                             <label className="text-xs font-mono text-text-faint uppercase tracking-widest font-bold">Email Address</label>
                             <input type="email" className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="john@enterprise.com" />
                          </div>
                          <div className="md:col-span-2 flex flex-col gap-3">
                             <label className="text-xs font-mono text-text-faint uppercase tracking-widest font-bold">Subject</label>
                             <input type="text" className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="AI Transformation Inquiry" />
                          </div>
                          <div className="md:col-span-2 flex flex-col gap-3">
                             <label className="text-xs font-mono text-text-faint uppercase tracking-widest font-bold">Message</label>
                             <textarea rows={5} className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary-500 transition-colors resize-none" placeholder="Describe your challenge..." />
                          </div>
                          <div className="md:col-span-2 pt-4">
                             <button className="w-full h-16 bg-gradient-aurora rounded-xl text-white font-bold text-lg flex items-center justify-center gap-4 hover:scale-[1.02] transition-transform shadow-glow-md">
                                Dispatch Message
                                <Send className="w-5 h-5" />
                             </button>
                          </div>
                       </form>
                    </div>
                 </FadeIn>
              </div>

           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
