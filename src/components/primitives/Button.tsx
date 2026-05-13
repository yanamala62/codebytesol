import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/cn';
import { motion, type HTMLMotionProps } from 'framer-motion';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50 active:scale-95',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-white shadow-sm hover:bg-primary-700 hover:shadow-md',
        secondary: 'bg-white text-text-primary border border-border hover:bg-gray-50 shadow-sm',
        accent: 'bg-accent-500 text-white shadow-sm hover:bg-accent-600 hover:shadow-md',
        glass: 'bg-white/70 backdrop-blur-md text-text-primary border border-border/50 hover:bg-white/90',
        ghost: 'bg-transparent text-text-primary hover:bg-gray-100',
        outline: 'bg-transparent border border-primary-500 text-primary-500 hover:bg-primary-500/5',
      },
      size: {
        sm: 'h-10 px-5',
        md: 'h-12 px-8 text-base',
        lg: 'h-14 px-10 text-lg',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

interface MagneticButtonProps extends HTMLMotionProps<'button'>, VariantProps<typeof buttonVariants> {}

const MagneticButton = React.forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ className, children, variant, size, ...props }, ref) => {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const btnRef = React.useRef<HTMLButtonElement>(null);
    
    React.useImperativeHandle(ref, () => btnRef.current!);

    const handleMouseMove = (e: React.MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = btnRef.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
      const x = (clientX - (left + width / 2)) * 0.35;
      const y = (clientY - (top + height / 2)) * 0.35;
      setPosition({ x, y });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    return (
      <motion.button
        ref={btnRef}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        <span className="relative z-10">{children as React.ReactNode}</span>
      </motion.button>
    );
  }
);
MagneticButton.displayName = 'MagneticButton';

export { Button, MagneticButton };
