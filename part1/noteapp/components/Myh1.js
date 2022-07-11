import React from "react";

const Myh1 = ({ name, lastName }) => {
  newName = `new Name is ${name}`;
  console.log(name);

  return (
    <h1>
      Hello to TEJ Fellow {newName}
      {lastName}
    </h1>
  );
};

export default Myh1;
