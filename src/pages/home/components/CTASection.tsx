import { useAppSelector } from '../../../store/hooks';
import { MagneticButton } from '../../../components/primitives/Button';
import { FadeIn } from '../../../components/animations/FadeIn';
import { ArrowRight } from 'lucide-react';
import ctaBg from '../../../assets/bg/download (4).jpg';

export default function CTASection() {
  const cta = useAppSelector((s) => s.content.data?.cta);

  return (
    <section id="contact" className="w-full py-32 bg-bg-primary relative overflow-hidden border-t border-white/5">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
         <img src={ctaBg} className="w-full h-full object-cover opacity-10" alt="Background" />
         <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-bg-primary" />
      </div>

      <div className="relative z-10 container-xl mx-auto px-6 text-center">
        <FadeIn direction="up">
          <h2 className="text-display-xl font-display font-bold text-white mb-8 leading-tight max-w-4xl mx-auto tracking-tighter">
            {cta?.title ?? "Ready to Build What's Next?"}
          </h2>
          <p className="text-xl text-text-muted mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
            Join 200+ global enterprises transforming their operations with our elite AI and software engineering services.
          </p>
          
          <div className="flex justify-center">
            <MagneticButton 
              variant="primary" 
              size="lg" 
              className="h-20 px-16 text-xl"
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
      
      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
    </section>
  );
}
