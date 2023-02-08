import { Character } from "../Character";
import "./House.css";

export const House = (props) => {
  return (
    props.characters.length > 0 && (
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
              key={character.nome}
              backgroundColor={props.primary}
            />
          ))}
        </div>
      </section>
    )
  );
};
