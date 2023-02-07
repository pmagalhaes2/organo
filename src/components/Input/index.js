import "./Input.css";

export const Input = (props) => {
  const handleClick = (e) => {
    props.handleChange(e.target.value);
  };

  return (
    <div className="input-container">
      <label>{props.label}</label>
      <input
        onChange={handleClick}
        value={props.value}
        placeholder={props.placeholder}
        required
      ></input>
    </div>
  );
};
