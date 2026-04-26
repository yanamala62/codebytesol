import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  toggleMobileMenu,
  closeMobileMenu,
  setActiveDropdown,
} from '../../store/slices/uiSlice';
import MegaMenu from '../ui/MegaMenu';
import MobileAccordion from '../ui/MobileAccordion';
import bytecodeLogo from '../../assets/bytecode.png';

interface HeaderProps {
  isScrolled?: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const dispatch = useAppDispatch();
  const { isMobileMenuOpen, activeDropdown } = useAppSelector((s) => s.ui);
  const content = useAppSelector((s) => s.content.data);

  // Guard while content loads
  const services   = content?.services   ?? [];
  const industries = content?.industries ?? [];
  const resources  = content?.resources  ?? [];
  const company    = content?.company    ?? [];

  // Map to NavItem shape expected by MegaMenu
  const toNavItem = (item: { icon: string; title: string; navDesc?: string; desc?: string; link: string }) => ({
    icon: item.icon,
    title: item.title,
    desc: ('navDesc' in item ? item.navDesc : item.desc) ?? '',
    link: item.link,
  });

  const navGroups = [
    { key: 'services'   as const, label: 'Services',   items: services.map(toNavItem),   width: '800px' },
    { key: 'industries' as const, label: 'Industries',  items: industries.map(toNavItem), width: '800px' },
    { key: 'resources'  as const, label: 'Resources',   items: resources.map(toNavItem),  width: '600px' },
    { key: 'company'    as const, label: 'Company',     items: company.map(toNavItem),    width: '600px' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => { window.scrollTo(0, 0); dispatch(closeMobileMenu()); }}
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-200"
          >
            <img src={bytecodeLogo} alt="Bytecode-AI Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navGroups.map(({ key, label, items, width }) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => dispatch(setActiveDropdown(key))}
                onMouseLeave={() => dispatch(setActiveDropdown(null))}
              >
                <button className="text-base font-medium text-gray-700 hover:text-[#00C896] transition-colors duration-300 flex items-center gap-1">
                  {label}
                  <i className={`ri-arrow-down-s-line transition-transform duration-300 ${activeDropdown === key ? 'rotate-180' : ''}`} />
                </button>
                <MegaMenu items={items} isOpen={activeDropdown === key} width={width} />
              </div>
            ))}
          </nav>

          {/* Live Demos */}
          <div className="hidden lg:flex items-center">
            <Link to="/live-demos" className="text-base font-semibold text-gray-700 hover:text-[#00C896] transition-colors duration-300 flex items-center gap-2 group">
              <i className="ri-play-circle-line text-2xl text-[#00C896] group-hover:scale-110 transition-transform duration-300" />
              Live Demos
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link to="https://ai-starter-kit.bytecode-ai.ai/" className="relative px-6 py-2.5 text-base font-semibold text-white rounded-lg overflow-hidden group whitespace-nowrap">
              <div className="absolute inset-0 bg-[#00C896]" />
              <div className="absolute inset-0 bg-[#00C896] opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <span className="relative z-10">Access AI Starter Kit</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => dispatch(toggleMobileMenu())}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-[#00C896] transition-colors duration-300"
          >
            <i className={`text-2xl ${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-full bg-white shadow-lg border-t border-gray-100">
          <nav className="flex flex-col p-6 space-y-4">
            {navGroups.map(({ key, label, items }) => (
              <MobileAccordion
                key={key}
                label={label}
                items={items}
                isOpen={activeDropdown === key}
                onToggle={() => dispatch(setActiveDropdown(activeDropdown === key ? null : key))}
                onClose={() => dispatch(closeMobileMenu())}
              />
            ))}

            <Link
              to="/live-demos"
              onClick={() => dispatch(closeMobileMenu())}
              className="flex items-center gap-2 py-2 text-base font-medium text-gray-700 hover:text-[#00C896] transition-colors duration-300"
            >
              <i className="ri-play-circle-line text-xl text-[#00C896]" />
              Live Demos
            </Link>

            <Link
              to="https://ai-starter-kit.bytecode-ai.ai/"
              className="block w-full px-6 py-3 text-center text-base font-semibold text-white rounded-lg bg-[#00C896] hover:shadow-xl transition-all duration-300 whitespace-nowrap"
            >
              Access AI Starter Kit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
