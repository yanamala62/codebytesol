import { useState, useEffect } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { motion } from 'framer-motion';
import { FadeIn } from '../../../components/animations/FadeIn';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../../lib/cn';

export default function UseCases() {
  const useCases = useAppSelector((s) => s.content.data?.useCases ?? []);
  const [currentIndex, setIndex] = useState(0);
  const [, setTick] = useState(0);

  useEffect(() => {
    const handleResize = () => setTick((t) => t + 1);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <section className="w-full py-32 bg-gray-900 overflow-hidden relative border-y border-white/5">
      {/* Section Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/source_images/industries/ind_manufacturing.png" 
          alt="Use Cases Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900" />
      </div>

      <div className="container-2xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <FadeIn direction="up">
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary-400 mb-8">Proof of Value</p>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-[0.95] tracking-tighter">
              Impact in <span className="text-primary-500">Action.</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-medium border-l-2 border-primary-500/40 pl-8">
              Real-world results delivered through elite engineering and AI-native thinking.
            </p>
          </FadeIn>

          <div className="flex gap-4">
            <button 
              onClick={prev}
              disabled={currentIndex === 0}
              className="w-14 h-14 rounded-full bg-white border border-border flex items-center justify-center text-text-primary hover:bg-gray-50 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              disabled={currentIndex === useCases.length - 1}
              className="w-14 h-14 rounded-full bg-white border border-border flex items-center justify-center text-text-primary hover:bg-gray-50 shadow-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative overflow-visible">
          <motion.div 
            animate={{ x: `-${currentIndex * (window.innerWidth < 768 ? 88 : window.innerWidth < 1024 ? 73 : 47)}vw` }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="flex gap-8 px-[7.5vw] md:px-[15vw] lg:px-[27.5vw]"
          >
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className={cn(
                  "relative w-[85vw] md:w-[70vw] lg:w-[45vw] flex-shrink-0 aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden group transition-all duration-700",
                  currentIndex === index ? "opacity-100 scale-100 shadow-xl" : "opacity-40 scale-90 blur-[2px]"
                )}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                   <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 p-8 md:p-12 flex flex-col justify-end">
                   <span className="inline-block px-4 py-1.5 bg-primary-500 text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 w-fit">
                    {useCase.industry}
                   </span>
                   <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
                    {useCase.title}
                   </h3>
                   <p className="text-lg text-white/80 mb-8 line-clamp-2 max-w-lg leading-relaxed">
                    {useCase.description}
                   </p>
                </div>

                {/* Index Number */}
                <div className="absolute top-8 right-8 z-10 text-5xl font-black text-white/10">
                  0{index + 1}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="mt-20 w-full h-[2px] bg-border relative overflow-hidden rounded-full">
           <motion.div 
             animate={{ width: `${((currentIndex + 1) / useCases.length) * 100}%` }}
             className="absolute top-0 left-0 h-full bg-primary-500"
           />
        </div>
      </div>
    </section>
  );
}
