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

function PageLoader() {
  const loadingLabel = useAppSelector((state) => state.content.data?.meta?.loadingLabel ?? 'Loading...');

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-primary-500/30 border-t-primary-500 animate-spin" />
        <p className="text-text-muted font-mono animate-pulse">{loadingLabel}</p>
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
    <div className="bg-bg-primary min-h-screen text-text-primary">
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
