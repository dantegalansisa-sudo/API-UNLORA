import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const INTERACTIVE = 'a, button, .service-card, .feature-card, .stat, .bank-card';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const springX = useSpring(ringX, springConfig);
  const springY = useSpring(ringY, springConfig);

  useEffect(() => {
    const ring = document.getElementById('cursor-ring');

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 4);
      cursorY.set(e.clientY - 4);
      ringX.set(e.clientX - 18);
      ringY.set(e.clientY - 18);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(INTERACTIVE)) {
        ring?.classList.add('cursor--hover');
      } else {
        ring?.classList.remove('cursor--hover');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleOver);
    };
  }, [cursorX, cursorY, ringX, ringY]);

  return (
    <>
      <motion.div className="cursor-dot" style={{ x: cursorX, y: cursorY }} />
      <motion.div
        id="cursor-ring"
        className="cursor-ring"
        style={{ x: springX, y: springY }}
      />
    </>
  );
}
