import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';
import { ArrowRight } from 'lucide-react';

interface NavItem {
  icon: string;
  title: string;
  desc: string;
  link: string;
}

interface MegaMenuProps {
  items: NavItem[];
  width?: string;
}

export default function MegaMenu({ items, width = '800px' }: MegaMenuProps) {
  return (
    <div
      className="glass bg-bg-secondary/95 backdrop-blur-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
      style={{ width }}
    >
      <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar grid grid-cols-2 gap-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              to={item.link}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group/item cursor-pointer border border-transparent hover:border-white/10"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary-500/10 rounded-lg group-hover/item:bg-primary-500/20 transition-colors duration-300 flex-shrink-0">
                <i className={cn(item.icon, "text-2xl text-primary-500 group-hover/item:scale-110 transition-transform")} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-bold text-white group-hover/item:text-primary-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-primary-500" />
                </div>
                <p className="text-sm text-text-muted leading-relaxed line-clamp-2">{item.desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      {/* Featured Insight */}
      <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-aurora p-[1px]">
             <div className="w-full h-full rounded-full bg-bg-secondary flex items-center justify-center">
                <span className="text-[10px] font-bold text-primary-500">NEW</span>
             </div>
          </div>
          <div>
            <p className="text-[10px] font-mono text-primary-500 uppercase tracking-widest font-bold">Featured Transformation</p>
            <p className="text-sm font-medium text-white">Modernizing Enterprise AI Workflows</p>
          </div>
        </div>
        <Link to="/contact" className="text-xs font-bold uppercase tracking-widest text-text-muted hover:text-white transition-colors">
          Get Advisory →
        </Link>
      </div>
    </div>
  );
}
