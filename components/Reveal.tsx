
import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.01, // Trigger as soon as 1% is visible
        rootMargin: '0px 0px -20px 0px' // Trigger slightly before it enters viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={`${className} ${isVisible ? 'reveal-active' : ''}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
