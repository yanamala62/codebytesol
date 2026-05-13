import { useRef, useLayoutEffect } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FadeIn } from '../../../components/animations/FadeIn';
import { cn } from '../../../lib/cn';

gsap.registerPlugin(ScrollTrigger);

export default function WhyWorkWithUs() {
  const whyUs = useAppSelector((s) => s.content.data?.whyUs ?? []);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      whyUs.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: `.why-card-${i}`,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            gsap.to(leftTextRef.current, {
              duration: 0.3,
              opacity: 0,
              y: -20,
              onComplete: () => {
                if (leftTextRef.current) {
                  leftTextRef.current.innerText = whyUs[i].title;
                  gsap.to(leftTextRef.current, { opacity: 1, y: 0, duration: 0.3 });
                }
              }
            });
          },
          onEnterBack: () => {
             gsap.to(leftTextRef.current, {
              duration: 0.3,
              opacity: 0,
              y: 20,
              onComplete: () => {
                if (leftTextRef.current) {
                  leftTextRef.current.innerText = whyUs[i].title;
                  gsap.to(leftTextRef.current, { opacity: 1, y: 0, duration: 0.3 });
                }
              }
            });
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [whyUs]);

  return (
    <section ref={containerRef} className="w-full bg-gray-900 py-32 relative overflow-hidden border-b border-white/5">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/source_images/company/com_careers.png" 
          alt="Why Us Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/60 to-gray-900" />
        <div className="absolute inset-0 bg-gray-900/40" />
      </div>
      
      <div className="container-2xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side */}
          <div className="lg:w-5/12">
            <FadeIn direction="right">
              <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary-400 mb-8">CodeByteSol Standards</p>
              <h2 ref={leftTextRef} className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight min-h-[140px] tracking-tight">
                The Advantage.
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-md font-medium border-l-2 border-primary-500/40 pl-8">
                We combine AI-native thinking with elite engineering to solve the most 
                complex digital challenges for global enterprises.
              </p>
            </FadeIn>
          </div>

          {/* Right Scrolling Side - Independent Scroll */}
          <div className="lg:w-7/12 max-h-[600px] overflow-y-auto pr-6 scrollbar-hide">
            <div className="flex flex-col gap-20 lg:gap-24 pb-10">
              {whyUs.map((feature, i) => (
                <div key={i} className={cn(`why-card-${i} flex flex-col gap-6`)}>
                  <div className="text-7xl md:text-[80px] font-black text-gray-800 leading-none">
                    0{i + 1}
                  </div>
                  <div className="flex flex-col gap-4 pl-6 border-l-4 border-primary-500">
                    <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-400 leading-relaxed max-w-xl font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
