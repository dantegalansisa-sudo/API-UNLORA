import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import { EASINGS } from '../utils/easings';

const STATS = [
  { value: <AnimatedCounter target={15000} prefix="+" />, label: 'Servicios procesados' },
  { value: <AnimatedCounter target={99.2} suffix="%" decimals={1} />, label: 'Tasa de éxito' },
  { value: <><span>&lt;</span><AnimatedCounter target={2} suffix="min" /></>, label: 'Tiempo promedio' },
  { value: <span>24/7</span>, label: 'Disponibilidad' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: EASINGS.premium },
  },
};

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <motion.div
          className="stats__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} className="stat" variants={cardVariants}>
              <div className="stat__value">{stat.value}</div>
              <div className="stat__label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
