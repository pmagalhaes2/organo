import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";

function App() {
  const [personagens, setPersonagens] = useState([]);

  const register = (personagem) => {
    setPersonagens([...personagens, personagem]);
  };
  return (
    <div className="App">
      <Banner />
      <Form handleRegister={(personagem) => register(personagem)} />
    </div>
  );
}

export default App;
