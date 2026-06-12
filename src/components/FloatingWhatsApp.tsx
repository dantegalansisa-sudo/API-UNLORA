import { motion } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL } from '../data/services';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wa"
      aria-label="Escríbenos por WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
    >
      <WhatsAppIcon size={30} />
    </motion.a>
  );
}
