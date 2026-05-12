import PageLayout from '../../layouts/PageLayout';
import { useAppSelector } from '../../store/hooks';
import { FadeIn, StaggerChildren } from '../animations/FadeIn';
import { cn } from '../../lib/cn';
import { CheckCircle2, ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import { Button } from '../primitives/Button';

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

  const rootImages: Record<string, string> = {
    'industries-root': '/source_images/industries/ind_hitech.png',
    'services-root': '/source_images/services/service_cloud.png',
  };

  const title = pageId === 'industries-root' ? 'Target Industries' : (detail?.title ?? pageId);
  const description = (detail && 'cardDescription' in detail ? detail.cardDescription : detail?.navDesc) || 
                      (pageId === 'industries-root' ? 'Specialized AI and engineering solutions tailored for the most demanding global sectors.' : '');
  const icon = detail?.icon || 'ri-global-line';
  const image = detail?.image || rootImages[pageId];

  return (
    <PageLayout title={title}>
      {/* Hero Section */}
      <section className="relative w-full pt-48 pb-32 px-6 overflow-hidden bg-gray-900 min-h-[70vh] flex items-center">
        {/* Background Image if available */}
        {image && (
          <div className="absolute inset-0 z-0">
            <img src={image} alt={title} className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/60" />
          </div>
        )}
        
        <div className="container-2xl mx-auto relative z-10">
          <FadeIn direction="up">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-20 h-20 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
                 <i className={cn(icon, "text-5xl text-primary-400")} />
               </div>
               <div className="flex flex-col">
                  <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary-400">Enterprise Solution</span>
                  <span className="text-[11px] font-bold text-white/60 uppercase tracking-widest mt-1">Verified Architecture</span>
               </div>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-10 leading-[0.95] tracking-tighter max-w-5xl">
              {title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 === 1 ? "text-primary-500" : ""}>{word} </span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed mb-12 font-medium drop-shadow-md">
              {description as string}
            </p>
            <div className="flex flex-wrap gap-4">
               <Button size="lg" className="rounded-xl h-14 px-10 shadow-lg shadow-primary-500/20" onClick={() => window.location.href='/contact'}>
                  Start Transformation
               </Button>
               <Button variant="secondary" size="lg" className="rounded-xl h-14 px-10 bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Technical Docs
               </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Corporate Features */}
      <section className="py-32 bg-white relative overflow-hidden border-t border-border">
        <div className="container-2xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                 <FadeIn direction="right">
                    <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8 leading-tight tracking-tight">
                       Engineered for <br/>
                       <span className="text-primary-500">Unmatched Scale.</span>
                    </h2>
                    <p className="text-lg text-text-muted leading-relaxed mb-10 font-medium">
                       We don't just provide services; we build high-performance ecosystems 
                       that transform your operational core into a competitive advantage.
                    </p>
                    <ul className="flex flex-col gap-6">
                       {[
                         { icon: Zap, text: 'Ultra-Low Latency Implementation' },
                         { icon: Shield, text: 'Bank-Grade Security Frameworks' },
                         { icon: Globe, text: 'Global Deployment Ready' }
                       ].map((item, i) => (
                         <li key={i} className="flex items-center gap-4 text-text-primary font-bold">
                            <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                               <item.icon className="w-5 h-5 text-primary-500" />
                            </div>
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
                        <div className="bg-gray-50 p-10 h-full border border-border rounded-2xl group hover:border-primary-500 hover:bg-white hover:shadow-soft transition-all duration-300 cursor-default">
                          <CheckCircle2 className="w-10 h-10 text-primary-500 mb-6 group-hover:scale-110 transition-transform" />
                          <h3 className="text-xl font-bold text-text-primary mb-4 leading-tight tracking-tight">{item.title}</h3>
                          <p className="text-text-muted leading-relaxed font-medium">{item.desc}</p>
                        </div>
                      </FadeIn>
                    ))}
                 </StaggerChildren>
              </div>
           </div>

           {/* Performance Stats */}
           <div className="mt-32 pt-20 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { label: 'System Uptime', val: '99.99%' },
                { label: 'Security Grade', val: 'AAA' },
                { label: 'Global Regions', val: '30+' },
                { label: 'Daily Visitors', val: '1000+' }
              ].map((stat, i) => (
                <FadeIn key={i} direction="up" delay={0.4 + i * 0.1}>
                   <p className="text-[10px] font-bold text-text-faint uppercase tracking-widest mb-3">{stat.label}</p>
                   <p className="text-4xl font-bold text-text-primary tracking-tight">{stat.val}</p>
                </FadeIn>
              ))}
           </div>
        </div>
      </section>

      {/* Transformation Call */}
      <section className="py-32 bg-gray-50 relative overflow-hidden border-y border-border">
        <div className="container-md mx-auto px-6 text-center relative z-10">
           <FadeIn direction="up">
              <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-8 tracking-tight">Ready to Begin?</h2>
              <p className="text-lg md:text-xl text-text-muted mb-12 max-w-2xl mx-auto font-medium">
                Our advisory team is ready to discuss how {title} can drive immediate impact 
                for your organization.
              </p>
              <Button 
                onClick={() => window.location.href = "/contact"}
                size="lg"
                className="h-16 px-12 text-lg rounded-2xl"
              >
                Schedule Transformation Call
                <ArrowRight className="w-6 h-6 ml-4" />
              </Button>
           </FadeIn>
        </div>
        
        {/* Background visual */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-100/20 blur-[160px] rounded-full" />
      </section>
    </PageLayout>
  );
}
