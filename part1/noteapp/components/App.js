import React from "react";
import Myh1 from "./Myh1";

const App = () => {
  let name1 = "Amir";
  return (
    <div>
      <Myh1 name={name1} lastname="some lastname " />
      <Myh1 name={name1} lastname="some lastname " />
      <Myh1 name={name1} lastname="some lastname " />
    </div>
  );
  // return React.createElement(
  //   "div",
  //   {},
  //   "This is the output from the test function"
};

export default App;
