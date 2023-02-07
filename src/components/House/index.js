import "./House.css";

export const House = (props) => {
  return (
    <section
      className="house-container"
      style={{ backgroundColor: props.secondary }}
    >
      <h3 style={{borderColor: props.primary}}>{props.name}</h3>
    </section>
  );
};
