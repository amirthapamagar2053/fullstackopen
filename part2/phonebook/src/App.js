import { useEffect, useState } from "react";
import phonebookService from "./services/phonebook";
import PersonSubmit from "./PersonSubmit";
import Content from "./Content";
import Search from "./Search";
import Notification from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNum] = useState("");
  const [text, setText] = useState("");
  const [message, setMessage] = useState(null);
  const [classStatus, setStatus] = useState("");

  useEffect(() => {
    phonebookService.getAll().then((data) => {
      setPersons(data);
    });
  }, []);

  const inputtext = (event) => {
    setText(event.target.value);
  };
  const test = persons.filter((x) => x.name.includes(text));
  const displayName = test.length === 0 ? persons : test;

  const submitHandler = (event) => {
    console.log("Submit triggered");
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
        phonebookService
          .update(filterObj[0].id, filternumber)
          .then((response) => {
            let filarr = persons.map((x) =>
              x.id !== filternumber.id ? x : filternumber
            );
            setPersons(filarr);
            setMessage(`Information of ${filternumber.name} has been updated`);
            setStatus("message");
            setNewName("");
            setNum("");
          })
          .catch((error) => {
            setMessage(`Information of ${filternumber.name} has been deleted`);
            setStatus("delete");
          });
      }
    } else if (persons.map((x) => x.name).includes(newName)) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      console.log(persons.length);
      const newObj = {
        name: newName,
        number: newNum,
        id: persons.length + 1,
      };
      phonebookService
        .create(newObj)
        .then((response) => {
          console.log("the response is", response);
          setPersons([...persons, response]);
          setStatus("message");
          setMessage("Added " + newName);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
          setNewName("");
          setNum("");
        })
        .catch((error) => {
          console.log("the error is ", error);
        });
    }
  };
  const changeHandler = (event) => {
    console.log("name entered");
    setNewName(event.target.value);
  };
  const changeNumHandler = (event) => {
    console.log("num entered");
    setNum(event.target.value);
  };
  const clickDel = (delname, delid) => {
    window.confirm(`Delete ${delname} ?`)
      ? phonebookService.remove(delid).then((response) => {
          const filtarr = persons.filter((x) => x.id !== delid);
          setPersons(filtarr);
          setMessage(`${delname} has been deleted`);
          setStatus("delete");
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        })
      : console.log("not deleted");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification classStatus={classStatus} message={message} />
      <Search text={text} inputtext={inputtext} />
      <PersonSubmit
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        changeNumHandler={changeNumHandler}
        newName={newName}
        newNum={newNum}
      />
      &nbsp;
      <h2>Numbers</h2>
      <Content displayName={displayName} clickDel={clickDel} />
    </div>
  );
};

export default App;
