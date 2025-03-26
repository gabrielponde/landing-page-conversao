import React from 'react';

const PersuasiveSection: React.FC = () => {
  return (
    <section id="persuasive" className="persuasive">
      <h2 className="persuasive-title">Está cansado de comprar eBooks que não fazem diferença?</h2>
      <p className="persuasive-text">Se você já comprou outros eBooks por aí, sabe como é frustrante investir seu tempo e dinheiro em materiais que não entregam o que prometem. EBooks que não oferecem conteúdo prático, não ajudam você a se destacar no mercado de trabalho ou que não oferecem a experiência de aprendizado que você merece.</p>
      
      <p className="persuasive-text"><strong>Este não é um desses casos!</strong> O eBook <strong>Java Mastery</strong> é cuidadosamente projetado para oferecer uma aprendizagem prática, com exemplos reais e exercícios que podem ser aplicados imediatamente. Prepare-se para desenvolver seu portfólio com projetos que realmente fazem a diferença na sua carreira!</p>

      <p className="persuasive-text">O conteúdo do <strong>Java Mastery</strong> foi elaborado por especialistas na área de desenvolvimento de software, que sabem o que funciona no mundo real. Cada lição foi projetada para preparar você para os desafios do mercado de trabalho, ensinando Java de uma maneira acessível e objetiva.</p>

      <div className="persuasive-cta">
        <h3 className="cta-title">Não deixe para amanhã o que pode mudar sua carreira hoje!</h3>
        <p className="cta-text">Ao adquirir o eBook <strong>Java Mastery</strong>, você não estará apenas comprando um livro – estará investindo no seu futuro profissional. E o melhor de tudo: você pode começar agora mesmo a transformar sua carreira com um curso estruturado, focado em resultados!</p>
        <button className="cta-button">Garanta seu eBook agora!</button>
      </div>

      <div className="guarantee">
        <h3 className="guarantee-title">Garantia de Satisfação</h3>
        <p className="guarantee-text">Estamos tão confiantes na qualidade do <strong>Java Mastery</strong> que oferecemos uma <strong>garantia de 30 dias</strong>: se você não estiver satisfeito com o conteúdo, basta nos avisar, e devolveremos seu dinheiro. Sem perguntas, sem complicações. Sua satisfação é nossa prioridade.</p>
      </div>

      <div className="comparison">
        <h3 className="comparison-title">Por que escolher o <strong>Java Mastery</strong> em vez de outros eBooks?</h3>
        <ul className="comparison-list">
          <li><strong>Conteúdo prático:</strong> Ao contrário de muitos eBooks que se limitam a teoria, o <strong>Java Mastery</strong> oferece exercícios práticos e exemplos reais para que você possa aplicar imediatamente seus conhecimentos.</li>
          <li><strong>Projetos reais:</strong> Não apenas código teórico – você criará projetos reais que farão parte do seu portfólio.</li>
          <li><strong>Estrutura objetiva:</strong> O curso é dividido de forma clara e objetiva, para que você possa avançar de maneira contínua e sem frustrações.</li>
          <li><strong>Mentoria opcional:</strong> Adicione sessões de mentoria para um aprendizado mais aprofundado e suporte contínuo enquanto avança no conteúdo.</li>
        </ul>
      </div>
    </section>
  );
};

export default PersuasiveSection;
