import React from 'react';
import Header from '../components/Header';
import Benefits from '../components/Benefits';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import Differentials from '../components/Differentials';
import PersuasiveSection from '../components/PersuasiveSection';
import FAQSection from '../components/FAQSection';
import PriceSection from '../components/PriceSection';
import './styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App: React.FC = () => {
  return (
    <div className="landing-page">
      <Header />
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Domine Java e Transforme sua Carreira em 30 Dias!</h1>
            <p className="subheading">
              Um guia completo do zero ao avançado para você criar projetos profissionais e conquistar novas oportunidades.
            </p>
            <button className="cta-button">Garanta seu eBook Agora</button>
            <div className="price-details">
              <span className="old-price">De R$ 99,99</span>
              <span className="price-value">por apenas R$ 49,99!</span>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/Design sem nome-4.png" alt="Mockup do eBook" className="ebook-image"/>
          </div>
        </div>
      </section>
      <Differentials />
      <Benefits />
      <PersuasiveSection /> 
      <Testimonial />
      <PriceSection /> 
      <FAQSection /> 
      <Footer />
    </div>
  );
};

export default App;