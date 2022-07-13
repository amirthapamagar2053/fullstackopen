const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.partsT[0].exercises+props.partsT[1].exercises+props.partsT[2].exercises}
    </p>
  );
};

export default Total;
