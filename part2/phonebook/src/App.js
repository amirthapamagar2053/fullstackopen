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
        console.log("I am in update");
        let filterObj = persons.filter((x) => x.name.includes(newName));
        console.log("the filterObj is", filterObj);
        let filternumber = { ...filterObj[0], number: newNum };
        phonebookService
          .update(filterObj[0].id, filternumber)
          .then((response) => {
            console.log("the response is", response);
            if (response !== "error") {
              setPersons(
                persons.map((x) =>
                  x.id !== filternumber.id ? x : filternumber
                )
              );
              setMessage(
                `Information of ${filternumber.name} has been updated`
              );
              setStatus("message");
              setNewName("");
              setNum("");
            } else {
              setMessage(
                `Information of ${filternumber.name} has been deleted`
              );
              setStatus("delete");
            }
          })
          .catch((error) => console.log(error));
        // .catch((error) => {
        //   console.log("the error is", error.message);
        //   setMessage(`Information of ${filternumber.name} has been deleted`);
        //   setStatus("delete");
        // });
      }
    } else {
      const newObj = {
        name: newName,
        number: newNum,
        id: persons.length + 1,
      };
      phonebookService
        .create(newObj)
        .then((response) => {
          console.log(response);
          if (response.error) {
            //Condition for the incorrect data format from the express server
            setMessage("Enter the data correctly");
            setStatus("delete");
          }
          // Condition for handling data from the response from the express server
          // else if (response.unique) {
          //   setMessage("Name must be unique");
          //   setStatus("delete");
          // }
          else {
            setPersons([...persons, response]);
            setStatus("message");
            setMessage("Added " + newName);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
            setNewName("");
            setNum("");
          }
        })
        .catch((error) => {
          console.log("the catch error is", error.response.data.error);
          console.dir(error);
          setMessage(error.response.data.error); //Handling the error from the mongoose schema

          setTimeout(() => {
            setMessage(null);
          }, 5000);
          setStatus("delete");
          // console.log("the error is ", error);
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
      ? phonebookService.remove(delid).then((response) => {
          const filtarr = persons.filter((x) => x.id !== delid);
          setPersons(filtarr);
          console.log(persons);
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
