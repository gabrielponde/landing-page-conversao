import React from 'react';

const PriceSection: React.FC = () => {
  return (
    <section id="price" className="price">
      <div className="price-container">
        <div className="price-content">
          <h2>OFERTA DE LANÇAMENTO</h2>
          
          <div className="timer">
            <div className="timer-item">
              <span className="timer-number">00</span>
              <span className="timer-label">horas</span>
            </div>
            <div className="timer-item">
              <span className="timer-number">00</span>
              <span className="timer-label">minutos</span>
            </div>
            <div className="timer-item">
              <span className="timer-number">00</span>
              <span className="timer-label">segundos</span>
            </div>
          </div>

          <div className="price-book">
            <div className="book-cover">
              <img src="/images/ebook-java.png" alt="Capa do eBook Java Mastery" />
            </div>
            
            <div className="price-details">
              <ul className="benefits-list">
                <li><i className="fas fa-check-circle"></i> eBook em PDF</li>
                <li><i className="fas fa-check-circle"></i> Videoaulas complementares</li>
                <li><i className="fas fa-check-circle"></i> Códigos-fonte dos exemplos</li>
                <li><i className="fas fa-check-circle"></i> Download imediato</li>
                <li><i className="fas fa-check-circle"></i> Garantia de 7 dias</li>
              </ul>

              <div className="price-values">
                <span className="old-price">De R$ 99,99</span>
                <span className="price-value">Por R$ 49,99</span>
                <span className="installment">ou 5x de R$ 10,00 sem juros</span>
              </div>

              <button className="cta-button">ADQUIRIR AGORA!</button>
            </div>
          </div>
        </div>

        <div className="guarantee-banner">
          <div className="guarantee-content">
            <h3>7 DIAS DE GARANTIA</h3>
            <p>
              O "Java Mastery" está 100% coberto pela minha garantia TOTAL "Sem Perguntas e Sem Arrependimentos". 
              Adquira agora e se por acaso se arrepender ou achar que o material não vai te ajudar, 
              eu devolvo seu dinheiro integralmente. O risco é todo meu!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;