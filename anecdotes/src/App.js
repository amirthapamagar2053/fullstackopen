import { useState } from "react";
import Button from "./Button";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);

  const [obj, setObj] = useState({});

  const countVote = () => {
    let temp = Object.keys(obj);
    let keys = anecdotes[selected];
    if (temp.length === 0) {
      setObj({ ...obj, [keys]: 1 });
    } else {
      if (temp.includes(keys)) {
        setObj({ ...obj, [keys]: obj[keys] + 1 });
      } else {
        setObj({ ...obj, [keys]: 1 });
      }
    }
  };

  const changePara = () => {
    if (selected === anecdotes.length - 1) {
      setSelected(0);
    } else {
      setSelected(selected + 1);
    }
  };

  const analyzeVotes = () => {
    let temp = 0;
    let tempkey = "";
    let result = 0;
    for (let key in obj) {
      temp = obj[key];
      if (result < temp) {
        tempkey = key;
        result = temp;
      }
    }
    return [result, tempkey];
  };

  let votes = analyzeVotes();
  return (
    <div>
      <h1>Anecdote of the day </h1>
      {anecdotes[selected]}
      <br />
      <p> has {obj[anecdotes[selected]]} votes </p>
      <Button para={countVote} name="vote" />
      &nbsp; &nbsp;
      <Button para={changePara} name="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <p> {votes[1]} </p>
      <p> has {votes[0]} votes </p>
    </div>
  );
};

export default App;
