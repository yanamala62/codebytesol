import { useAppSelector } from '../../../store/hooks';
import { MagneticButton } from '../../../components/primitives/Button';
import { FadeIn } from '../../../components/animations/FadeIn';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  const cta = useAppSelector((s) => s.content.data?.cta);

  return (
    <section id="contact" className="w-full py-32 relative overflow-hidden bg-gray-900 border-t border-border">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/source_images/resources/res_success.png" 
          alt="Success Background" 
          className="w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-gray-900" />
      </div>

      <div className="relative z-10 container-xl mx-auto px-6 text-center">
        <FadeIn direction="up">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight max-w-4xl mx-auto tracking-tight">
            {cta?.title ?? "Ready to Build What's Next?"}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
            Join 200+ global enterprises transforming their operations with our elite AI and software engineering services.
          </p>
          
          <div className="flex justify-center">
            <MagneticButton 
              variant="primary" 
              size="lg" 
              className="h-20 px-16 text-xl rounded-2xl shadow-lg shadow-primary-500/20"
              onClick={() => window.location.href = '/contact'}
            >
              <div className="flex items-center gap-4">
                Consult with our Experts
                <ArrowRight className="w-6 h-6" />
              </div>
            </MagneticButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
