import { MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL, PHONE_DISPLAY, ADDRESS } from '../data/services';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <a href="#" className="footer__logo">
              UN<span>LORA</span>
            </a>
            <p className="footer__tagline">
              Tu servidor de confianza para servicios IMEI, FMI OFF y unlock.
            </p>
          </div>

          <div className="footer__col">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#servicios">IMEI Services</a></li>
              <li><a href="#servicios">FMI OFF / iCloud</a></li>
              <li><a href="#servicios">Activator Services</a></li>
              <li><a href="#servicios">Remote / Rentas</a></li>
              <li><a href="#servicios">Bypass Tools</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Plataforma</h4>
            <ul>
              <li><a href="#como-funciona">Cómo funciona</a></li>
              <li><a href="#recarga">Recargar crédito</a></li>
              <li><a href="#por-que">Por qué nosotros</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contacto</h4>
            <ul>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__contact"
                >
                  <WhatsAppIcon size={16} /> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <span className="footer__contact footer__contact--static">
                  <MapPin size={16} /> {ADDRESS}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 UNLORA · Higüey, República Dominicana. Todos los derechos reservados.</span>
          <span className="footer__nexix">
            Powered by <a href="#">NEXIX Tech Studio</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
