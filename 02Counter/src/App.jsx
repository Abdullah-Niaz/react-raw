import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCount] = useState(0);
  const addCount = () => {
    if (counter<20){
      counter++;

    }
    setCount(counter);
    console.log("Increasing Value: ", Math.random());
  };


  
  const removeValue = () => {
    if(counter != 0){
      counter--;
    }
    setCount(counter);
    console.log("Decreasing Value: ", Math.random());
    return counter;
  };
  return (
    <>
      <h1>Counter</h1>
      <h3>Value: {counter}</h3>
      <button onClick={addCount}>Increase Value</button>

      <button onClick={removeValue}>Decreasse Value</button>
    </>
  );
}

export default App;
