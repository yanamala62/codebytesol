import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { Link } from 'react-router-dom';
import { FadeIn } from '../../../components/animations/FadeIn';

const BankingFinancePage = () => {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/banking-hero-001--634b01222a12.jpg"
            alt="Banking & Finance Technology"
            className="w-full h-full object-cover object-top opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/50 via-bg-primary/80 to-bg-primary"></div>
        </div>
        
        <div className="container-xl mx-auto relative z-10">
          <FadeIn direction="up">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 flex items-center justify-center glass rounded-2xl border border-white/10">
                <i className="ri-bank-line text-4xl text-primary-500"></i>
              </div>
              <h1 className="text-display-xl font-display font-bold text-white">Banking & Finance</h1>
            </div>
            <p className="text-2xl text-text-muted mb-12 max-w-4xl leading-relaxed">
              Accelerating digital transformation through secure, scalable, and compliant technology solutions.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/contact" className="px-8 py-4 bg-gradient-aurora text-white font-bold rounded-full hover:shadow-glow-md transition-all">
                Request Banking Brief
              </Link>
              <Link to="/contact" className="px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-all border border-white/10">
                Schedule Consultation
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Simplified Content for now */}
      <section className="py-24 px-6 bg-bg-secondary">
        <div className="container-xl mx-auto text-center">
           <h2 className="text-display-md font-display font-bold text-white mb-12">
             Powering secure, intelligent, and compliant <br/> digital banking experiences globally
           </h2>
           <div className="grid md:grid-cols-3 gap-8 text-left">
              {['Mission', 'Digital Banking Enablement', 'Trust & Compliance'].map((title, i) => (
                <div key={i} className="glass p-8 border-white/5">
                   <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
                   <p className="text-text-muted">
                     Codebytesol delivers secure, compliant, intelligent digital banking solutions to improve outcomes.
                   </p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BankingFinancePage;
