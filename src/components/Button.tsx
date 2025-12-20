import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses = [
      'font-bold',
      'border-4',
      'transition-all',
      'active:translate-x-1 active:translate-y-1', // "press" effect
      'disabled:opacity-50 disabled:cursor-not-allowed',
    ];

    const sizeClasses = {
      sm: 'text-sm px-3 py-1',
      md: 'text-base px-4 py-2',
      lg: 'text-lg px-6 py-3',
    };

    const variantClasses = {
      primary: 'bg-yellow-400 border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
      secondary: 'bg-white border-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    };

    const classes = [
      ...baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      className,
    ].filter(Boolean).join(' ');

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;