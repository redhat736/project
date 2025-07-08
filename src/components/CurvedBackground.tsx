import React from 'react';

const CurvedBackground = () => {
  return (
    <div className="curved-background">
      <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        {/* Curved Line 1 */}
        <path
          className="curve-1"
          d="M0,400 Q300,200 600,350 T1200,300"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Curved Line 2 */}
        <path
          className="curve-2"
          d="M0,600 Q400,400 800,550 T1200,500"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Curved Line 3 */}
        <path
          className="curve-3"
          d="M0,200 Q200,100 500,180 Q800,260 1200,150"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Additional decorative curves */}
        <path
          className="curve-1"
          d="M200,0 Q400,150 600,100 Q800,50 1000,120"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        
        <path
          className="curve-2"
          d="M0,800 Q300,650 600,700 Q900,750 1200,650"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Floating dots */}
        <circle cx="150" cy="300" r="4" fill="rgba(255,255,255,0.1)" className="animate-float" />
        <circle cx="450" cy="150" r="3" fill="rgba(255,255,255,0.15)" className="animate-float" style={{animationDelay: '2s'}} />
        <circle cx="750" cy="400" r="5" fill="rgba(255,255,255,0.08)" className="animate-float" style={{animationDelay: '4s'}} />
        <circle cx="950" cy="250" r="3" fill="rgba(255,255,255,0.12)" className="animate-float" style={{animationDelay: '1s'}} />
        <circle cx="350" cy="600" r="4" fill="rgba(255,255,255,0.1)" className="animate-float" style={{animationDelay: '3s'}} />
      </svg>
    </div>
  );
};

export default CurvedBackground;