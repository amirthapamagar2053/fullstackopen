function test(){
    return React.createElement("div",{},"This is the output from the test function")
}

// ReactDOM.render(React.createElement("p",{},"This is the first react element"),document.querySelector("#root"))
ReactDOM.render(test(),document.querySelector("#root"))
