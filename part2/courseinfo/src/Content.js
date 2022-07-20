import Part from "./Part";
const Content = (props) => {
  return props.part.map((Element) => {
    return <Part element={Element} />;
  });
};

export default Content;
