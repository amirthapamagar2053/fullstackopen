import React, { useState } from "react";
import Myh1 from "./Myh1";
import MydifButton from "./Button";

const App = () => {
  let [mytest, setmytest] = useState(1);

  // setTimeout(() => {
  //   setmytest(100);
  // }, 1000);
  const increaseTest = () => {
    setmytest(mytest + 1);
  };
  const decreaseTest = () => {
    if (mytest != 0) setmytest(mytest - 1);
  };

  let name1 = "Amir";
  return (
    // <div>
    //   <Myh1 name={name1} lastname="some lastname " count={arg.counter} />
    //   <Myh1 name={"name1"} lastname="some lastname " />
    //   <Myh1 name={"Niru"} lastname="some lastname " />
    // </div>
    <div>
      <p>{mytest}</p>
      <button onClick={increaseTest}>+</button>

      <button onClick={decreaseTest}>-</button>
      <MydifButton increase={increaseTest} />

      <button onClick={increaseTest}>Click Me for increasing value</button>

      <Myh1 name={name1} lastName="some lastname" count={mytest} />
      <Myh1 name={name1} lastName="some lastname" count={mytest} />
      <Myh1 name={name1} lastName="some lastname" count={mytest} />
    </div>
  );
  // return React.createElement(
  //   "div",
  //   {},
  //   "This is the output from the test function"
};

export default App;
