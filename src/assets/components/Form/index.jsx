import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Select";
import { v4 as uuidv4 } from "uuid";
import { GiTrade } from "react-icons/gi";
import "./Form.css";

export const Form = (props) => {
  const [titulo, setTitulo] = useState("");
  const [imagem, setImagem] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [form, setForm] = useState(true);

  const salvar = (event) => {
    event.preventDefault();
    props.cardCadastrado({
      id: uuidv4(),
      titulo,
      imagem,
      periodo,
      categoria,
    });

    setTitulo("");
    setImagem("");
    setPeriodo("");
  };
  return (
    <div className="form">
      {form ? (
        <form onSubmit={salvar}>
          <Input
            valor={titulo}
            placeholder="Título da obra"
            alterado={(valor) => setTitulo(valor)}
          />
          <Input
            valor={imagem}
            placeholder="URL da imagem"
            alterado={(valor) => setImagem(valor)}
          />
          <Input
            valor={periodo}
            placeholder="Intevalo em que planeja assistir"
            alterado={(valor) => setPeriodo(valor)}
          />
          <Select valor={categoria} alterado={(valor) => setCategoria(valor)} />
          <Button />
        </form>
      ) : (
        ""
      )}
      <GiTrade
        className="tradeIcon"
        onClick={() => {
          setForm((form) => !form);
        }}
      />
    </div>
  );
};
