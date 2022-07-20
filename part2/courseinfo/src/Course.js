import Header from "./Header";
import Content from "./Content";

const Course = (props) => {
  return (
    <>
      <Header head={props.course.name} />
      <Content part={props.course.parts} />
      <h3>
        total of{" "}
        {props.course.parts.reduce((previousValue, currentValue) => {
          return previousValue + currentValue.exercises;
        }, 0)}{" "}
        exercises
      </h3>
    </>
  );
};
export default Course;
