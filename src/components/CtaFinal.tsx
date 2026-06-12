import { motion } from 'framer-motion';
import RevealText from './RevealText';
import MagneticButton from './MagneticButton';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL } from '../data/services';
import { EASINGS } from '../utils/easings';

export default function CtaFinal() {
  return (
    <section className="cta-final">
      <div className="container cta-final__inner">
        <RevealText tag="h2" className="cta-final__title" delay={0.1}>
          Empieza a procesar hoy mismo
        </RevealText>
        <motion.p
          className="cta-final__sub"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: EASINGS.smooth }}
        >
          Recarga tu crédito y accede al catálogo completo de servicios IMEI,
          FMI OFF y unlock.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.55, ease: EASINGS.smooth }}
        >
          <MagneticButton href={WHATSAPP_URL} className="btn-white">
            <WhatsAppIcon size={18} /> Hablar por WhatsApp
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
