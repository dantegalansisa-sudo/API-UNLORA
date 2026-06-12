import { useState } from 'react';
import { motion } from 'framer-motion';
import { Landmark, Copy, Check, Coins } from 'lucide-react';
import RevealText from './RevealText';
import MagneticButton from './MagneticButton';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL } from '../data/services';
import { EASINGS } from '../utils/easings';

const BANK_DATA = {
  banco: 'Banco Popular',
  cuenta: '789-456123-0',
  titular: 'UNLORA SRL',
  tipo: 'Ahorros',
};

const STEPS = [
  {
    title: 'Transfiere',
    text: 'Envía el monto a la cuenta de Banco Popular desde tu app bancaria.',
  },
  {
    title: 'Envía el comprobante',
    text: 'Comparte la captura del comprobante por WhatsApp.',
  },
  {
    title: 'Saldo acreditado',
    text: 'Tu crédito se refleja en la plataforma en minutos.',
  },
];

export default function Recharge() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = `Banco: ${BANK_DATA.banco}\nCuenta: ${BANK_DATA.cuenta}\nTitular: ${BANK_DATA.titular}\nTipo: ${BANK_DATA.tipo}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard no disponible */
    }
  };

  return (
    <section className="recharge" id="recarga">
      <div className="recharge__glow" />
      <div className="container recharge__inner">
        <div className="recharge__head">
          <span className="section-eyebrow">Recarga de crédito</span>
          <RevealText tag="h2" className="section-title" delay={0.1}>
            Recarga tu saldo en minutos
          </RevealText>
          <p className="section-sub">
            Transferencia directa a Banco Popular. Sin esperas largas, sin
            procesos complicados.
          </p>
        </div>

        <div className="recharge__grid">
          <motion.div
            className="bank-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASINGS.premium }}
          >
            <div className="bank-card__badge">
              <span className="bank-card__badge-icon"><Landmark size={22} /></span>
              Banco Popular
            </div>
            <div className="bank-card__rows">
              <div className="bank-card__row">
                <span className="bank-card__key">Cuenta</span>
                <span className="bank-card__val">{BANK_DATA.cuenta}</span>
              </div>
              <div className="bank-card__row">
                <span className="bank-card__key">Titular</span>
                <span className="bank-card__val">{BANK_DATA.titular}</span>
              </div>
              <div className="bank-card__row">
                <span className="bank-card__key">Tipo de cuenta</span>
                <span className="bank-card__val">{BANK_DATA.tipo}</span>
              </div>
            </div>
            <button
              className={`copy-btn ${copied ? 'copied' : ''}`}
              onClick={handleCopy}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Copiado' : 'Copiar datos'}
            </button>
          </motion.div>

          <motion.div
            className="recharge-steps"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASINGS.premium }}
          >
            <h3 className="recharge-steps__title">Pasos para recargar</h3>
            <ol className="recharge-steps__list">
              {STEPS.map((step, i) => (
                <li key={step.title} className="recharge-steps__item">
                  <span className="recharge-steps__num">{i + 1}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <span className="recharge__usdt">
              <Coins size={15} /> USDT — próximamente
            </span>
          </motion.div>
        </div>

        <motion.div
          className="recharge__cta"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASINGS.smooth }}
        >
          <MagneticButton href={WHATSAPP_URL} className="btn-primary">
            <WhatsAppIcon size={18} /> Recargar por WhatsApp
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
