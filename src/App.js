import './App.css';
import Counter from './components/Counter'
import Controls from './components/controls'
import { useState } from 'react';

function App() {
  const[counter,setCounter] = useState(0)
  return (
   <div className="container mx-auto text-center border w-25 mt-5 my-5 p-5">
     <Counter counter={counter} />
      <Controls setCounter={setCounter} counter={counter} />
   </div>
  );
}

export default App;
