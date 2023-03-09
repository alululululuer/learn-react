import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue(value + 1);
    // //old value
    // console.log(value);

    // e.g value+3失败
    // setValue(value + 1);
    // setValue(value + 1);
    // setValue(value + 1);

    setValue((prevValue) => {
      return prevValue + 1;
    });

    console.log(value);
  };

  const handleClick2 = () => {
    //不管点击按钮多少次 value最终只加1
    // setTimeout(() => {
    // console.log('clicked the button');
    //   setValue(value + 1);
    // }, 3000);

    //点击多少次，value+多少
    setTimeout(() => {
      console.log("clicked the button");
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <div>
      <p>value: {value}</p>
      <button onClick={handleClick}>increase + 1</button>
      <button onClick={handleClick2}>update sync, increase + 1</button>
    </div>
  );
};

export default UseStateGotcha;
