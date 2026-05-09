import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { FadeIn, StaggerChildren } from '../../components/animations/FadeIn';
import careersHero from '../../assets/bg/download (1).jpg';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function CareersPage() {
  const jobs = [
    { title: 'Senior AI Engineer', location: 'Hyderabad, India', type: 'Full-time' },
    { title: 'Full Stack Developer', location: 'Texas, USA', type: 'Remote' },
    { title: 'Data Scientist', location: 'UAE', type: 'Hybrid' },
    { title: 'QA Automation Lead', location: 'Hyderabad, India', type: 'Full-time' }
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Header />

      {/* Hero */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={careersHero} className="w-full h-full object-cover opacity-20 grayscale" alt="Careers" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/40 via-bg-primary/80 to-bg-primary" />
        </div>
        <div className="container-xl mx-auto relative z-10 text-center">
          <FadeIn direction="up">
            <h1 className="text-display-xl md:text-display-2xl font-display font-bold text-white mb-8 tracking-tighter leading-none">
               Join the <span className="gradient-text">Elite.</span>
            </h1>
            <p className="text-2xl text-text-muted max-w-2xl mx-auto font-medium leading-relaxed">
              We're building the future of enterprise intelligence. Build your career with the leaders in AI transformation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Openings */}
      <section className="py-24 bg-bg-primary">
        <div className="container-xl mx-auto px-6">
           <FadeIn direction="up" className="mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter">Current Openings</h2>
           </FadeIn>

           <StaggerChildren className="grid grid-cols-1 gap-6">
              {jobs.map((job, i) => (
                <FadeIn key={i} direction="up" delay={i * 0.1}>
                   <div className="glass p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-white/5 hover:border-primary-500/30 transition-all group cursor-pointer">
                      <div className="flex flex-col gap-2">
                         <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary-500 transition-colors">{job.title}</h3>
                         <div className="flex flex-wrap gap-6 mt-2">
                            <span className="flex items-center gap-2 text-text-muted text-sm font-medium">
                               <MapPin className="w-4 h-4 text-primary-500" />
                               {job.location}
                            </span>
                            <span className="flex items-center gap-2 text-text-muted text-sm font-medium">
                               <Clock className="w-4 h-4 text-primary-500" />
                               {job.type}
                            </span>
                         </div>
                      </div>
                      <button className="flex items-center gap-3 text-white font-bold uppercase text-xs tracking-widest group/btn">
                         Apply Now
                         <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover/btn:bg-primary-500 transition-all">
                            <ArrowRight className="w-4 h-4" />
                         </div>
                      </button>
                   </div>
                </FadeIn>
              ))}
           </StaggerChildren>
        </div>
      </section>

      <Footer />
    </div>
  );
}
