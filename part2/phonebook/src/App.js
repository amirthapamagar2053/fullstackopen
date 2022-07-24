import { useEffect, useState } from "react";
import axios from "axios";
// import Filter from "./Search";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNum] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const inputtext = (event) => {
    setText(event.target.value);
  };
  const test = persons.filter((x) => x.name.includes(text));
  const displayName = test.length === 0 ? persons : test;

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      persons.map((x) => x.name).includes(newName) &&
      !persons.map((x) => x.number).includes(newNum)
    ) {
      if (
        window.confirm(
          `${newName} is already added to phonebook,replace the old number with a new one?`
        )
      ) {
        let filterObj = persons.filter((x) => x.name.includes(newName));
        let filternumber = { ...filterObj[0], number: newNum };
        axios
          .put(`http://localhost:3001/persons/${filterObj[0].id}`, filternumber)
          .then((response) => {
            let filarr = persons.map((x) =>
              x.id !== filternumber.id ? x : filternumber
            );
            setPersons(filarr);
            setNewName("");
            setNum("");
          });
      }
    } else if (persons.map((x) => x.name).includes(newName)) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      const newObj = {
        name: newName,
        number: newNum,
        id: persons.length + 1,
      };
      axios.post("http://localhost:3001/persons", newObj).then((response) => {
        setPersons([...persons, newObj]);
        setNewName("");
        setNum("");
      });
    }
  };
  const changeHandler = (event) => {
    setNewName(event.target.value);
  };
  const changeNumHandler = (event) => {
    setNum(event.target.value);
  };
  const clickDel = (delname, delid) => {
    window.confirm(`Delete ${delname} ?`)
      ? axios
          .delete(`http://localhost:3001/persons/${delid}`)
          .then((response) => {
            const filtarr = persons.filter((x) => x.id !== delid);
            setPersons(filtarr);
          })
      : console.log("not deleted");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        filter shown with
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
            {Element.name} {Element.number}{" "}
            <button
              onClick={() => {
                clickDel(Element.name, Element.id);
              }}
            >
              delete
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default App;
