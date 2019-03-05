import React from "react";
import ReactDOM from "react-dom";
import AnimalImage from "./Animal";
import "./styles.css";

function Message() {
  return <p className="Msg">This is a React Activity for class.</p>;
}

function App() {
  return (
    <div className="App">
      <h1 className="Hello">Hello React Class</h1>
      <h2>Welcome to see some magic happen!!!</h2>
      <Message />
      <AnimalImage />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));