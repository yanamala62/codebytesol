import { useAppSelector } from '../../../store/hooks';
import { FadeIn } from '../../../components/animations/FadeIn';

export default function Trust() {
  const trustImages = useAppSelector((s) => s.content.data?.trustImages ?? []);
  
  return (
    <section className="w-full py-32 bg-white overflow-hidden border-y border-border relative">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/source_images/resources/res_success.png" 
          alt="Trust Background" 
          className="w-full h-full object-cover opacity-[0.03]"
        />
      </div>
      
      <div className="container-2xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <div className="lg:w-1/3 text-center lg:text-left">
            <FadeIn direction="right">
              <p className="text-xs font-bold uppercase tracking-widest text-primary-500 mb-6">Trusted Worldwide</p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 leading-tight tracking-tight">
                Elite teams <br/> depend on us.
              </h2>
              <p className="text-lg text-text-muted max-w-md mx-auto lg:mx-0">
                Powering digital transformation for global industry leaders across 30 countries.
              </p>
            </FadeIn>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustImages.slice(0, 8).map((logo, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.05}>
                <div className="bg-gray-50 h-24 flex items-center justify-center p-8 rounded-2xl border border-transparent hover:border-border hover:bg-white hover:shadow-sm transition-all duration-300 group">
                  <img 
                    src={encodeURI(`/assets/${logo}`)} 
                    alt="Partner" 
                    className="max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
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
