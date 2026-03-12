import React from 'react';
interface DotsProps {
  className?: string;
  rows?: number;
  cols?: number;
}
export function Dots({ className = '', rows = 5, cols = 5 }: DotsProps) {
  const dots = [];
  for (let i = 0; i < rows * cols; i++) {
    dots.push(i);
  }
  return (
    <div
      className={`grid gap-4 opacity-50 ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        width: 'fit-content'
      }}
      aria-hidden="true">

      {dots.map((dot) =>
      <div key={dot} className="w-1 h-1 rounded-full bg-[#ABB2BF]" />
      )}
    </div>);

}