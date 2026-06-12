import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { EASINGS } from '../utils/easings';

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  /** Palabras (en minúsculas) que se pintan con el gradiente de marca */
  gradientWords?: string[];
}

const wordVariants: Variants = {
  hidden: { y: '110%', rotate: 2 },
  visible: {
    y: 0,
    rotate: 0,
    transition: { duration: 0.85, ease: EASINGS.premium },
  },
};

export default function RevealText({
  children,
  className = '',
  delay = 0,
  tag = 'h1',
  gradientWords = [],
}: RevealTextProps) {
  const words = children.split(' ');
  const MotionTag = motion[tag];

  return (
    <MotionTag
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', columnGap: '0.28em', rowGap: '0.1em' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.07, delayChildren: delay } },
      }}
    >
      {words.map((word, i) => (
        <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span
            className={gradientWords.includes(word.toLowerCase().replace(/[^\wáéíóúñ—-]/gi, '')) ? 'grad' : undefined}
            style={{ display: 'inline-block' }}
            variants={wordVariants}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
