import { useAppSelector } from '../../../store/hooks';
import { FadeIn } from '../../../components/animations/FadeIn';
import techBg from '../../../assets/bg/download (3).jpg';

export default function TechStack() {
  const techStack = useAppSelector((s) => s.content.data?.techStack ?? []);
  
  return (
    <section id="tech-stack" className="w-full py-24 bg-bg-primary overflow-hidden relative border-b border-white/5">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
         <img src={techBg} className="w-full h-full object-cover opacity-5 grayscale" alt="Background" />
         <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-bg-primary" />
      </div>

      <div className="container-2xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <p className="text-xs font-mono uppercase tracking-[0.4em] text-primary-500 mb-6 font-bold">The Arsenal</p>
            <h2 className="text-display-xl font-display font-bold text-white mb-6">
              Elite Technical <span className="gradient-text">Foundation.</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto font-medium">
              We build on industry-leading frameworks and battle-tested architectures 
              to ensure high-performance production environments.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((tech, i) => (
            <FadeIn key={tech.category} direction="up" delay={i * 0.05}>
              <div className="glass p-8 border-white/5 hover:border-primary-500/30 transition-all group h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center border border-primary-500/20 group-hover:bg-primary-500/20 transition-colors">
                    <i className={`${tech.icon} text-primary-500 text-xl`} />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg tracking-tight">{tech.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.tools.map(tool => (
                    <span key={tool} className="text-[11px] font-mono uppercase tracking-wider text-text-muted bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 group-hover:border-primary-500/10 transition-colors">
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
