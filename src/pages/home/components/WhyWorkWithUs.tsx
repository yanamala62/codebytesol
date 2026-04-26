import { useAppSelector } from '../../../store/hooks';
import type { Feature } from '../../../types';

interface FeatureCardProps { feature: Feature; }

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:border-[#00C896] hover:shadow-md transition-all duration-300">
      <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg mb-4">
        <i className={`${feature.icon} text-2xl text-[#00C896]`} />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-sm text-gray-600">{feature.description}</p>
    </div>
  );
}

export default function WhyWorkWithUs() {
  const whyUs = useAppSelector((s) => s.content.data?.whyUs ?? []);

  return (
    <section id="why-us" className="w-full py-24 bg-white">
      <div className="w-full px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              A Trusted Partner for{' '}
              <span className="bg-gradient-to-r from-[#00C896] to-[#00D9FF] bg-clip-text text-transparent">Enterprise Transformation</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We combine cutting-edge AI technology with proven engineering practices to deliver transformative solutions that drive real business value.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyUs.map((f) => <FeatureCard key={f.title} feature={f} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
