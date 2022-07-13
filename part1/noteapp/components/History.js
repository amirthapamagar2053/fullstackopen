const History = (props) => {
  if (props.hiscount.length > 0) {
    return (
      <h3>
        The history of the button click [
        {props.hiscount.map((Element) => Element + ", ")}]{" "}
      </h3>
    );
  } else {
    return <h3>The history count is null</h3>;
  }
};
export default History;
