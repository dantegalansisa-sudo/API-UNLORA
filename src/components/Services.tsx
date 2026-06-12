import { motion } from 'framer-motion';
import {
  Smartphone,
  CloudOff,
  Zap,
  Monitor,
  Server,
  ShieldOff,
} from 'lucide-react';
import RevealText from './RevealText';
import { SERVICES, CHIP_LABELS } from '../data/services';
import type { Service } from '../data/services';
import { EASINGS } from '../utils/easings';

const ICONS: Record<string, React.ReactNode> = {
  'smartphone': <Smartphone size={24} />,
  'cloud-off': <CloudOff size={24} />,
  'zap': <Zap size={24} />,
  'monitor': <Monitor size={24} />,
  'server': <Server size={24} />,
  'shield-off': <ShieldOff size={24} />,
};

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

function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      className="service-card"
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
    >
      <div className="service-card__top">
        <div className="service-card__icon">{ICONS[service.icon]}</div>
        <span className={`chip chip--${service.chip}`}>{CHIP_LABELS[service.chip]}</span>
      </div>
      <div>
        <p className="service-card__cat">{service.category}</p>
        <h3 className="service-card__name">{service.name}</h3>
      </div>
      <div className="service-card__bottom">
        <span className="service-card__price">
          {service.credits} <small>créditos</small>
        </span>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="services" id="servicios">
      <div className="container">
        <div className="services__head">
          <div>
            <span className="section-eyebrow">Catálogo</span>
            <RevealText tag="h2" className="section-title" delay={0.1}>
              Servicios listos para procesar
            </RevealText>
            <p className="section-sub">
              IMEI, FMI OFF, activación y herramientas remotas — todo conectado
              por API a proveedores verificados.
            </p>
          </div>
        </div>

        <motion.div
          className="services__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
