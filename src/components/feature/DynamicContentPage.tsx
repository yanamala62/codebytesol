import PageLayout from '../../layouts/PageLayout';
import { useAppSelector } from '../../store/hooks';
import { FadeIn, StaggerChildren } from '../animations/FadeIn';
import { cn } from '../../lib/cn';
import { CheckCircle2, ArrowRight, Zap, Shield, Globe } from 'lucide-react';

interface DynamicContentPageProps {
  pageId: string;
}

export default function DynamicContentPage({ pageId }: DynamicContentPageProps) {
  const content = useAppSelector((state) => state.content.data);
  const services = content?.services ?? [];
  const industries = content?.industries ?? [];

  // Find detailed data if available
  const serviceDetail = services.find(s => s.id === pageId);
  const industryDetail = industries.find(i => i.id === pageId);
  
  const detail = serviceDetail || industryDetail;

  const title = detail?.title ?? pageId;
  const description = (detail && 'cardDescription' in detail ? detail.cardDescription : detail?.navDesc) || '';
  const icon = detail?.icon || 'ri-global-line';

  // Mapping provided official assets to context
  const getContextualBg = (id: string) => {
    const maps: Record<string, string> = {
      'ai-machine-learning': 'download.jpg',
      'healthcare': 'download (1).jpg',
      'banking-finance': 'download (2).jpg',
      'cloud-engineering': 'download (3).jpg',
      'data-services': 'download (4).jpg',
    };
    return maps[id] || 'download.jpg';
  };

  return (
    <PageLayout title={title}>
      {/* Hero Section */}
      <section className="relative w-full pt-48 pb-24 px-6 overflow-hidden bg-bg-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src={new URL(`../../assets/bg/${getContextualBg(pageId)}`, import.meta.url).href}
            className="w-full h-full object-cover opacity-10 grayscale"
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/40 via-bg-primary/80 to-bg-primary" />
        </div>

        <div className="container-2xl mx-auto relative z-10">
          <FadeIn direction="up">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-16 h-16 flex items-center justify-center glass rounded-2xl border border-white/10">
                 <i className={cn(icon, "text-4xl text-primary-500")} />
               </div>
               <div className="flex flex-col">
                  <span className="text-xs font-mono uppercase tracking-[0.4em] text-primary-500 font-bold">Official Service</span>
                  <span className="text-[10px] font-mono text-text-faint uppercase tracking-widest">Enterprise Verified</span>
               </div>
            </div>
            <h1 className="text-display-xl md:text-display-2xl font-display font-bold text-white mb-8 leading-[0.9] tracking-tighter max-w-5xl">
              {title}
            </h1>
            <p className="text-2xl text-text-muted max-w-3xl leading-relaxed mb-12 font-medium">
              {description as string}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Corporate Features */}
      <section className="py-32 bg-bg-primary relative overflow-hidden border-t border-white/5">
        <div className="container-2xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                 <FadeIn direction="right">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
                       Engineered for <br/>
                       <span className="gradient-text">Unmatched Scale.</span>
                    </h2>
                    <p className="text-xl text-text-muted leading-relaxed mb-10 font-medium">
                       We don't just provide services; we build high-performance ecosystems 
                       that transform your operational core into a competitive advantage.
                    </p>
                    <ul className="flex flex-col gap-5">
                       {[
                         { icon: Zap, text: 'Ultra-Low Latency Implementation' },
                         { icon: Shield, text: 'Bank-Grade Security Frameworks' },
                         { icon: Globe, text: 'Global Deployment Ready' }
                       ].map((item, i) => (
                         <li key={i} className="flex items-center gap-4 text-white font-bold">
                            <item.icon className="w-6 h-6 text-primary-500" />
                            <span className="tracking-tight">{item.text}</span>
                         </li>
                       ))}
                    </ul>
                 </FadeIn>
              </div>
              <div className="lg:col-span-7">
                 <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { title: 'Innovation First', desc: 'Cutting-edge approaches to solve complex enterprise challenges.' },
                      { title: 'Scalable Architecture', desc: 'Systems designed to grow seamlessly with your enterprise demand.' },
                      { title: 'Expert Guidance', desc: 'Led by industry veterans and elite software engineers.' },
                      { title: 'Rapid Deployment', desc: 'Proprietary frameworks to accelerate production timelines.' }
                    ].map((item, i) => (
                      <FadeIn key={i} direction="up" delay={i * 0.1}>
                        <div className="glass p-10 h-full border-white/5 group hover:border-primary-500/30 transition-all cursor-default">
                          <CheckCircle2 className="w-10 h-10 text-primary-500 mb-6 group-hover:scale-110 transition-transform" />
                          <h3 className="text-2xl font-display font-bold text-white mb-4 leading-tight">{item.title}</h3>
                          <p className="text-text-muted leading-relaxed font-medium">{item.desc}</p>
                        </div>
                      </FadeIn>
                    ))}
                 </StaggerChildren>
              </div>
           </div>
        </div>
      </section>

      {/* Transformation Call */}
      <section className="py-32 bg-bg-secondary relative overflow-hidden border-y border-white/5">
        <div className="container-md mx-auto px-6 text-center relative z-10">
           <FadeIn direction="up">
              <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-8 tracking-tighter">Ready to Begin?</h2>
              <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto font-medium">
                Our advisory team is ready to discuss how {title} can drive immediate impact 
                for your organization.
              </p>
              <button 
                onClick={() => window.location.href = "/contact"}
                className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-aurora text-white font-bold text-lg rounded-full shadow-glow-md hover:scale-105 transition-all"
              >
                Schedule Transformation Call
                <ArrowRight className="w-6 h-6" />
              </button>
           </FadeIn>
        </div>
        
        {/* Background visual */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 blur-[160px] rounded-full" />
      </section>
    </PageLayout>
  );
}
