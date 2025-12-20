import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'warning' | 'error' | 'success' | 'info';
  size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, disabled, ...props }, ref) => {
    const baseClass = [
      'cursor-pointer',
      'font-black',
      'border-4',
      'border-black',
      'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]',
      'transition-all',
      'hover:shadow-none',
      'hover:translate-x-0.5',
      'hover:translate-y-0.5',
      'active:shadow-none',
      'active:translate-x-0.5',
      'active:translate-y-0.5',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
    ].join(' ');

    const sizeClass = {
      sm: 'text-base px-3 py-1.5',
      md: 'text-lg px-4 py-2',
      lg: 'text-xl px-6 py-3',
    }[size];

    const variantClass = {
      primary: 'bg-yellow-300 hover:bg-yellow-200 text-black dark:bg-yellow-400 dark:hover:bg-yellow-300',
      secondary: 'bg-white hover:bg-gray-100 text-black dark:bg-gray-200 dark:hover:bg-gray-300',
      warning: 'bg-yellow-300 hover:bg-yellow-200 text-black dark:bg-yellow-400 dark:hover:bg-yellow-300',
      error: 'bg-red-500 hover:bg-red-400 text-white dark:bg-red-600 dark:hover:bg-red-500',
      success: 'bg-green-500 hover:bg-green-400 text-white dark:bg-green-600 dark:hover:bg-green-500',
      info: 'bg-cyan-400 hover:bg-cyan-300 text-black dark:bg-cyan-500 dark:hover:bg-cyan-400',
    }[variant];

    const classes = [baseClass, sizeClass, variantClass, className]
      .filter(Boolean)
      .join(' ');

    return (
      <button ref={ref} className={classes} disabled={disabled} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;