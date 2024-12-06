'use client';
import { useEffect, useRef } from 'react';
import { animate } from '@motionone/dom';

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    animate(
      titleRef.current,
      { opacity: [0, 1], y: [20, 0] },
      { duration: 1, easing: 'ease-out' }
    );
    animate(
      subtitleRef.current,
      { opacity: [0, 1], y: [20, 0] },
      { duration: 1, delay: 0.2, easing: 'ease-out' }
    );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 ref={titleRef} className="text-6xl font-bold mb-6">
          Creative Developer
        </h1>
        <p ref={subtitleRef} className="text-xl text-gray-300 max-w-2xl mx-auto">
          Building beautiful digital experiences with modern web technologies
        </p>
      </div>
    </div>
  );
}