// components/CustomCursor.jsx
'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseEnter = () => setIsVisible(true);
    const mouseLeave = () => setIsVisible(false);

    // Add hover effects for interactive elements
    const linkHoverStart = () => setCursorVariant('hover');
    const linkHoverEnd = () => setCursorVariant('default');

    // Get all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', linkHoverStart);
      el.addEventListener('mouseleave', linkHoverEnd);
    });

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseenter', mouseEnter);
    document.addEventListener('mouseleave', mouseLeave);

    return () => {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseenter', mouseEnter);
      document.removeEventListener('mouseleave', mouseLeave);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', linkHoverStart);
        el.removeEventListener('mouseleave', linkHoverEnd);
      });
    };
  }, []);

  const variants = {
    default: {
      width: 10,
      height: 10,
      backgroundColor: '#fff',
      mixBlendMode: 'difference',
    },
    hover: {
      width: 32,
      height: 32,
      backgroundColor: '#000',
      // mixBlendMode: 'lighten',
    }
  };

  return (
    <motion.div
      className="fixed mix-blend-difference top-0 left-0 rounded-full pointer-events-none z-[9999]"
      variants={variants}
      animate={cursorVariant}
      style={{
        x: mousePosition.x - (cursorVariant === 'hover' ? 16 : 4),
        y: mousePosition.y - (cursorVariant === 'hover' ? 16 : 4),
        opacity: isVisible ? 1 : 0
      }}
      transition={{
        type: "spring",
        mass: 0.1,
        stiffness: 500,
        damping: 28
      }}
    />
  );
}