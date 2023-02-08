import "./Form.css";
import { Input } from "../Input";
import { Dropdown } from "../Dropdown";
import { Button } from "../Button";
import { useState } from "react";

export const Form = (props) => {

  const [nome, setNome] = useState("");
  const [sede, setSede] = useState("");
  const [imagem, setImagem] = useState("");
  const [casa, setCasa] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleRegister({
      nome,
      sede,
      imagem,
      casa,
    });
  };

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do personagem</h2>
        <Input
          label="Nome"
          placeholder="Digite o nome do personagem"
          value={nome}
          handleChange={(value) => setNome(value)}
        />
        <Input
          label="Sede"
          placeholder="Digite a sede da Casa"
          value={sede}
          handleChange={(value) => setSede(value)}
        />
        <Input
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          value={imagem}
          handleChange={(value) => setImagem(value)}
        />
        <Dropdown
          label="Casa"
          items={props.houses}
          value={casa}
          handleChange={(value) => setCasa(value)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};
