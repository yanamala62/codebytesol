import { Link } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';

export default function NotFound() {
  return (
    <PageLayout title="404 Not Found">
      <section className="w-full min-h-[calc(100vh-72px)] flex items-center justify-center px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center">
          <h1 className="text-[140px] md:text-[180px] font-extrabold leading-none bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] bg-clip-text text-transparent mb-4 select-none">
            404
          </h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-10 text-lg max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="px-8 py-4 bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-[var(--color-primary-500)]/40 transition-all duration-300 flex items-center gap-2 justify-center">
              <i className="ri-home-line" /> Go Home
            </Link>
            <Link to="/contact" className="px-8 py-4 border-2 border-[var(--color-primary-500)] text-[var(--color-primary-500)] font-semibold rounded-lg hover:bg-[var(--color-primary-500)] hover:text-white transition-all duration-300 flex items-center gap-2 justify-center">
              <i className="ri-mail-line" /> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
