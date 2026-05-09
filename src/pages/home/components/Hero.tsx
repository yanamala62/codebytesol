import { useState, useEffect } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FadeIn, StaggerChildren } from '../../../components/animations/FadeIn';
import heroBg from '../../../assets/bg/download.jpg';

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const hero = useAppSelector((s) => s.content.data?.hero);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const phrases = hero?.phrases ?? ['AI-driven Digital Experiences', 'Scalable Engineering', 'Data-Led Decision Making'];

  useEffect(() => {
    const id = setInterval(() => setCurrentPhrase((p) => (p + 1) % phrases.length), 3000);
    return () => clearInterval(id);
  }, [phrases.length]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} className="w-full h-full object-cover opacity-80 brightness-110" alt="Background" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/30 via-bg-primary/60 to-bg-primary" />
      </div>

      {/* Content */}
      <motion.div 
        style={{ y: y1, opacity, scale }}
        className="relative z-10 w-full px-6 container-2xl mx-auto text-center pt-20"
      >
        <StaggerChildren>
          {/* Eyebrow */}
          <FadeIn direction="up">
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-sm font-mono uppercase tracking-[0.3em] text-primary-300">
                Official Corporate Presence
              </span>
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-display-xl md:text-display-2xl font-display font-bold leading-[0.9] mb-8 tracking-tighter text-white">
              Innovation Meets <br />
              <span className="gradient-text">Intelligence</span>
            </h1>
          </FadeIn>

          {/* Rotating Phrases */}
          <FadeIn direction="up" delay={0.4}>
            <div className="h-12 relative flex items-center justify-center mb-8 overflow-hidden">
               <AnimatePresence mode="wait">
                  <motion.p
                    key={currentPhrase}
                    initial={{ y: 40, opacity: 0, rotateX: -90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -40, opacity: 0, rotateX: 90 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    className="text-2xl md:text-4xl font-light text-text-muted absolute"
                  >
                    Engineered for <span className="text-white font-medium">{phrases[currentPhrase]}</span>
                  </motion.p>
               </AnimatePresence>
            </div>
          </FadeIn>

          {/* Description */}
          <FadeIn direction="up" delay={0.6}>
            <p className="text-xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              {hero?.description ?? ''}
            </p>
          </FadeIn>
        </StaggerChildren>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-text-faint">Discover Services</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary-500 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-1/2 bg-white absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
