import Part from "./Part";
const Content = (props) => {
  return (
    <div>
      <Part part12 = {props.part11} noex112 ={props.noex11} />
      <Part part12 ={props.part21} noex112 ={props.noex21}/>
      <Part part12 = {props.part31} noex112 ={props.noex31}/>
    </div>
  )
   
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
