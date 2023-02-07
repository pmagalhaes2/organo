import "./Character.css";

export const Character = (props) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          src="https://github.com/pmagalhaes2.png"
          alt="Imagem profile"
        ></img>
      </div>
      <div className="text-container">
        <h4>Patricia Magalhães</h4>
        <h5>Desenvolvedora de Software</h5>
      </div>
    </div>
  );
};
