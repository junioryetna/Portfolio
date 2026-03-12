import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}
export function Button({
  variant = 'outline',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
  'px-4 py-2 font-medium transition-colors duration-200 flex items-center justify-center gap-2';
  const variants = {
    primary:
    'border border-[#C778DD] text-white hover:bg-[#C778DD] hover:bg-opacity-20',
    outline:
    'border border-[#ABB2BF] text-[#ABB2BF] hover:text-white hover:border-white'
  };
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}>

      {children}
    </button>);

}