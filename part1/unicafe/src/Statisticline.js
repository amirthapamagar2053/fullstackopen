const Statisticline = (props) => {
  return (
    <tr>
      <td>{props.status}</td>
      <td>{props.value}</td>
    </tr>
  );
};
export default Statisticline;
