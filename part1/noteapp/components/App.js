// import React, { useState } from "react";

const App = (props) => {
  return (
    <div>
      <p>
        This is the heading
        {props.notes.map((elements) => {
          return <p>{elements.content}</p>;
        })}
      </p>
    </div>
  );
};

export default App;
