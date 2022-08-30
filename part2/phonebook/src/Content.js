const Content = ({ displayName, clickDel }) => {
  return displayName.map((Element) => {
    return (
      <li key={Element.id}>
        {Element.name} {Element.number}{" "}
        <button
          onClick={() => {
            clickDel(Element.name, Element.id);
          }}
        >
          Delete
        </button>
      </li>
    );
  });
};

export default Content;
