import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EASINGS } from '../utils/easings';

type Phase = 'pending' | 'processing' | 'done';

interface Line {
  key: string;
  val: string;
  cls?: 'accent' | 'ok';
}

const ALL_LINES: Line[] = [
  { key: 'IMEI', val: '35-694201-873455-0' },
  { key: 'SERVICIO', val: 'FMI OFF — iPhone 15 Pro' },
  { key: 'API', val: 'conectando proveedor…', cls: 'accent' },
  { key: 'RESPUESTA', val: '✓ orden aceptada', cls: 'ok' },
];

const CYCLE_MS = 5200;

export default function ServiceProcessor() {
  const [phase, setPhase] = useState<Phase>('pending');
  const [visibleLines, setVisibleLines] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    setPhase('pending');
    setVisibleLines(0);

    timers.push(setTimeout(() => setVisibleLines(1), 400));
    timers.push(setTimeout(() => setVisibleLines(2), 1000));
    timers.push(setTimeout(() => { setPhase('processing'); setVisibleLines(3); }, 1700));
    timers.push(setTimeout(() => setVisibleLines(4), 3300));
    timers.push(setTimeout(() => setPhase('done'), 3900));
    timers.push(setTimeout(() => setCycle(c => c + 1), CYCLE_MS));

    return () => timers.forEach(clearTimeout);
  }, [cycle]);

  const progressTarget = phase === 'pending' ? '6%' : phase === 'processing' ? '72%' : '100%';
  const pctLabel = phase === 'pending' ? '0%' : phase === 'processing' ? '72%' : '100%';

  return (
    <motion.div
      className="processor-wrap"
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.5, ease: EASINGS.premium }}
    >
      <motion.div
        className="processor"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="processor__header">
          <div className="processor__dots">
            <span /><span /><span />
          </div>
          <span className="processor__label">Service Processor · Live</span>
        </div>

        <div className="processor__lines">
          <AnimatePresence mode="popLayout">
            {ALL_LINES.slice(0, visibleLines).map((line) => (
              <motion.div
                key={`${cycle}-${line.key}`}
                className="processor__line"
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: EASINGS.snappy }}
              >
                <span className="processor__line-key">{line.key}</span>
                <span className={`processor__line-val ${line.cls ?? ''}`}>{line.val}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="processor__bar">
          <motion.div
            className="processor__bar-fill"
            initial={{ width: '0%' }}
            animate={{ width: progressTarget }}
            transition={{ duration: phase === 'done' ? 0.5 : 1.4, ease: EASINGS.smooth }}
          />
        </div>

        <div className="processor__footer">
          <span className="processor__pct">{pctLabel}</span>
          <AnimatePresence mode="wait">
            {phase === 'pending' && (
              <motion.span
                key="pending"
                className="chip chip--pending"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.25 }}
              >
                <span className="chip__pulse" /> Pendiente
              </motion.span>
            )}
            {phase === 'processing' && (
              <motion.span
                key="processing"
                className="chip chip--processing"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.25 }}
              >
                <motion.span
                  className="chip__pulse"
                  animate={{ opacity: [1, 0.3, 1], scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                Procesando
              </motion.span>
            )}
            {phase === 'done' && (
              <motion.span
                key="done"
                className="chip chip--done"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.25 }}
              >
                ✓ Completado
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
