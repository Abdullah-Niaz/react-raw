import { useState } from "react";

function NewCounter() {
  let [count, setMethod] = useState(0);

  return (
    <div>
      <h1>It's my counter</h1>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setMethod(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default NewCounter;
