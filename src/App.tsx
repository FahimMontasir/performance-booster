import React, { useCallback, useState } from "react";
import "./App.css";
import Child from "./components/Child/Child";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  //useCallback for handle fun props
  const handleCount = useCallback(() => setCount(count + 1), [count]);

  return (
    <div className="App">
      <h1>learn react</h1>
      <h1>Count: {count}</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Plus+</button>
      <Child count={count} handleCount={handleCount} />
    </div>
  );
}

export default App;
