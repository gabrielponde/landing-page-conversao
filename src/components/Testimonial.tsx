import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>O que nossos alunos dizem:</h2>
      <div className="testimonial">
        <p> ⭐️⭐️⭐️⭐️⭐️ &quot;O curso foi excelente! Em poucas semanas, já estava desenvolvendo meu primeiro projeto em Java. Recomendo muito!&quot;</p>
        <span>- João Silva, Desenvolvedor</span>
      </div>
      <div className="testimonial">
        <p> ⭐️⭐️⭐️⭐️⭐️ &quot;A didática do eBook e dos exemplos práticos fez toda a diferença na minha aprendizagem!&quot;</p>
        <span>- Maria Oliveira, Estudante de TI</span>
      </div>
      <div className="testimonial">
        <p> ⭐️⭐️⭐️⭐️⭐️ &quot;O conteúdo do curso me proporcionou o conhecimento necessário para meu primeiro estágio como desenvolvedor Java. Agradeço muito!&quot;</p>
        <span>- Carlos Souza, Estagiário de TI</span>
      </div>
      <div className="testimonial">
        <p> ⭐️⭐️⭐️⭐️⭐️ &quot;Eu não sabia nada sobre programação antes desse curso, e hoje já desenvolvo aplicações profissionais. Vale muito a pena!&quot;</p>
        <span>- Ana Costa, Desenvolvedora Júnior</span>
      </div>
    </section>
  );
};

export default Testimonial;