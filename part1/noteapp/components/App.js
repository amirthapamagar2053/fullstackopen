import React, { useState } from "react";
import Myh1 from "./Myh1";

const App = () => {
  let [mytest, setmytest] = useState(1);

  setTimeout(() => {
    setmytest(mytest + 1);
  }, 1000);

  let name1 = "Amir";
  return (
    // <div>
    //   <Myh1 name={name1} lastname="some lastname " count={arg.counter} />
    //   <Myh1 name={"name1"} lastname="some lastname " />
    //   <Myh1 name={"Niru"} lastname="some lastname " />
    // </div>
    <div>
      <p>{mytest}</p>

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
