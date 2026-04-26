import { BrowserRouter } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoutes } from './router';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { loadContent } from './store/slices/contentSlice';

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
    <div className="loader">
      <div className="loader-box">
        <div className="loader-spin" />
        <p>{loadingLabel}</p>
      </div>
    </div>
  );
}
function AppContent() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadContent());
  }, [dispatch]);

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <AppRoutes />
      </Suspense>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
