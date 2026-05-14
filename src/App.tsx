import { BrowserRouter } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoutes } from './router';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { loadContent } from './store/slices/contentSlice';
import { ThemeProvider } from 'next-themes';
import { useLenis } from './hooks/useLenis';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

import codeByteSolLogo from './assets/logo.jpg';

function PageLoader() {
  const loadingLabel = useAppSelector((state) => state.content.data?.meta?.loadingLabel ?? 'Loading...');

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full border-4 border-primary-500/20 border-t-primary-500 animate-spin" />
          <img src={codeByteSolLogo} alt="Logo" className="absolute inset-0 m-auto w-10 h-10 rounded-lg animate-pulse" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl font-black tracking-tighter text-text-primary">
              CODEBYTE<span className="text-primary-500">SOL</span>
          </span>
          <p className="text-text-muted font-mono text-xs uppercase tracking-widest animate-pulse">{loadingLabel}</p>
        </div>
      </div>
    </div>
  );
}
function AppContent() {
  const dispatch = useAppDispatch();
  useLenis();

  useEffect(() => {
    dispatch(loadContent());
  }, [dispatch]);

  return (
    <div className="bg-bg-primary min-h-screen text-text-primary relative">
      {/* Global Background Image - High impact */}
      <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none">
        <img 
          src="/source_images/global_bg.png" 
          alt="Background" 
          className="w-full h-full object-cover grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply" />
      </div>
      <div className="noise-overlay" />
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <AppRoutes />
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
