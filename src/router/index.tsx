import { lazy, Suspense } from 'react';
import { useRoutes, type RouteObject } from 'react-router-dom';
import HomePage from '../pages/home/page';
import DynamicContentPage from '../components/feature/DynamicContentPage';

const NotFound = lazy(() => import('../pages/NotFound'));
const IndustriesPage = lazy(() => import('../pages/industries/page'));
const ResourcesPage = lazy(() => import('../pages/resources/page'));
const SuccessStoriesPage = lazy(() => import('../pages/resources/success-stories/page'));
const BlogsPage = lazy(() => import('../pages/resources/blogs/page'));
const WhitePapersPage = lazy(() => import('../pages/resources/white-papers/page'));
const VideosPage = lazy(() => import('../pages/resources/videos/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const CareersPage = lazy(() => import('../pages/careers/page'));
const PressPage = lazy(() => import('../pages/press/page'));
const HowWeHelpPage = lazy(() => import('../pages/how-we-help/page'));

const routes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/careers', element: <CareersPage /> },
  { path: '/press', element: <PressPage /> },
  { path: '/resources', element: <ResourcesPage /> },
  { path: '/resources/success-stories', element: <SuccessStoriesPage /> },
  { path: '/resources/blogs', element: <BlogsPage /> },
  { path: '/resources/white-papers', element: <WhitePapersPage /> },
  { path: '/resources/videos', element: <VideosPage /> },
  
  // Services
  { path: '/services/ai-machine-learning', element: <DynamicContentPage pageId="ai-machine-learning" /> },
  { path: '/services/application-development', element: <DynamicContentPage pageId="application-development" /> },
  { path: '/services/cloud-engineering', element: <DynamicContentPage pageId="cloud-engineering" /> },
  { path: '/services/data-services', element: <DynamicContentPage pageId="data-services" /> },
  { path: '/services/erp-services', element: <DynamicContentPage pageId="erp-services" /> },
  { path: '/services/software-testing-qa', element: <DynamicContentPage pageId="software-testing-qa" /> },

  // Industries
  { path: '/industries', element: <IndustriesPage /> },
  { path: '/industries/healthcare', element: <DynamicContentPage pageId="healthcare" /> },
  { path: '/industries/banking-finance', element: <DynamicContentPage pageId="banking-finance" /> },
  { path: '/industries/insurance', element: <DynamicContentPage pageId="insurance" /> },
  { path: '/industries/retail-ecommerce', element: <DynamicContentPage pageId="retail-ecommerce" /> },
  { path: '/industries/energy-utilities', element: <DynamicContentPage pageId="energy-utilities" /> },
  { path: '/industries/manufacturing', element: <DynamicContentPage pageId="manufacturing" /> },
  { path: '/industries/travel-logistics', element: <DynamicContentPage pageId="travel-logistics" /> },
  { path: '/industries/isv-hitech', element: <DynamicContentPage pageId="isv-hitech" /> },

  // Promotional/Legacy - Pointing to contact for conversion
  { path: '/ai-starter-kit', element: <ContactPage /> },
  { path: '/live-demos', element: <ContactPage /> },

  { path: '/how-we-help', element: <HowWeHelpPage /> },
  { path: '*', element: <NotFound /> },
];

export function AppRoutes() {
  const element = useRoutes(routes);
  return (
    <Suspense fallback={
      <div className="h-screen w-full flex items-center justify-center bg-bg-primary">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary-500/20 border-t-primary-500 rounded-full animate-spin" />
          <p className="text-sm font-bold text-text-muted uppercase tracking-[0.2em]">Loading CodeByteSol...</p>
        </div>
      </div>
    }>
      {element}
    </Suspense>
  );
}
