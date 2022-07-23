import { useState } from "react";

const Filter = (props) => {
  const [text, setText] = useState("");
  const inputtext = (event) => {
    setText(event.target.value);
    props.persons.filter((x) => x.name.includes(event.target.value));
  };
  return (
    <form>
      <input value={text} onChange={inputtext} />
    </form>
  );
};
export default Filter;
