import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap } from 'lucide-react';
import RevealText from './RevealText';
import MagneticButton from './MagneticButton';
import ServiceProcessor from './ServiceProcessor';
import { EASINGS } from '../utils/easings';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const glowY = useTransform(scrollYProgress, [0, 0.3], [0, 120]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.3]);

  return (
    <header className="hero">
      <motion.div className="hero__glow" style={{ y: glowY, opacity: glowOpacity }} />
      <div className="hero__grid-bg" />

      <div className="container hero__inner">
        <div>
          <motion.span
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASINGS.smooth }}
          >
            <Zap size={14} /> Servidor de Servicios IMEI &amp; Unlock
          </motion.span>

          <RevealText
            tag="h1"
            className="hero__title"
            delay={0.3}
            gradientWords={['instante']}
          >
            Desbloquea, activa y procesa — al instante.
          </RevealText>

          <motion.p
            className="hero__sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: EASINGS.smooth }}
          >
            La plataforma que conecta tu negocio de unlock con los mejores
            proveedores. Recarga, elige y deja que el sistema haga el resto.
          </motion.p>

          <motion.div
            className="hero__ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05, ease: EASINGS.smooth }}
          >
            <MagneticButton href="#recarga" className="btn-primary">
              Recargar Crédito
            </MagneticButton>
            <MagneticButton href="#servicios" className="btn-ghost" magnetStrength={0.25}>
              Ver Servicios
            </MagneticButton>
          </motion.div>
        </div>

        <ServiceProcessor />
      </div>
    </header>
  );
}
