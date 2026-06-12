import { motion } from 'framer-motion';
import { EASINGS } from '../utils/easings';

const LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Recarga', href: '#recarga' },
  { label: 'Por qué nosotros', href: '#por-que' },
];

export default function Nav() {
  return (
    <motion.nav
      className="nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASINGS.premium }}
    >
      <div className="container nav__inner">
        <a href="#" className="nav__logo">
          UN<span>LORA</span>
        </a>
        <ul className="nav__links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a href="#recarga" className="nav__cta">Recargar Crédito</a>
      </div>
    </motion.nav>
  );
}
