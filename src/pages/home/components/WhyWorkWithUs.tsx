import { useRef, useLayoutEffect } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FadeIn } from '../../../components/animations/FadeIn';
import { cn } from '../../../lib/cn';
import whyBg from '../../../assets/bg/download (1).jpg';

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
    <section ref={containerRef} className="w-full bg-bg-secondary py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
         <img src={whyBg} className="w-full h-full object-cover opacity-10 grayscale" alt="Background" />
         <div className="absolute inset-0 bg-bg-secondary/90" />
      </div>

      <div className="container-2xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side */}
          <div className="lg:w-5/12">
            <FadeIn direction="right">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary-500 mb-6 font-bold">Codebytesol Standards</p>
              <h2 ref={leftTextRef} className="text-display-xl font-display font-bold text-white mb-8 leading-none min-h-[120px]">
                The Advantage.
              </h2>
              <p className="text-xl text-text-muted leading-relaxed max-w-md font-medium">
                We combine AI-native thinking with elite engineering to solve the most 
                complex digital challenges for global enterprises.
              </p>
            </FadeIn>
          </div>

          {/* Right Scrolling Side - Independent Scroll */}
          <div className="lg:w-7/12 max-h-[600px] overflow-y-auto custom-scrollbar pr-6">
            <div className="flex flex-col gap-20 lg:gap-24 pb-10">
              {whyUs.map((feature, i) => (
                <div key={i} className={cn(`why-card-${i} flex flex-col gap-6`)}>
                  <div className="font-display text-7xl md:text-[80px] font-black text-white/5 leading-none">
                    0{i + 1}
                  </div>
                  <div className="flex flex-col gap-4 pl-6 border-l-2 border-primary-500/30">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-text-muted leading-relaxed max-w-xl font-medium">
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
