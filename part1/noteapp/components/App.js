// import React, { useState } from "react";

const App = (props) => {
  return (
    <div>
      <p>
        This is the heading
        {props.notes.map((elements) => {
          return <p key="{elements.id}">{elements.content}</p>;
        })}
      </p>
    </div>
  );
};

export default App;
