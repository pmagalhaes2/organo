import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { House } from "./components/House";

function App() {
  const houses = [
    { name: "House Arryn", primary: "#82CFFA", secondary: "#ECF8FE" },
    { name: "House Baratheon", primary: "#FEEC77", secondary: "#FFF5DA" },
    { name: "House Greyjoy", primary: "#3F3F3F", secondary: "#F2F2F2" },
    { name: "House Lannister", primary: "#E06B69", secondary: "#FDE7E8" },
    { name: "House Martell", primary: "#C68B6E", secondary: "#FAEAE3" },
    { name: "House Stark", primary: "#5B5B5B", secondary: "#F2F2F2" },
    { name: "House Targaryen", primary: "#FF905E", secondary: "#FFEEDF" },
    { name: "House Tully", primary: "#882A23", secondary: "#FDE7E8" },
    { name: "House Tyrell", primary: "#A6D157", secondary: "#F4FFF1" },
  ];

  const [personagens, setPersonagens] = useState([]);

  const register = (personagem) => {
    setPersonagens([...personagens, personagem]);
  };
  return (
    <div className="App">
      <Banner />
      <Form
        houses={houses.map((house) => house.name)}
        handleRegister={(personagem) => register(personagem)}
      />

      {houses.map((house) => (
        <House
          name={house.name}
          key={house.name}
          primary={house.primary}
          secondary={house.secondary}
        />
      ))}

    </div>
  );
}

export default App;
