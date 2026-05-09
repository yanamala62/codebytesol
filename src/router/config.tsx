import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import HomePage from '../pages/home/page';
const NotFound = lazy(() => import('../pages/NotFound'));
const AIMachineLearningPage = lazy(() => import('../pages/services/ai-machine-learning/page'));
const ApplicationDevelopmentPage = lazy(() => import('../pages/services/application-development/page'));
const CloudEngineeringPage = lazy(() => import('../pages/services/cloud-engineering/page'));
const DataServicesPage = lazy(() => import('../pages/services/data-services/page'));
const ERPServicesPage = lazy(() => import('../pages/services/erp-services/page'));
const SoftwareTestingQAPage = lazy(() => import('../pages/services/software-testing-qa/page'));
const IndustriesPage = lazy(() => import('../pages/industries/page'));
const HealthcarePage = lazy(() => import('../pages/industries/healthcare/page'));
const BankingFinancePage = lazy(() => import('../pages/industries/banking-finance/page'));
const InsurancePage = lazy(() => import('../pages/industries/insurance/page'));
const RetailEcommercePage = lazy(() => import('../pages/industries/retail-ecommerce/page'));
const EnergyUtilitiesPage = lazy(() => import('../pages/industries/energy-utilities/page'));
const ManufacturingPage = lazy(() => import('../pages/industries/manufacturing/page'));
const TravelLogisticsPage = lazy(() => import('../pages/industries/travel-logistics/page'));
const ISVHiTechPage = lazy(() => import('../pages/industries/isv-hitech/page'));
const ResourcesPage = lazy(() => import('../pages/resources/page'));
const SuccessStoriesPage = lazy(() => import('../pages/resources/success-stories/page'));
const BlogsPage = lazy(() => import('../pages/resources/blogs/page'));
const WhitePapersPage = lazy(() => import('../pages/resources/white-papers/page'));
const VideosPage = lazy(() => import('../pages/resources/videos/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const CareersPage = lazy(() => import('../pages/careers/page'));
const PressPage = lazy(() => import('../pages/press/page'));
const AIStarterKitPage = lazy(() => import('../pages/ai-starter-kit/page'));
const LiveDemosPage = lazy(() => import('../pages/live-demos/page'));
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
  { path: '/services/ai-machine-learning', element: <AIMachineLearningPage /> },
  { path: '/services/application-development', element: <ApplicationDevelopmentPage /> },
  { path: '/services/cloud-engineering', element: <CloudEngineeringPage /> },
  { path: '/services/data-services', element: <DataServicesPage /> },
  { path: '/services/erp-services', element: <ERPServicesPage /> },
  { path: '/services/software-testing-qa', element: <SoftwareTestingQAPage /> },
  { path: '/industries', element: <IndustriesPage /> },
  { path: '/industries/healthcare', element: <HealthcarePage /> },
  { path: '/industries/banking-finance', element: <BankingFinancePage /> },
  { path: '/industries/insurance', element: <InsurancePage /> },
  { path: '/industries/retail-ecommerce', element: <RetailEcommercePage /> },
  { path: '/industries/energy-utilities', element: <EnergyUtilitiesPage /> },
  { path: '/industries/manufacturing', element: <ManufacturingPage /> },
  { path: '/industries/travel-logistics', element: <TravelLogisticsPage /> },
  { path: '/industries/isv-hitech', element: <ISVHiTechPage /> },
  { path: '/ai-starter-kit', element: <AIStarterKitPage /> },
  { path: '/live-demos', element: <LiveDemosPage /> },
  { path: '/how-we-help', element: <HowWeHelpPage /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
