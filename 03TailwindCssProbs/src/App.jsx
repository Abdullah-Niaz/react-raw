import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import SideBar from "./components/SideBar";
function App() {
  const [count, setCount] = useState(0);
  const newArr = [1,2,3,4];
  const newObj = {
    username:"Abdullah",
    age:30
  }
  return (
    <>
      <h1  className="bg-green-500 p-4 rounded-lg mb-5">Tailwind CSS</h1>
      <div className="flex flex-wrap">
      <SideBar/>
        <Card username="Abdullah" btn="click me" arr={newArr}/>
        <Card username="Abdullah" btn="click me" ob = {newObj} />
      </div>
    </>
  );
}

export default App;
