import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import UseCases from './components/UseCases';
import TechStack from './components/TechStack';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import Trust from './components/Trust';
import CTASection from './components/CTASection';

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-bg-primary">
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <Services />
        <UseCases />
        <TechStack />
        <WhyWorkWithUs />
        <Trust />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
