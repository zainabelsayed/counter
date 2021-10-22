import React, { useState } from "react";
import Controls from "./controls";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="background d-flex align-items-center card-img-overlay mt-5">
      <div className="container mx-auto text-center border w-25  p-5  rounded border-2 shadow-lg">
        <div className="container p-4 justify-content-center align-items-center">
          <p className="fs-1 fw-bold">{counter}</p>
        </div>
        <Controls setCounter={setCounter} counter={counter} />
      </div>
    </div>
  );
}
