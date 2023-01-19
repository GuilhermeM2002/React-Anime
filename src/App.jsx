import { useState } from "react";
import "./App.css";
import { Category } from "./assets/components/Category";

import { Form } from "./assets/components/Form";
import { Header } from "./assets/components/Header";
import { List } from "./assets/components/List";

function App() {
  const categorias = [
    {
      nome: "Shonen",
      cor: "#EB455F",
    },
    {
      nome: "Shoujo",
      cor: "#464660",
    },
    {
      nome: "Sheinen",
      cor: "#368B85",
    },
    {
      nome: "Josei",
      cor: "#7B814F",
    },
  ];

  const [cards, setCards] = useState([]);
  const novoCardAdicionado = (card) => {
    setCards([...cards, card]);
  };
  const deletarCard = (id) => {
    setCards(cards.filter((card) => id !== card.id));
  };
  return (
    <>
      <Header />
      <section>
        <List />
        <Form cardCadastrado={(card) => novoCardAdicionado(card)} />
      </section>
      {categorias.map((categoria) => (
        <Category
          key={categoria.nome}
          categoria={categoria.nome}
          background={categoria.cor}
          cards={cards.filter((card) => card.categoria === categoria.nome)}
          deletarCard={deletarCard}
        />
      ))}
    </>
  );
}

export default App;
