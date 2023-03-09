# Notes

## 💚 Thanks

感谢 [john-smilga](https://github.com/john-smilga) 的教程

视频教程：[视频 42-](https://www.youtube.com/playlist?list=PLnHJACx3NwAep5koWkniVHw8PK7dWCO21)

视频笔记：[React 线上课程笔记](https://github.com/john-smilga/react-course-v3/blob/main/03-advanced-react/TUTORIAL.md)

---

## useState

### error-example

常规的变量更改不会触发 re-render。在 console 中可以看见变量确实改变了，但是界面上变量显示区没有更新。

```jsx
const ErrorExample = () => {
  let count = 6;

  const handleClick = () => {
    count++;
    // 变量确实改变了
    console.log("count: ", count);
  };

  return (
    <>
      <h2>useState error example</h2>
      {/* 界面没有更新 */}
      <p>{count}</p>
      <button onClick={handleClick}>increase</button>
    </>
  );
};
```

### useState-basics

useState 是 React 提供的一个函数
调用这个函数会返回一个数组，这个数组包含两个值，一个是 value，一个是改变这个 value 的 func，向 useState 传入的参数为 value 的初始值。

也可以用数组解构去获取 useState 返回的值，命名规则一般为[value, setValue]

```jsx
import { useState } from "react";

const UseStateBasics = () => {
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
```

如果 state value 改变时 ，会触发 re-render

使用 useState 可以 preserve value between renders，如果有多个 state value，其中一个改变时其它的值也不会回到它们的初始状态，在 renders 之间它们的值都是保持的。

### initial render and re-renders

initial render 是指组件树第一次被渲染到 DOM 中。当应用程序第一次加载或根组件第一次被渲染时就称作 initial render，也叫做挂载组件（mounting）

re-render 指组件的 props 或者 state 发生变化时，组件需要在 DOM 中更新来反映这些变化。React 使用虚拟 DOM 来优化更新实际 DOM 的过程，方便只做必要的更改。

React 组件触发 re-render 的几种方式：

- 组件的 props 或者 state 有变化
- 如果组件的父组件 re-render 的话，即使组件的 props 或者 state 没有发生改变也需要 re-render

### Hooks 的一般规则

- 以 use 开头（不管是 React 提供的 Hooks 还是我们自己写的 Hooks 都要遵循）
- 只能在函数体或者组件内部被调用
- 不能在条件体内调用 Hooks （比如 if 语句）
- useState 的 set func 不会马上更新 state 值

### useState-array

state 值可以设置为数组

```jsx
const data = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "susan" },
  { id: 4, name: "anna" },
];

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
          </div>
        );
      })}
    </div>
  );
};
```

### useState-object

state 值可以设置为对象

```jsx
const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "luking",
    age: 6,
    hobby: "sleep",
  });

  const displayPerson = () => {
    setPerson({
      name: "lucy",
      age: 18,
      hobby: "🏄‍♀️🏄‍♀️🏄‍♀️",
    });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys to: {person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show another person
      </button>
    </>
  );
};
```

如果只更改对象中的某一个属性时，记得先复制原对象所有属性，再更改想更改的属性，否则对象会失去其它属性。

```jsx
setPerson({ ...person, age: 10 });
```

### ⚠️useState-gotcha

state 更新函数不会马上更新 state 值，它会计划更新（schedule an update）state 值，然后告诉 React 需要 re-render 组件。实际的 state update 会作为下一个渲染周期的一部分执行。所以当需要依赖最新的 state 值来完成某些功能的时候需要特别注意 ⚠️

```jsx
import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue(value + 1);
    //  be careful it's the old value
    console.log(value);
    //  so if you have any functionality
    // that relies on the latest value
    // it will be wrong !!!

    //e.g value+3失败
    // setValue(value + 1);
    // setValue(value + 1);
    // setValue(value + 1);
  };
  return (
    <div>
      <h1>{value}</h1>
      <button className="btn" onClick={handleClick}>
        increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
```

如果想要立刻同步更新 state 的话，需要向 setState 函数传递一个函数作为参数。这个参数函数它接收上一个 state 值作为参数且需要返回新的 state 值。

```jsx
setState((prevState) => {
  return { ...prevState, value: newValue };
});
```

如果你有以下需求的话，那么向 set 函数传递函数作为参数是很有用的：

- 根据之前的 state 更新 state 值
- 同步更新 state

例子：

```jsx
const handleClick = () => {
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
```

## useEffect
