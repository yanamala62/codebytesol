import { Link } from 'react-router-dom';
import PageLayout from '../../layouts/PageLayout';

interface ComingSoonProps {
  title: string;
  subtitle?: string;
  icon?: string;
}

export default function ComingSoon({ title, subtitle, icon = 'ri-rocket-line' }: ComingSoonProps) {
  return (
    <PageLayout title={title}>
      {/* Full-width gradient hero */}
      <section className="w-full bg-gradient-to-br from-[var(--color-primary-500)]/10 via-white to-[var(--color-accent-500)]/10 py-32 px-6 lg:px-16">
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-accent-500)] rounded-2xl mb-8 shadow-lg shadow-[var(--color-primary-500)]/30">
            <i className={`${icon} text-5xl text-white`} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">{title}</h1>
          {subtitle && <p className="text-xl text-gray-600 mb-6 max-w-2xl">{subtitle}</p>}
          <p className="text-gray-500 text-lg mb-10 max-w-xl">
            This page is currently under construction. Our team is working hard to bring it live.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/"
              className="px-8 py-4 bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-[var(--color-primary-500)]/40 transition-all duration-300 flex items-center gap-2 justify-center"
            >
              <i className="ri-home-line" /> Back to Home
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-[var(--color-primary-500)] text-[var(--color-primary-500)] font-semibold rounded-lg hover:bg-[var(--color-primary-500)] hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
            >
              <i className="ri-mail-line" /> Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Full-width info strip */}
      <section className="w-full bg-white py-20 px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: 'ri-customer-service-line', title: 'Expert Support',   desc: 'Our team is ready to assist you every step of the way.' },
            { icon: 'ri-rocket-2-line',          title: 'Coming Soon',      desc: 'We are building something amazing. Stay tuned!' },
            { icon: 'ri-mail-send-line',         title: 'Get Notified',     desc: 'Reach out and we\'ll let you know when this page is live.' },
          ].map((card) => (
            <div key={card.title} className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl hover:shadow-md transition-shadow duration-300">
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[var(--color-primary-500)]/10 to-[var(--color-accent-500)]/10 rounded-xl mb-4">
                <i className={`${card.icon} text-3xl text-[var(--color-primary-500)]`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
