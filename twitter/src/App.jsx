import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Left from "./left";
import Right from "./Right";
import Middle from "./Middle";

function App() {
  return (
    <div className="App">
      <Left />
      <Middle />
      <Right />
    </div>
  );
}

export default App;
