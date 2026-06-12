import { motion } from 'framer-motion';
import { EASINGS } from '../utils/easings';

const CARRIERS = ['T-MOBILE', 'AT&T', 'VERIZON', 'CLARO', 'ALTICE', 'SPRINT', 'METRO'];

export default function TrustBar() {
  return (
    <div className="trustbar">
      <div className="container">
        <motion.p
          className="trustbar__label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Compatibles con las principales operadoras
        </motion.p>
        <motion.div
          className="trustbar__logos"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
        >
          {CARRIERS.map((name) => (
            <motion.span
              key={name}
              className="trustbar__logo"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: EASINGS.smooth },
                },
              }}
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
