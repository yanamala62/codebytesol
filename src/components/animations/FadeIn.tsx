import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../lib/motion-variants';
import { cn } from '../../lib/cn';

interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
  viewPortOnce?: boolean;
}

export const FadeIn = ({ children, direction, delay, className, viewPortOnce = true }: FadeInProps) => {
  return (
    <motion.div
      variants={fadeIn(direction, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: viewPortOnce, amount: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerChildren = ({ children, stagger = 0.1, delay = 0, className }: { children: React.ReactNode, stagger?: number, delay?: number, className?: string }) => {
  return (
    <motion.div
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const TextReveal = ({ text, className }: { text: string, className?: string }) => {
  const words = text.split(' ');
  
  return (
    <motion.div
      variants={staggerContainer(0.05, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={cn('flex flex-wrap', className)}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { y: '100%', opacity: 0 },
            show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } }
          }}
          className="mr-[0.25em] inline-block overflow-hidden"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
