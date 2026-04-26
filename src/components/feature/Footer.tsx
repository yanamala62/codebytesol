import { useAppSelector } from '../../store/hooks';
import bytecodeLogo from '../../assets/bytecode.png';

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

function FooterLinkList({ title, links }: FooterColumn) {
  return (
    <div>
      <h3 className="text-gray-900 font-bold mb-3 text-base">{title}</h3>
      <div className="space-y-2">
        {links.map(({ label, href }) => (
          <a key={href} href={href} className="block text-gray-600 hover:text-[#00C896] transition-colors duration-200 text-base">
            {label}
          </a>
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
    <footer className="w-full bg-gradient-to-br from-[#00C896]/5 to-[#00D9FF]/5 border-t border-gray-200">
      <div className="w-full px-6 lg:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-6">

          {/* Brand */}
          <div>
            <img src={bytecodeLogo} alt="Bytecode-AI Logo" className="h-10 w-auto mb-3" />
            <div className="flex gap-3 mb-6">
              {socialLinks.map((s) => (
                <a key={s.name} href={s.url} aria-label={s.name}
                  className="w-10 h-10 flex items-center justify-center bg-white text-gray-600 rounded-lg hover:bg-[#00C896] hover:text-white transition-all duration-200 shadow-sm">
                  <i className={`${s.icon} text-lg`} />
                </a>
              ))}
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Certifications</h4>
            <img src="/assets/1dab2f4c2cd4.png" alt="Certification" className="h-auto w-auto max-h-24 object-contain mix-blend-multiply" />
            <div className="mt-6">
              <p className="text-xs font-semibold text-gray-900 mb-0 leading-tight">Formerly TestPerform</p>
              <img src="/assets/testperform-logo.png" alt="TestPerform Logo" className="h-16 w-auto object-contain mix-blend-multiply -mt-4" />
            </div>
          </div>

          <FooterLinkList title="Services"            links={footerLinks.services} />
          <FooterLinkList title="Industries"          links={footerLinks.industries} />
          <FooterLinkList title="Resources & Company" links={footerLinks.resourcesCompany} />

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 font-bold mb-3 text-base">Contact Us</h3>
            <div className="space-y-2">
              {locations.map((loc) => (
                <div key={loc.region} className="flex items-start gap-2">
                  <i className={`${loc.icon} text-[#00C896] mt-1`} />
                  <span className="text-gray-600 text-base">{loc.region}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 mt-3">
                <i className="ri-mail-line text-[#00C896]" />
                <a href="mailto:Assist@bytecode-ai.ai" className="text-gray-600 hover:text-[#00C896] transition-colors duration-200 text-base">Assist@bytecode-ai.ai</a>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-phone-line text-[#00C896]" />
                <div className="flex flex-col">
                  <a href="tel:+19522001318"  className="text-gray-600 hover:text-[#00C896] transition-colors duration-200 text-base">+1 952 200 1318</a>
                  <a href="tel:+918790057975" className="text-gray-600 hover:text-[#00C896] transition-colors duration-200 text-base">+91 8790057975</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-base">Copyright Â© 2025 Bytecode-AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
