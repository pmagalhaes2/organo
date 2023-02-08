import "./Character.css";

export const Character = ({name, image, headOffice, backgroundColor}) => {
  return (
    <div className="card-container">
      <div className="image-container" style={{ backgroundColor: backgroundColor}}>
        <img
          src={image}
          alt={name}
        ></img>
      </div>
      <div className="text-container">
        <h4>{name}</h4>
        <h5>{headOffice}</h5>
      </div>
    </div>
  );
};
