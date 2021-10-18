import "./App.css";
import Counter from "./components/Counter";
import Controls from "./components/controls";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="background d-flex align-items-center card-img-overlay">
      <div className="container mx-auto text-center border w-25  p-5  rounded border-2">
        <Counter counter={counter} />
        <Controls setCounter={setCounter} counter={counter} />
      </div>
    </div>
  );
}

export default App;
