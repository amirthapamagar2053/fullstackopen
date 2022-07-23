import { useState } from "react";
import axios from "axios";
// import Filter from "./Search";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNum] = useState("");
  const [text, setText] = useState("");

  axios.get("http://localhost:3001/persons").then((response) => {
    setPersons(response.data);
  });

  const inputtext = (event) => {
    setText(event.target.value);
  };
  const test = persons.filter((x) => x.name.includes(text));
  const displayName = test.length === 0 ? persons : test;

  const submitHandler = (event) => {
    event.preventDefault();

    if (persons.map((x) => x.name).includes(newName)) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      const newObj = {
        name: newName,
        number: newNum,
        id: persons.length + 1,
      };
      setPersons([...persons, newObj]);
      setNewName("");
      setNum("");
    }
  };
  const changeHandler = (event) => {
    setNewName(event.target.value);
  };
  const changeNumHandler = (event) => {
    setNum(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <input value={text} onChange={inputtext} id="test" />
      </form>

      <form onSubmit={submitHandler}>
        <div>
          name: <input value={newName} onChange={changeHandler} />
        </div>
        <div>
          number: <input value={newNum} onChange={changeNumHandler} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {displayName.map((Element) => {
        return (
          <li key={Element.id}>
            {Element.name} {Element.number}
          </li>
        );
      })}
    </div>
  );
};

export default App;
