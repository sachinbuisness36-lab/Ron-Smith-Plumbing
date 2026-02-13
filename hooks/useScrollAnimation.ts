
import React, { useState, useEffect, useRef } from 'react';

type AnimationType = 'fade-in' | 'slide-up' | 'slide-in-left';

const useScrollAnimation = <T extends HTMLElement,>(
  animationType: AnimationType,
  options?: IntersectionObserverInit
) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  const animationClass = isVisible ? `animate-${animationType}-visible` : 'animation-hidden';
  
  return { ref: elementRef, animationClass };
};

export default useScrollAnimation;
