import { useAppSelector } from '../../../store/hooks';
import type { TechCategory } from '../../../types';

interface TechCardProps { tech: TechCategory; }

export function TechCard({ tech }: TechCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#00C896] hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#00C896]/10 to-[#00D9FF]/10 rounded-lg mb-4">
        <i className={`${tech.icon} text-2xl text-[#00C896]`} />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-3">{tech.category}</h3>
      <div className="flex flex-wrap gap-2">
        {tech.tools.map((tool) => (
          <span key={tool} className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-xs font-medium border border-gray-200">{tool}</span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  const techStack = useAppSelector((s) => s.content.data?.techStack ?? []);

  return (
    <section id="tech-stack" className="w-full py-24 bg-gray-50">
      <div className="w-full px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-[#00C896] to-[#00D9FF] bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Powered by cutting-edge technologies and industry-leading tools</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {techStack.map((tech) => <TechCard key={tech.category} tech={tech} />)}
        </div>
      </div>
    </section>
  );
}
