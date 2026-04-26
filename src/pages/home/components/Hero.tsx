import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const hero = useAppSelector((s) => s.content.data?.hero);

  const phrases = hero?.phrases ?? ['AI-driven Digital Experiences', 'Scalable Engineering', 'Data-Led Decision Making'];

  useEffect(() => {
    const id = setInterval(() => setCurrentPhrase((p) => (p + 1) % phrases.length), 3000);
    return () => clearInterval(id);
  }, [phrases.length]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-[72px]">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute pointer-events-none w-full h-full object-cover">
          <source src="/assets/hero-background-animation.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-16 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight">
            <span className="text-black">{hero?.title ?? 'Innovation Meets'}</span>
            <br />
            <span className="bg-gradient-to-r from-[#00C896] to-[#00D9FF] bg-clip-text text-transparent">
              {hero?.highlight ?? 'Intelligence'}
            </span>
          </h1>

          <div className="text-[21px] md:text-[25px] lg:text-[31px] text-black mb-12 font-light leading-relaxed flex flex-col md:flex-row items-center justify-center">
            <span className="font-bold">Transforming enterprises with&nbsp;</span>
            <div className="relative inline-flex items-baseline mt-2 md:mt-0 justify-center">
              <span className="invisible whitespace-nowrap">{phrases[0]}</span>
              {phrases.map((phrase, i) => (
                <span
                  key={i}
                  className={`absolute top-0 left-0 right-0 text-center md:text-left whitespace-nowrap transition-all duration-700 ease-in-out bg-gradient-to-r from-[#00C896] to-[#00D9FF] bg-clip-text text-transparent font-semibold ${
                    i === currentPhrase ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
                  }`}
                >
                  {phrase}
                </span>
              ))}
            </div>
          </div>

          <p className="text-base md:text-lg text-black mb-12 max-w-4xl mx-auto leading-relaxed">
            {hero?.description ?? ''}
          </p>

          <Link
            to={hero?.cta.href ?? '/contact'}
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#00C896] to-[#00D9FF] text-white rounded-lg hover:shadow-xl hover:shadow-[#00C896]/40 transition-all duration-200 text-base font-semibold"
          >
            {hero?.cta.label ?? 'Start Your Digital Transformation'}
          </Link>
        </div>
      </div>
    </section>
  );
}
