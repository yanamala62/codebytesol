import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';

export default function CTASection() {
  const cta = useAppSelector((s) => s.content.data?.cta);

  return (
    <section id="contact" className="w-full py-16 bg-gradient-to-br from-[#00C896] to-[#00D9FF] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>
      <div className="relative z-10 w-full px-6 lg:px-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {cta?.title ?? "Ready to Build What's Next?"}
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            {cta?.description ?? 'Empower your business with next-generation engineering and AI-driven transformation.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={cta?.primaryButton.href ?? '/contact'}
              className="px-8 py-4 bg-white text-[#00C896] rounded-lg hover:shadow-xl transition-all duration-200 text-base font-semibold whitespace-nowrap">
              {cta?.primaryButton.label ?? 'Get in Touch'}
            </Link>
            <Link to={cta?.secondaryButton.href ?? '/resources'}
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all duration-200 text-base font-semibold whitespace-nowrap">
              {cta?.secondaryButton.label ?? 'Explore Resources'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
