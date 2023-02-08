import { Character } from "../Character";
import "./House.css";

export const House = (props) => {
  return (
    <section
      className="house-container"
      style={{ backgroundColor: props.secondary }}
    >
      <h3 style={{ borderColor: props.primary }}>{props.name}</h3>
      <div className="character-container">
        {props.characters.map((character) => (
          <Character
            image={character.imagem}
            name={character.nome}
            headOffice={character.sede}
          />
        ))}
      </div>
    </section>
  );
};
