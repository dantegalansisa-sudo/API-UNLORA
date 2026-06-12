import { motion } from 'framer-motion';
import RevealText from './RevealText';
import { EASINGS } from '../utils/easings';

const STEPS = [
  {
    num: '01',
    title: 'Recarga tu crédito',
    text: 'Transferencia directa a Banco Popular. Tu saldo se acredita en minutos.',
  },
  {
    num: '02',
    title: 'Elige tu servicio',
    text: 'Catálogo completo de IMEI, unlock, FMI OFF y activator. Precios claros en créditos.',
  },
  {
    num: '03',
    title: 'Procesamiento auto',
    text: 'La plataforma conecta con el proveedor vía API y procesa tu orden al instante.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.15 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASINGS.premium },
  },
};

export default function HowItWorks() {
  return (
    <section className="how" id="como-funciona">
      <div className="container">
        <div className="how__head">
          <span className="section-eyebrow">Proceso</span>
          <RevealText tag="h2" className="section-title" delay={0.1}>
            Tres pasos. Cero fricción.
          </RevealText>
          <p className="section-sub">
            Del depósito al servicio procesado en minutos — sin intermediarios manuales.
          </p>
        </div>

        <motion.div
          className="how__steps"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="how__line" aria-hidden="true">
            <svg viewBox="0 0 100 2" preserveAspectRatio="none">
              <motion.line
                x1="0" y1="1" x2="100" y2="1"
                stroke="url(#howGrad)"
                strokeWidth="2"
                strokeDasharray="100"
                initial={{ strokeDashoffset: 100 }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.6, delay: 0.4, ease: 'easeInOut' }}
              />
              <defs>
                <linearGradient id="howGrad" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {STEPS.map((step) => (
            <motion.div key={step.num} className="how-step" variants={stepVariants}>
              <div className="how-step__num">{step.num}</div>
              <h3 className="how-step__title">{step.title}</h3>
              <p className="how-step__text">{step.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
