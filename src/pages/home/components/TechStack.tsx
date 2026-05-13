import { useAppSelector } from '../../../store/hooks';
import { FadeIn } from '../../../components/animations/FadeIn';

export default function TechStack() {
  const techStack = useAppSelector((s) => s.content.data?.techStack ?? []);
  
  return (
    <section id="tech-stack" className="w-full py-32 bg-gray-900 overflow-hidden relative border-b border-white/5">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/source_images/industries/ind_hitech.png" 
          alt="Tech Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900" />
      </div>

      <div className="container-2xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <FadeIn direction="up">
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary-400 mb-8">The Arsenal</p>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight tracking-tight">
              Elite Technical Foundation.
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
              We build on industry-leading frameworks and battle-tested architectures 
              to ensure high-performance production environments.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((tech, i) => (
            <FadeIn key={tech.category} direction="up" delay={i * 0.05}>
              <div className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 rounded-[2rem] shadow-xl hover:bg-white/10 hover:border-primary-500/50 transition-all group h-full">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center border border-primary-500/20 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-primary-500/10">
                    <i className={`${tech.icon} text-primary-400 group-hover:text-inherit text-2xl`} />
                  </div>
                  <h3 className="font-bold text-white text-xl tracking-tight">{tech.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {tech.tools.map(tool => (
                    <span key={tool} className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 bg-white/5 px-4 py-2 rounded-xl border border-white/5 group-hover:bg-white/10 group-hover:border-primary-500/20 transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
