const History = (props) => {
  return <h3>The history of the button click  [{props.hiscount.map(Element => Element+ ", ")}] </h3>;
};
export default History;
