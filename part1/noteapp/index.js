import ReactDOM from "react-dom/client";
import App from "./components/App";

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);

// let mycount = 1;

// // ReactDOM.render(React.createElement("p",{},"This is the first react element"),document.querySelector("#root"))
// ReactDOM.render(test(), document.querySelector("#root"));
// const refresh = () => {
//   ReactDOM.createRoot(document.querySelector("#root")).render(
//     <App counter={mycount} />
//   );
// };

// setInterval(() => {
//   refresh();
//   mycount++;
// }, 1000);
