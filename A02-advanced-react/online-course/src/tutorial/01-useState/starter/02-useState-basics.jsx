import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState(6));
  // const value = useState(6)[0];
  // const func = useState(6)[1];
  // console.log(value);
  // console.log(func);

  const [count, setCount] = useState(6);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>
        click me
      </button>
    </div>
  );
};

export default UseStateBasics;
