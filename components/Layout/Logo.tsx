import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src="/logo.png" alt="Company Logo" className="h-[50px] w-auto animate-fade-in" />
    </div>
  );
};

export default Logo;
