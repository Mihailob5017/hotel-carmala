import React from "react";
import ReactDOM from "react-dom";
import RoomsState from "./Context API/Rooms Context/RoomsState";
import App from "./App";
import "./css/MainDesign.css";
const Index = () => {
  return (
    <RoomsState>
      <App />
    </RoomsState>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
