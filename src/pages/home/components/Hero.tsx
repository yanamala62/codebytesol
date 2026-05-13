import { useState, useEffect } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FadeIn, StaggerChildren } from '../../../components/animations/FadeIn';
import { Button } from '../../../components/primitives/Button';

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const hero = useAppSelector((s) => s.content.data?.hero);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const phrases = hero?.phrases ?? ['AI-driven Digital Experiences', 'Scalable Engineering', 'Data-Led Decision Making'];

  useEffect(() => {
    const id = setInterval(() => setCurrentPhrase((p) => (p + 1) % phrases.length), 3000);
    return () => clearInterval(id);
  }, [phrases.length]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 pt-20 pb-40">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/source_images/home_hero.png" 
          alt="AI Background" 
          className="w-full h-full object-cover opacity-60 scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-transparent to-gray-900/70" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-accent-500/10 blur-[100px] rounded-full" />
      </div>

      {/* Content */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 w-full px-6 container-2xl mx-auto text-center"
      >
        <StaggerChildren>
          {/* Eyebrow */}
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-white">
                The Future of Enterprise AI
              </span>
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-8 tracking-tight text-white uppercase italic">
              Innovation Meets <br />
              <span className="text-primary-500">Intelligence</span>
            </h1>
          </FadeIn>

          {/* Description */}
          <FadeIn direction="up" delay={0.3}>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-lg">
              {hero?.description ?? 'We engineer elite digital solutions that combine cutting-edge AI with production-grade stability.'}
            </p>
          </FadeIn>

          {/* Rotating Phrases */}
          <FadeIn direction="up" delay={0.4}>
            <div className="h-10 relative flex items-center justify-center mb-6">
               <AnimatePresence mode="wait">
                  <motion.p
                    key={currentPhrase}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-base md:text-lg font-bold text-primary-400 uppercase tracking-widest absolute"
                  >
                    {phrases[currentPhrase]}
                  </motion.p>
               </AnimatePresence>
            </div>
          </FadeIn>

          {/* CTAs */}
          <FadeIn direction="up" delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-primary-500/20" onClick={() => window.location.href = '/contact'}>
                Start Your Transformation
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20" onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Explore Services
              </Button>
            </div>
          </FadeIn>
        </StaggerChildren>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-primary-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
