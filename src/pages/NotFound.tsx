import { Link } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
import { Button } from '../components/primitives/Button';
import { Home, Mail } from 'lucide-react';

export default function NotFound() {
  return (
    <PageLayout title="404 Not Found">
      <section className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center px-6 bg-bg-primary">
        <div className="text-center">
          <h1 className="text-[120px] md:text-[160px] font-black leading-none text-primary-500/10 mb-4 select-none">
            404
          </h1>
          <div className="relative -mt-20 md:-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 tracking-tight">Page Not Found</h2>
            <p className="text-text-muted mb-10 text-lg max-w-md mx-auto font-medium">
              The page you're looking for doesn't exist or has been moved to a different path.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button size="lg" className="w-full sm:w-auto h-14 rounded-xl">
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto h-14 rounded-xl">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
