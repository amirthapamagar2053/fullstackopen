import Part from "./Part";
const Content = (props) => {
  return (
    <div>
      <Part
        part12={props.part_fundamentals.name}
        noex112={props.part_fundamentals.exercises}
      />
      <Part
        part12={props.part_props.name}
        noex112={props.part_props.exercises}
      />
      <Part
        part12={props.part_state.name}
        noex112={props.part_state.exercises}
      />
    </div>
  );
  //  Random comment
  // return [
  //   <p>
  //     {props.part11} {props.noex11}
  //   </p>,

  //   <p>
  //     {props.part21} {props.noex21}
  //   </p>,
  //   <p>
  //     {props.part31} {props.noex31}
  //   </p>,
  // ];
};
export default Content;
