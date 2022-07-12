import React from "react";

const Myh1 = ({ name, lastName, count }) => {
  let newName = `new Name is ${name}`;
  console.log(name);

  return (
    <h1>
      Hello to TEJ Fellow {newName}
      {lastName} {count}
    </h1>
  );
};

export default Myh1;
