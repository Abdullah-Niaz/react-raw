import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

//   useEffect(() => {
//     // document.title = `You clicked ${count} times`;
//   }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;
