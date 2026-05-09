import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Card, CardContent, CardTitle, CardDescription } from '../../../components/primitives/Card';
import { FadeIn } from '../../../components/animations/FadeIn';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../../lib/cn';

function SpotlightCard({ service, className }: { service: any; className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className={cn("group relative", className)}
    >
      <Link to={service.link}>
        <Card className="h-full border-white/5 bg-white/5 hover:border-primary-500/50 transition-colors duration-500">
          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
               style={{
                 background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(20, 184, 166, 0.15), transparent 80%)` as any
               }}
          />
          
          <CardContent className="h-full flex flex-col p-8">
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center border border-primary-500/20 group-hover:scale-110 transition-transform duration-500">
                <i className={cn(service.icon, "text-3xl text-primary-500")} />
              </div>
              <ArrowUpRight className="w-6 h-6 text-text-faint group-hover:text-primary-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </div>
            
            <div className="mt-auto">
              <CardTitle className="text-2xl mb-3 text-white group-hover:text-primary-300 transition-colors">
                {service.title}
              </CardTitle>
              <CardDescription className="text-base text-text-muted leading-relaxed line-clamp-3">
                {service.cardDescription}
              </CardDescription>
            </div>
          </CardContent>
          
          {/* Animated border bottom */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-aurora group-hover:w-full transition-all duration-700" />
        </Card>
      </Link>
    </motion.div>
  );
}

export default function Services() {
  const services = useAppSelector((s) => s.content.data?.services ?? []);

  // Grid mapping for bento effect - normalized for consistency
  const gridClasses = [
    "lg:col-span-2",
    "lg:col-span-2",
    "lg:col-span-2",
    "lg:col-span-3",
    "lg:col-span-3",
    "lg:col-span-6",
  ];

  return (
    <section id="services" className="w-full py-24 bg-bg-primary overflow-hidden">
      <div className="container-2xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
          <FadeIn direction="right" className="lg:w-1/2">
            <h2 className="text-display-xl font-display font-bold text-white mb-6 leading-none">
              Elite Engineering.<br />
              <span className="gradient-text">Production Grade.</span>
            </h2>
          </FadeIn>
          <FadeIn direction="left" className="lg:w-1/2">
            <p className="text-xl text-text-muted leading-relaxed border-l-2 border-primary-500/30 pl-8 max-w-xl">
              From mission-critical AI to scalable enterprise platforms, we deliver 
              solutions engineered for 100% reliability and performance.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {services.map((s, i) => (
            <FadeIn key={s.id} direction="up" delay={i * 0.05} className={gridClasses[i] || "lg:col-span-2"}>
              <SpotlightCard service={s} className="h-full" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
