import { useState } from "react";

function App() {
  const [count, setCount] = useState(4);
  const [name, setName] = useState("");

  const handleClick = () => {
    setCount((count) => count + 2);
    setCount((coount) => coount + 2);
  };

  const [person, setPerson] = useState({ name: "", family: "" });

  const handleClick2 = (name) => {
    setName(name);
  };

  const [chars, setChar] = useState(["a", "b", "c", "d"]);
  const [newChar , setNewChar] = useState('');

  return (
    <>
      <button onClick={handleClick}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <p>count = {count}</p>
      <button onClick={() => handleClick2("Ali")}>Name</button>
      <p>Name = {name}</p>1
      <br />
      <br />
      <label htmlFor="nameTxt">Name: </label>
      <input
        type="text"
        name="nameTxt"
        id="nameTxt"
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
      <label htmlFor="familyTxt">Family: </label>
      <input
        type="text"
        name="familyTxt"
        id="familyTxt"
        onChange={(e) => setPerson({ ...person, family: e.target.value })}
      />
      <h3>name: {person.name}</h3>
      <h3>family: {person.family}</h3>
      <br />
      <br />
      <label>Add Char: </label>
      <input type="text" name="" id="" onChange={(e) => setNewChar(e.target.value)} />
      <button onClick={() => setChar([...chars , newChar])}>Add</button>
      <ul>
        {chars.map(char => <li>{char}</li>)}
      </ul>
    </>
  );
}

export default App;
