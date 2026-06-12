import CustomCursor from './components/CustomCursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Recharge from './components/Recharge';
import Stats from './components/Stats';
import WhyUs from './components/WhyUs';
import CtaFinal from './components/CtaFinal';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <HowItWorks />
        <Recharge />
        <Stats />
        <WhyUs />
        <CtaFinal />
        <Footer />
      </main>
      <FloatingWhatsApp />
    </>
  );
}
