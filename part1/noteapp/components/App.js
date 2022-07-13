import React, { useState } from "react";
import Myh1 from "./Myh1";
import MydifButton from "./Button";
import Display from "./display";
import History from "./History";

const App = () => {
  let [mytest, setmytest] = useState(1);
  let [clickHistory, setClickHistory] = useState([]);

  // setTimeout(() => {
  //   setmytest(100);
  // }, 1000);
  const increaseTest = () => {
    setmytest(mytest + 1);
  };
  const decreaseTest = () => {
    if (mytest != 0) setmytest(mytest - 1);
  };

  const withinClickIncrease = () => {
    increaseTest();
    setClickHistory([...clickHistory, "AppIncrease"]);
  };
  const withinClickDecrease = () => {
    decreaseTest();
    setClickHistory([...clickHistory, "AppDecrease"]);
  };

  const buttonClickIncrease = () => {
    increaseTest();
    setClickHistory([...clickHistory, "ButtonIncrease"]);
  };
  const buttonClickDecrease = () => {
    decreaseTest();
    setClickHistory([...clickHistory, "ButtonDecrease"]);
  };
  console.log(clickHistory);

  let name1 = "Amir";
  return (
    // <div>
    //   <Myh1 name={name1} lastname="some lastname " count={arg.counter} />
    //   <Myh1 name={"name1"} lastname="some lastname " />
    //   <Myh1 name={"Niru"} lastname="some lastname " />
    // </div>
    <div>
      <p>{mytest}</p>
      <Display number={mytest} />
      <History hiscount={clickHistory} />
      <button onClick={withinClickIncrease}>+</button>
      &nbsp; &nbsp;
      <button onClick={withinClickDecrease}>-</button>
      &nbsp; &nbsp;
      <MydifButton increase={buttonClickIncrease} name="buttonClickIncrease" />
      &nbsp; &nbsp;
      <MydifButton increase={buttonClickDecrease} name="buttonClickDecrease" />
      &nbsp; &nbsp;
      <button onClick={withinClickIncrease}>
        Click Me for increasing value
      </button>
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
