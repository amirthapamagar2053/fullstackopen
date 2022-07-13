import Header from "./Header";
import Content from "./Content";
import Total from "./Total";
const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  // return (
  //   <div>
  //     <h1>{course}</h1>
  //     <p>
  //       {part1} {exercises1}
  //     </p>
  //     <p>
  //       {part2} {exercises2}
  //     </p>
  //     <p>
  //       {part3} {exercises3}
  //     </p>
  //     <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  //   </div>
  // )
  return (
    <div>
      <Header course1={course} />
      <Content
        part11={part1}
        part21={part2}
        part31={part3}
        noex11={exercises1}
        noex21={exercises2}
        noex31={exercises3}
      />
      <Total total1={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
