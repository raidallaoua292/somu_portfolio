import React from 'react';

interface CircularProgressProps {
  size: number; // Size of the circle
  progress: number; // Progress value (0 - 100)
  strokeWidth: number; // Thickness of the progress circle
  content: string;
}

const CircularProgress = ({ size, progress, strokeWidth, content }: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex items-center justify-center">
      <svg width={size} height={size} className="relative">
        {/* Background Circle */}
        <circle
          // stroke="" // Tailwind can't directly control SVG properties like stroke
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Progress Circle */}
        <circle
          // stroke="" // Customize this with any Tailwind color class
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-[stroke-dashoffset] duration-300 stroke-secondary" // Customize this with any Tailwind stroke color class
        />
        {/* Text */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-xl font-semibold fill-white capitalize" // Customize this with any Tailwind text color class
        >
          {`${content}`}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgress;
