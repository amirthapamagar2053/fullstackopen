import Part from "./Part";
const Content = (props) => {
  return props.part.map((Element) => {
    return <Part key={Element.id} element={Element} />;
  });
};

export default Content;
