import Part from "./Part";
const Content = (props) => {
  return (
    <div>
      <Part part12={props.partsC[0].name} noex112={props.partsC[0].exercises} />
      <Part part12={props.partsC[1].name} noex112={props.partsC[1].exercises} />
      <Part part12={props.partsC[2].name} noex112={props.partsC[2].exercises} />
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

// =======================================================================
// return (
//   <div>
//     <Part
//       part12={props.part_fundamentals.name}
//       noex112={props.part_fundamentals.exercises}
//     />
//     <Part
//       part12={props.part_props.name}
//       noex112={props.part_props.exercises}
//     />
//     <Part
//       part12={props.part_state.name}
//       noex112={props.part_state.exercises}
//     />
//   </div>
// ================================================================================
