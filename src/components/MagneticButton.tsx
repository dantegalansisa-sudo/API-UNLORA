import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  magnetRadius?: number;
  magnetStrength?: number;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = '',
  magnetRadius = 90,
  magnetStrength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < magnetRadius) {
      setPos({ x: dx * magnetStrength, y: dy * magnetStrength });
    }
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block' }}
    >
      <motion.div
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {href ? (
          <a href={href} onClick={onClick} className={className}>
            {children}
          </a>
        ) : (
          <button onClick={onClick} className={className}>
            {children}
          </button>
        )}
      </motion.div>
    </div>
  );
}
