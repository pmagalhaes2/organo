import "./Dropdown.css";

export const Dropdown = (props) => {
  const handleClick = (e) => {
    props.handleChange(e.target.value);
  };

  return (
    <div className="dropdown-container">
      <label>{props.label}</label>
      <select onChange={handleClick} value={props.value} required>
        {props.items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
