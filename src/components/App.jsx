import React from "react";

function App() {
  const [count, setCount] = React.useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  const redColor = { color: "red" };
  const greenColor = { color: "green" };
  const whiteColor = { color: "white" };
  const blueColor = { color: "blue" };
  return (
    <div className="container">
      <h1
        style={
          count < 0
            ? redColor
            : count === 0
            ? whiteColor
            : count > 5
            ? blueColor
            : greenColor
        }
      >
        {count}
      </h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      {count < 0 && <h2>You Lost!</h2>}
      {count > 5 && <h2>You Won!</h2>}
    </div>
  );
}

export default App;
