import { useState } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { motion } from 'framer-motion';
import { FadeIn } from '../../../components/animations/FadeIn';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../../lib/cn';

export default function UseCases() {
  const useCases = useAppSelector((s) => s.content.data?.useCases ?? []);
  const [currentIndex, setIndex] = useState(0);

  const next = () => {
    if (currentIndex < useCases.length - 1) {
      setIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setIndex(currentIndex - 1);
    }
  };

  if (!useCases.length) return null;

  return (
    <section className="w-full py-32 bg-bg-secondary overflow-hidden relative">
      <div className="container-2xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <FadeIn direction="up">
            <h2 className="text-display-xl font-display font-bold text-white mb-6 leading-tight">
              Impact in <span className="gradient-text">Action.</span>
            </h2>
            <p className="text-xl text-text-muted max-w-2xl leading-relaxed">
              Real-world results delivered through elite engineering and AI-native thinking.
            </p>
          </FadeIn>

          <div className="flex gap-4">
            <button 
              onClick={prev}
              disabled={currentIndex === 0}
              className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              disabled={currentIndex === useCases.length - 1}
              className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative">
          <motion.div 
            animate={{ x: `-${currentIndex * 80}%` }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="flex gap-8"
          >
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className={cn(
                  "relative w-[85vw] md:w-[70vw] lg:w-[40vw] flex-shrink-0 aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden group transition-all duration-700",
                  currentIndex === index ? "opacity-100 scale-100 shadow-glow-md" : "opacity-40 scale-95"
                )}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                   <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 p-8 md:p-12 flex flex-col justify-end">
                   <span className="inline-block px-4 py-1.5 glass text-primary-300 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] mb-6 w-fit border border-white/10">
                    {useCase.industry}
                   </span>
                   <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
                    {useCase.title}
                   </h3>
                   <p className="text-lg text-text-muted mb-8 line-clamp-2 max-w-lg leading-relaxed">
                    {useCase.description}
                   </p>
                </div>

                {/* Index Number */}
                <div className="absolute top-8 right-8 z-10 font-display text-5xl font-black text-white/5">
                  0{index + 1}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="mt-20 w-full h-[2px] bg-white/5 relative overflow-hidden rounded-full">
           <motion.div 
             animate={{ width: `${((currentIndex + 1) / useCases.length) * 100}%` }}
             className="absolute top-0 left-0 h-full bg-primary-500"
           />
        </div>
      </div>
    </section>
  );
}
