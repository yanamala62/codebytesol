import { useAppSelector } from '../../../store/hooks';
import { FadeIn } from '../../../components/animations/FadeIn';

export default function Trust() {
  const trustImages = useAppSelector((s) => s.content.data?.trustImages ?? []);
  
  // Display logos in an official-looking grid rather than a marquee for better corporate feel
  return (
    <section className="w-full py-32 bg-bg-primary overflow-hidden border-y border-white/5">
      <div className="container-2xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <div className="lg:w-1/3 text-center lg:text-left">
            <FadeIn direction="right">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary-500 mb-6">Trusted Worldwide</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Elite teams <br/> depend on us.
              </h2>
              <p className="text-lg text-text-muted max-w-md mx-auto lg:mx-0">
                Powering digital transformation for global industry leaders across 30 countries.
              </p>
            </FadeIn>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustImages.slice(0, 8).map((logo, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.05}>
                <div className="glass h-24 flex items-center justify-center p-6 opacity-70 hover:opacity-100 transition-all duration-500 group">
                  <img 
                    src={encodeURI(`/assets/${logo}`)} 
                    alt="Partner" 
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 brightness-110"
                  />
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
