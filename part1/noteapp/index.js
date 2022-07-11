import ReactDOM from "react-dom/client";
import App from "./components/App";

// // ReactDOM.render(React.createElement("p",{},"This is the first react element"),document.querySelector("#root"))
// ReactDOM.render(test(), document.querySelector("#root"));
ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
