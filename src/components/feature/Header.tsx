import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  toggleMobileMenu,
  closeMobileMenu,
  setActiveDropdown,
} from '../../store/slices/uiSlice';
import MegaMenu from '../ui/MegaMenu';
import { Button, MagneticButton } from '../primitives/Button';
import { ChevronDown, Menu, X, PlayCircle, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { cn } from '../../lib/cn';
import codeByteSolLogo from '../../assets/logo.jpg';

export default function Header() {
  const dispatch = useAppDispatch();
  const { isMobileMenuOpen, activeDropdown } = useAppSelector((s) => s.ui);
  const content = useAppSelector((s) => s.content.data);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services   = content?.services   ?? [];
  const industries = content?.industries ?? [];
  const resources  = content?.resources  ?? [];
  const company    = content?.company    ?? [];

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
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-white/5 py-3' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container-2xl mx-auto px-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => { window.scrollTo(0, 0); dispatch(closeMobileMenu()); }}
            className="flex items-center group transition-transform duration-300 hover:scale-105"
          >
             <img src={codeByteSolLogo} alt="CodeByteSol Logo" className="h-10 md:h-12 w-auto" />
             <div className="ml-3 flex flex-col justify-center">
                <span className="text-xl md:text-2xl font-display font-bold tracking-tighter text-white leading-none">
                    CodeByteSol
                </span>
                <span className="text-[12px] font-mono text-primary-400 uppercase tracking-[0.2em] mt-1.5 font-bold">
                    Innovation Meets Intelligence
                </span>
             </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navGroups.map(({ key, label, items, width }) => (
              <div
                key={key}
                className="relative group"
                onMouseEnter={() => dispatch(setActiveDropdown(key))}
                onMouseLeave={() => dispatch(setActiveDropdown(null))}
              >
                <button className="px-5 py-2 text-sm font-medium text-text-muted hover:text-white transition-colors flex items-center gap-1">
                  {label}
                  <ChevronDown className={cn(
                    "w-4 h-4 transition-transform duration-300 opacity-50 group-hover:opacity-100",
                    activeDropdown === key && "rotate-180"
                  )} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                      <MegaMenu items={items} width={width} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-10 h-10 flex items-center justify-center glass rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (theme === 'dark' ? <Sun className="w-5 h-5 text-primary-500" /> : <Moon className="w-5 h-5 text-primary-500" />)}
            </button>

            <MagneticButton 
              variant="primary" 
              size="sm"
              onClick={() => window.location.href = "/contact"}
            >
              Start Transformation
            </MagneticButton>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => dispatch(toggleMobileMenu())}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white glass"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 lg:hidden bg-bg-primary/98 backdrop-blur-2xl p-8 pt-28 flex flex-col"
          >
            <div className="flex flex-col gap-8 flex-1 overflow-y-auto pb-10">
              {navGroups.map(({ key, label }) => (
                <motion.button 
                  key={key} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-4xl font-display font-bold text-left text-white hover:text-primary-500 transition-colors"
                >
                  {label}
                </motion.button>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-6 mt-4 pt-8 border-t border-white/10"
              >
                <Link to="/contact" onClick={() => dispatch(closeMobileMenu())} className="text-xl font-medium text-text-muted flex items-center gap-3">
                  <PlayCircle className="w-6 h-6 text-primary-500" />
                  Get in Touch
                </Link>
                
                <div className="flex items-center justify-between glass p-4 rounded-2xl border border-white/10">
                   <span className="text-sm font-medium text-text-muted uppercase tracking-widest">Theme</span>
                   <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl text-primary-500"
                  >
                    {mounted && (theme === 'dark' ? <Sun /> : <Moon />)}
                  </button>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-auto"
            >
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full h-16 text-lg"
                onClick={() => {
                  window.open("/contact", "_blank");
                  dispatch(closeMobileMenu());
                }}
              >
                Start Transformation
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
