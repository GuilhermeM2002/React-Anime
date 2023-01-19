import { Card } from "../Card";

import "./Category.css";

export const Category = ({ cards, categoria, background, deletarCard }) => {
  return (
    <section className="category">
      <h1>{categoria}</h1>
      <div style={{ backgroundColor: background }}>
        <p>*Preencha o formulário para adicionar</p>
        {cards.map((card) => (
          <Card
            key={card.titulo}
            id={card.id}
            titulo={card.titulo}
            imagem={card.imagem}
            periodo={card.periodo}
            categoria={card.categoria}
            deletarCard={deletarCard}
          />
        ))}
      </div>
    </section>
  );
};
