import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
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

  // Decide if we should show the "Transparent/White Text" style
  const isTransparent = isHomePage && !isScrolled;

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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        !isTransparent 
          ? 'bg-white/95 backdrop-blur-md border-b border-border py-3 shadow-md' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container-2xl mx-auto px-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => { window.scrollTo(0, 0); dispatch(closeMobileMenu()); }}
            className="flex items-center group transition-all duration-300 hover:scale-105"
          >
             <div className="relative">
                <div className="absolute inset-0 bg-primary-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <img src={codeByteSolLogo} alt="CodeByteSol Logo" className="h-10 md:h-14 w-auto rounded-xl shadow-lg border-2 border-white/50 relative z-10" />
             </div>
             <div className="ml-4 flex flex-col justify-center">
                <span className={cn(
                  "text-xl md:text-2xl font-black tracking-tighter leading-none transition-colors",
                  isTransparent ? "text-white" : "text-text-primary"
                )}>
                    CODEBYTE<span className="text-primary-500">SOL</span>
                </span>
                <span className={cn(
                  "text-[9px] font-bold uppercase tracking-[0.3em] mt-1 transition-colors",
                  isTransparent ? "text-primary-300" : "text-primary-500"
                )}>
                    Innovation Meets Intelligence
                </span>
             </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navGroups.map(({ key, label, items, width }, index) => (
              <div
                key={key}
                className="relative group"
                onMouseEnter={() => dispatch(setActiveDropdown(key))}
                onMouseLeave={() => dispatch(setActiveDropdown(null))}
              >
                <button className={cn(
                  "px-4 py-2 text-sm font-semibold transition-colors flex items-center gap-1 rounded-lg",
                  isTransparent 
                    ? "text-white hover:bg-white/10" 
                    : "text-text-muted hover:text-primary-500 hover:bg-primary-50"
                )}>
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
                      className={cn(
                        "absolute top-full pt-4",
                        index >= navGroups.length - 2 ? "right-0" : "left-1/2 -translate-x-1/2"
                      )}
                    >
                      <MegaMenu 
                        items={items} 
                        width={width} 
                        onItemClick={() => dispatch(setActiveDropdown(null))}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-xl transition-colors border",
                isTransparent 
                  ? "bg-white/10 border-white/20 hover:bg-white/20 text-white"
                  : "bg-gray-50 border-border hover:bg-gray-100 text-text-primary" 
              )}
              aria-label="Toggle theme"
            >
              {mounted && (theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
            </button>

            <MagneticButton 
              variant={!isTransparent ? "primary" : "accent"} 
              size="sm"
              onClick={() => window.location.href = "/contact"}
            >
              Get Started
            </MagneticButton>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => dispatch(toggleMobileMenu())}
            className={cn(
              "lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border transition-colors relative z-50",
              (isTransparent && !isMobileMenuOpen)
                ? "bg-white/10 border-white/20 text-white"
                : "bg-gray-50 border-border text-text-primary"
            )}
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
            className="fixed inset-0 z-40 lg:hidden bg-white p-8 pt-24 flex flex-col"
          >
            <div className="flex flex-col gap-6 flex-1 overflow-y-auto pb-10">
              {navGroups.map(({ key, label }) => {
                const links: Record<string, string> = {
                  services: '/how-we-help',
                  industries: '/industries',
                  resources: '/resources',
                  company: '/about'
                };
                return (
                  <Link 
                    key={key} 
                    to={links[key] ?? '/'}
                    onClick={() => dispatch(closeMobileMenu())}
                    className="text-4xl font-bold text-left text-text-primary hover:text-primary-500 transition-colors"
                  >
                    {label}
                  </Link>
                );
              })}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-6 mt-4 pt-8 border-t border-border"
              >
                <Link to="/contact" onClick={() => dispatch(closeMobileMenu())} className="text-lg font-semibold text-text-muted hover:text-primary-500 flex items-center gap-3">
                  <PlayCircle className="w-6 h-6" />
                  Get in Touch
                </Link>
                
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl border border-border">
                   <span className="text-sm font-bold text-text-muted uppercase tracking-widest">Theme</span>
                   <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="w-12 h-12 flex items-center justify-center bg-white border border-border rounded-xl text-primary-500"
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
                className="w-full h-14"
                onClick={() => {
                  window.location.href = "/contact";
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
