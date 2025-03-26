'use client'; 

import React, { useState } from 'react';

const FAQSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <h2>Perguntas Frequentes</h2>

      <div className="faq-item">
        <button className="faq-question" onClick={() => toggleAnswer(0)}>
          <span className="faq-icon">{isOpen === 0 ? '-' : '+'}</span>
          Como este eBook me ajudará a melhorar como desenvolvedor?
        </button>
        <div className={`faq-answer ${isOpen === 0 ? 'open' : ''}`}>
          O eBook oferece conceitos práticos, exercícios e projetos reais para que você possa aplicar seu conhecimento em Java, preparando-se para desafios no mercado de trabalho.
        </div>
      </div>

      <div className="faq-item">
        <button className="faq-question" onClick={() => toggleAnswer(1)}>
          <span className="faq-icon">{isOpen === 1 ? '-' : '+'}</span>
          Este eBook é adequado para iniciantes?
        </button>
        <div className={`faq-answer ${isOpen === 1 ? 'open' : ''}`}>
          Sim! O conteúdo foi elaborado para que iniciantes possam compreender a programação Java de maneira prática e eficiente, sem complicações.
        </div>
      </div>

      <div className="faq-item">
        <button className="faq-question" onClick={() => toggleAnswer(2)}>
          <span className="faq-icon">{isOpen === 2 ? '-' : '+'}</span>
          O eBook contém projetos prontos para eu usar?
        </button>
        <div className={`faq-answer ${isOpen === 2 ? 'open' : ''}`}>
          Sim! Além de exemplos e exercícios, você encontrará projetos reais que poderão ser adicionados ao seu portfólio.
        </div>
      </div>

      <div className="faq-item">
        <button className="faq-question" onClick={() => toggleAnswer(3)}>
          <span className="faq-icon">{isOpen === 3 ? '-' : '+'}</span>
          Qual o nível de dificuldade deste eBook?
        </button>
        <div className={`faq-answer ${isOpen === 3 ? 'open' : ''}`}>
          O eBook abrange desde os conceitos básicos até tópicos avançados, tornando-se acessível para iniciantes e desafiador para quem já tem alguma experiência com programação.
        </div>
      </div>

      <div className="faq-item">
        <button className="faq-question" onClick={() => toggleAnswer(4)}>
          <span className="faq-icon">{isOpen === 4 ? '-' : '+'}</span>
          Posso usar este eBook em meu ritmo?
        </button>
        <div className={`faq-answer ${isOpen === 4 ? 'open' : ''}`}>
          Sim, o eBook foi criado para ser flexível. Você pode estudar no seu próprio ritmo, revisando os conceitos e práticas conforme necessário.
        </div>
      </div>

      <div className="faq-item">
        <button className="faq-question" onClick={() => toggleAnswer(5)}>
          <span className="faq-icon">{isOpen === 5 ? '-' : '+'}</span>
          O que acontece se eu não entender algum conteúdo do eBook?
        </button>
        <div className={`faq-answer ${isOpen === 5 ? 'open' : ''}`}>
          O eBook oferece exemplos detalhados e exercícios práticos. Caso você tenha dificuldades, pode revisitar os capítulos e até mesmo procurar ajuda online em fóruns e comunidades de Java.
        </div>
      </div>

      <div className="faq-item">
        <button className="faq-question" onClick={() => toggleAnswer(6)}>
          <span className="faq-icon">{isOpen === 6 ? '-' : '+'}</span>
          O eBook inclui material extra além do conteúdo principal?
        </button>
        <div className={`faq-answer ${isOpen === 6 ? 'open' : ''}`}>
          Sim! Além do conteúdo principal, o eBook oferece recursos adicionais, como links para vídeos explicativos, exercícios extras e ferramentas que podem facilitar seu aprendizado.
        </div>
      </div>

      <div className="faq-item">
        <button className="faq-question" onClick={() => toggleAnswer(7)}>
          <span className="faq-icon">{isOpen === 7 ? '-' : '+'}</span>
          Qual é a garantia de satisfação do eBook?
        </button>
        <div className={`faq-answer ${isOpen === 7 ? 'open' : ''}`}>
          Oferecemos uma garantia de 30 dias. Se por qualquer motivo você não estiver satisfeito com o eBook, basta nos informar e devolveremos o seu dinheiro, sem perguntas.
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
