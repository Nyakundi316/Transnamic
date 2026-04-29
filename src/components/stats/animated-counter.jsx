"use client";

import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export function AnimatedCounter({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime;
    let frame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);
      if (progress < 1) {
        setCount(Math.min(Math.floor(end * progress), end));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => frame && cancelAnimationFrame(frame);
  }, [end, duration, isInView]);

  return (
    <span
      ref={ref}
      className="block text-5xl lg:text-6xl font-bold text-foreground tabular-nums"
    >
      {count}{suffix}
    </span>
  );
}
