import { useState } from "react";
import Button from "./Button";
import Statistics from "./Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => {
    setGood(good + 1);
  };
  const increaseNeutral = () => {
    setNeutral(neutral + 1);
  };

  const increaseBad = () => {
    setBad(bad + 1);
  };

  // const calcALL = () => {
  //   return good + neutral + bad;
  // };

  // const calcAverage = () => {
  //   let dgood = good * 1;
  //   let dneutral = neutral * 0;
  //   let dbad = bad * -1;
  //   return Number((dgood + dbad + dneutral) / calcALL());
  // };

  // const calcPositive = () => {
  //   return Number(good / calcALL()) * 100 + "%";
  // };

  return (
    <div>
      <h2>give feedback</h2>
      <Button handler={increaseGood} name="good" state={good} />
      <Button handler={increaseNeutral} name="neutral" state={neutral} />
      <Button handler={increaseBad} name="bad" state={bad} />
      <h2>statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
