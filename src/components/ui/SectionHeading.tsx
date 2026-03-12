import React from 'react';
interface SectionHeadingProps {
  title: string;
  className?: string;
}
export function SectionHeading({ title, className = '' }: SectionHeadingProps) {
  return (
    <div className={`flex items-center gap-4 mb-12 ${className}`}>
      <h2 className="text-3xl font-medium flex items-center">
        <span className="text-[#C778DD]">#</span>
        <span className="text-white">{title}</span>
      </h2>
      <div className="h-px bg-[#C778DD] flex-grow max-w-[300px] opacity-50"></div>
    </div>);

}