import Header from "./Header";
import Content from "./Content";

const Course = (props) => {
  return (
    <div>
      <Header head={props.course.name} />
      <Content part={props.course.parts} />
    </div>
  );
};
export default Course;
