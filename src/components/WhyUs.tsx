import { motion } from 'framer-motion';
import {
  Plug,
  Zap,
  Headphones,
  BadgeDollarSign,
  Wallet,
  LayoutGrid,
} from 'lucide-react';
import RevealText from './RevealText';
import { EASINGS } from '../utils/easings';

const FEATURES = [
  {
    icon: <Plug size={24} />,
    title: 'Auto API',
    text: 'Conexión directa con proveedores verificados. Tus órdenes entran al sistema sin intervención manual.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Procesamiento instantáneo',
    text: 'La mayoría de los servicios se procesan en segundos, no en días.',
  },
  {
    icon: <Headphones size={24} />,
    title: 'Soporte directo',
    text: 'Atención por WhatsApp con personas reales que conocen el negocio.',
  },
  {
    icon: <BadgeDollarSign size={24} />,
    title: 'Precios mayoristas',
    text: 'Tarifas en créditos pensadas para revendedores y técnicos con volumen.',
  },
  {
    icon: <Wallet size={24} />,
    title: 'Recarga fácil',
    text: 'Transferencia a Banco Popular y saldo acreditado en minutos.',
  },
  {
    icon: <LayoutGrid size={24} />,
    title: 'Catálogo amplio',
    text: 'IMEI, FMI OFF, activator, remote y bypass — todo en un solo panel.',
  },
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

export default function WhyUs() {
  return (
    <section className="whyus" id="por-que">
      <div className="container">
        <div className="whyus__head">
          <span className="section-eyebrow">Por qué nosotros</span>
          <RevealText tag="h2" className="section-title" delay={0.1}>
            Hecho para los que procesan en serio
          </RevealText>
          <p className="section-sub">
            Infraestructura de servidor real, no promesas. Esto es lo que te llevas.
          </p>
        </div>

        <motion.div
          className="whyus__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              className="feature-card"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              <div className="feature-card__icon">{feature.icon}</div>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__text">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
