import { useAppSelector } from '../../store/hooks';
import { Link } from 'react-router-dom';
import codebytesolLogo from '../../assets/logo.png';

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

function FooterLinkList({ title, links }: FooterColumn) {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-white font-display font-bold mb-6 text-sm uppercase tracking-[0.2em]">{title}</h3>
      <div className="flex flex-col gap-3">
        {links.map(({ label, href }) => (
          <Link key={href} to={href} className="text-text-muted hover:text-primary-500 transition-colors duration-300 text-sm font-medium">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  const content = useAppSelector((s) => s.content.data);

  const socialLinks  = content?.socialLinks  ?? [];
  const locations    = content?.locations    ?? [];
  const footerLinks  = content?.footerLinks  ?? { services: [], industries: [], resourcesCompany: [] };

  return (
    <footer className="w-full bg-bg-secondary border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-500/5 blur-[120px] rounded-full translate-x-1/2" />

      <div className="container-2xl mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-20">

          {/* Brand Column - wider */}
          <div className="lg:col-span-2">
             <div className="flex items-center group transition-transform duration-300 hover:scale-105 mb-8 cursor-pointer">
                <img src={codebytesolLogo} alt="Codebytesol Logo" className="h-12 w-auto" />
                <span className="ml-3 text-2xl font-display font-bold tracking-tighter text-white">
                    Codebytesol
                </span>
             </div>
            
            <p className="text-text-muted text-base leading-relaxed mb-10 max-w-sm">
              Codebytesol is an elite digital transformation agency engineered for enterprise-grade 
              AI solutions and optimized software operations.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((s) => (
                <a key={s.name} href={s.url} aria-label={s.name} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center glass rounded-xl text-text-muted hover:text-primary-500 hover:bg-white/10 transition-all duration-300 border border-white/10">
                  <i className={`${s.icon} text-lg`} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns - all side by side */}
          <FooterLinkList title="Services"   links={footerLinks.services} />
          <FooterLinkList title="Industries" links={footerLinks.industries} />
          <FooterLinkList title="Resources"  links={footerLinks.resourcesCompany} />
          
          {/* Offices Column */}
          <div className="flex flex-col h-full">
            <h3 className="text-white font-display font-bold mb-6 text-sm uppercase tracking-[0.2em]">Global Offices</h3>
            <div className="flex flex-col gap-5">
              {locations.map((loc) => (
                <div key={loc.region} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center border border-primary-500/20 flex-shrink-0 mt-0.5">
                    <i className={`${loc.icon} text-primary-500 text-sm`} />
                  </div>
                  <span className="text-text-muted text-sm font-medium leading-snug">{loc.region}</span>
                </div>
              ))}
              
              <div className="pt-6 border-t border-white/5 mt-4">
                 <a href="mailto:Assist@codebytesol.ai" className="text-text-muted hover:text-primary-500 text-xs font-mono transition-colors flex items-center gap-3">
                    <i className="ri-mail-line text-primary-500" />
                    Assist@codebytesol.ai
                 </a>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
            <p className="text-text-faint text-xs font-mono uppercase tracking-[0.2em]">
              &copy; 2026 Codebytesol. Official Service Provider.
            </p>
            <div className="flex items-center gap-6">
               <img src="/assets/1dab2f4c2cd4.png" alt="Certification" className="h-6 w-auto opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
               <span className="text-[10px] font-mono text-text-faint uppercase tracking-widest border-l border-white/10 pl-6">Elite Verified</span>
            </div>
          </div>
          <div className="flex items-center gap-8">
             <Link to="/privacy" className="text-text-faint hover:text-white text-xs font-mono uppercase tracking-widest transition-colors">Privacy Policy</Link>
             <Link to="/terms"   className="text-text-faint hover:text-white text-xs font-mono uppercase tracking-widest transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
