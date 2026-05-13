import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Card, CardContent, CardTitle, CardDescription } from '../../../components/primitives/Card';
import { FadeIn } from '../../../components/animations/FadeIn';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../../lib/cn';
import { type Service } from '../../../types';

function SpotlightCard({ service, className }: { service: Service; className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(37, 99, 235, 0.05), transparent 80%)`;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className={cn("group relative", className)}
    >
      <Link to={service.link}>
        <Card className="h-full border-border bg-white hover:border-primary-500 transition-colors duration-500 overflow-hidden relative">
          <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
             <img src={service.image} alt="" className="w-full h-full object-cover" />
          </div>
          
          <motion.div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
               style={{ background }}
          />
          
          <CardContent className="h-full flex flex-col p-8 relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center border border-primary-100 group-hover:scale-110 transition-transform duration-500">
                <i className={cn(service.icon, "text-3xl text-primary-500")} />
              </div>
              <ArrowUpRight className="w-6 h-6 text-text-faint group-hover:text-primary-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </div>
            
            <div className="mt-auto">
              <CardTitle className="text-xl font-bold mb-3 text-text-primary group-hover:text-primary-600 transition-colors">
                {service.title}
              </CardTitle>
              <CardDescription className="text-sm text-text-muted leading-relaxed line-clamp-3">
                {service.cardDescription}
              </CardDescription>
            </div>
          </CardContent>
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
    <section id="services" className="w-full py-32 bg-gray-900 overflow-hidden relative border-y border-white/5">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/source_images/services/service_cloud.png" 
          alt="Services Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900" />
      </div>

      <div className="container-2xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <FadeIn direction="right" className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
              Elite Engineering.<br />
              <span className="text-primary-500">Production Grade.</span>
            </h2>
          </FadeIn>
          <FadeIn direction="left" className="lg:w-1/2">
            <p className="text-lg text-gray-400 leading-relaxed border-l-4 border-primary-500/40 pl-8 max-w-xl font-medium">
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
