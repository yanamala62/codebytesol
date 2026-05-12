import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { FadeIn, StaggerChildren } from '../../components/animations/FadeIn';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
// import { Button } from '../../components/primitives/Button';

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
      <section className="relative pt-48 pb-32 px-6 overflow-hidden bg-gray-900 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/source_images/company/com_careers.png" 
            alt="Careers Background" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/60" />
        </div>
        <div className="container-xl mx-auto relative z-10">
          <FadeIn direction="up">
            <h1 className="text-6xl md:text-[120px] font-black text-white mb-10 leading-[0.85] tracking-tighter uppercase italic">
               Join the <br />
               <span className="text-primary-500">Elite.</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 max-w-2xl leading-relaxed font-medium drop-shadow-md">
              We're building the future of enterprise intelligence. Build your career with the leaders in AI transformation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Openings */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container-xl mx-auto px-6">
           <FadeIn direction="up" className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">Current Openings</h2>
           </FadeIn>

           <StaggerChildren className="grid grid-cols-1 gap-6">
              {jobs.map((job, i) => (
                <FadeIn key={i} direction="up" delay={i * 0.1}>
                   <div className="bg-gray-50 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-border rounded-2xl hover:border-primary-500 hover:bg-white hover:shadow-soft transition-all duration-300 group cursor-pointer">
                      <div className="flex flex-col gap-2">
                         <h3 className="text-2xl font-bold text-text-primary group-hover:text-primary-500 transition-colors tracking-tight">{job.title}</h3>
                         <div className="flex flex-wrap gap-6 mt-2">
                            <span className="flex items-center gap-2 text-text-muted text-sm font-semibold">
                               <MapPin className="w-4 h-4 text-primary-500" />
                               {job.location}
                            </span>
                            <span className="flex items-center gap-2 text-text-muted text-sm font-semibold">
                               <Clock className="w-4 h-4 text-primary-500" />
                               {job.type}
                            </span>
                         </div>
                      </div>
                      <button className="flex items-center gap-3 text-text-primary font-bold uppercase text-xs tracking-widest group/btn transition-colors hover:text-primary-500">
                         Apply Now
                         <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center group-hover/btn:bg-primary-500 group-hover/btn:border-primary-500 group-hover/btn:text-white transition-all duration-300 shadow-sm">
                            <ArrowRight className="w-5 h-5" />
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
