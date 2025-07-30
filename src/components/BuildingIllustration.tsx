import React from 'react';

interface BuildingIllustrationProps {
  className?: string;
  variant?: 'hero' | 'goal' | 'data';
}

export const BuildingIllustration: React.FC<BuildingIllustrationProps> = ({ 
  className = "", 
  variant = 'hero' 
}) => {
  if (variant === 'hero') {
    return (
      <svg 
        viewBox="0 0 400 300" 
        className={`w-full h-full ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="80" y="120" width="80" height="180" fill="#4a5568" />
        <rect x="90" y="140" width="20" height="20" fill="#a0aec0" />
        <rect x="130" y="140" width="20" height="20" fill="#a0aec0" />
        <rect x="90" y="180" width="20" height="20" fill="#a0aec0" />
        <rect x="130" y="180" width="20" height="20" fill="#a0aec0" />
        <rect x="90" y="220" width="20" height="20" fill="#a0aec0" />
        <rect x="130" y="220" width="20" height="20" fill="#a0aec0" />
        
        <rect x="170" y="80" width="100" height="220" fill="#718096" />
        <rect x="185" y="100" width="25" height="25" fill="#a0aec0" />
        <rect x="230" y="100" width="25" height="25" fill="#a0aec0" />
        <rect x="185" y="145" width="25" height="25" fill="#a0aec0" />
        <rect x="230" y="145" width="25" height="25" fill="#a0aec0" />
        <rect x="185" y="190" width="25" height="25" fill="#a0aec0" />
        <rect x="230" y="190" width="25" height="25" fill="#a0aec0" />
        <rect x="185" y="235" width="25" height="25" fill="#a0aec0" />
        <rect x="230" y="235" width="25" height="25" fill="#a0aec0" />
        
        <rect x="280" y="150" width="70" height="150" fill="#4a5568" />
        <rect x="290" y="165" width="15" height="15" fill="#a0aec0" />
        <rect x="325" y="165" width="15" height="15" fill="#a0aec0" />
        <rect x="290" y="195" width="15" height="15" fill="#a0aec0" />
        <rect x="325" y="195" width="15" height="15" fill="#a0aec0" />
        <rect x="290" y="225" width="15" height="15" fill="#a0aec0" />
        <rect x="325" y="225" width="15" height="15" fill="#a0aec0" />
        <rect x="290" y="255" width="15" height="15" fill="#a0aec0" />
        <rect x="325" y="255" width="15" height="15" fill="#a0aec0" />
      </svg>
    );
  }

  if (variant === 'goal') {
    return (
      <svg 
        viewBox="0 0 300 300" 
        className={`w-full h-full ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="60" y="80" width="180" height="200" fill="#4a5568" />
        <rect x="80" y="100" width="40" height="40" fill="#a0aec0" />
        <rect x="140" y="100" width="40" height="40" fill="#a0aec0" />
        <rect x="200" y="100" width="40" height="40" fill="#a0aec0" />
        <rect x="80" y="160" width="40" height="40" fill="#a0aec0" />
        <rect x="140" y="160" width="40" height="40" fill="#a0aec0" />
        <rect x="200" y="160" width="40" height="40" fill="#a0aec0" />
        <rect x="80" y="220" width="40" height="40" fill="#a0aec0" />
        <rect x="140" y="220" width="40" height="40" fill="#a0aec0" />
        <rect x="200" y="220" width="40" height="40" fill="#a0aec0" />
        
        <circle cx="170" cy="160" r="60" fill="none" stroke="#9f7aea" strokeWidth="4" />
        <path d="M 170 130 L 170 160 L 200 160" stroke="#9f7aea" strokeWidth="4" strokeLinecap="round" />
        <circle cx="210" cy="200" r="30" fill="#805ad5" opacity="0.3" />
        <path d="M 195 185 L 225 215" stroke="#805ad5" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg 
      viewBox="0 0 400 300" 
      className={`w-full h-full ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="50" y="100" width="80" height="180" fill="#805ad5" opacity="0.7" />
      <rect x="60" y="120" width="20" height="20" fill="#e9d8fd" />
      <rect x="100" y="120" width="20" height="20" fill="#e9d8fd" />
      <rect x="60" y="160" width="20" height="20" fill="#e9d8fd" />
      <rect x="100" y="160" width="20" height="20" fill="#e9d8fd" />
      
      <rect x="150" y="80" width="100" height="200" fill="#4a5568" />
      <rect x="165" y="100" width="25" height="25" fill="#a0aec0" />
      <rect x="210" y="100" width="25" height="25" fill="#a0aec0" />
      <rect x="165" y="145" width="25" height="25" fill="#a0aec0" />
      <rect x="210" y="145" width="25" height="25" fill="#a0aec0" />
      
      <path d="M 300 50 L 320 30 L 340 50 L 340 100 L 320 100 L 300 100 Z" fill="#ed64a6" opacity="0.7" />
      <path d="M 320 100 L 320 250" stroke="#4a5568" strokeWidth="4" />
      <path d="M 280 200 L 360 120" stroke="#718096" strokeWidth="2" strokeDasharray="5 5" />
    </svg>
  );
};