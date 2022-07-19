import Statisticline from "./Statisticline";
const Statistics = (props) => {
  const calcALL = () => {
    return props.good + props.neutral + props.bad;
  };

  const calcAverage = () => {
    let dgood = props.good * 1;
    let dneutral = props.neutral * 0;
    let dbad = props.bad * -1;
    return Number((dgood + dbad + dneutral) / calcALL());
  };

  const calcPositive = () => {
    return Number(props.good / calcALL()) * 100 + " %";
  };

  if (props.good !== 0 || props.bad !== 0 || props.neutral !== 0) {
    return (
      <table>
        <tbody>
          <Statisticline status={"good"} value={props.good} />
          <Statisticline status={"neutral"} value={props.neutral} />
          <Statisticline status={"bad"} value={props.bad} />
          <Statisticline status={"all"} value={calcALL()} />
          <Statisticline status={"average"} value={calcAverage()} />
          <Statisticline status={"positive"} value={calcPositive()} />
        </tbody>
      </table>
    );
  } else {
    return <p>No feedback</p>;
  }
};
export default Statistics;
