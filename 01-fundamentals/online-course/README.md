# Notes

## 💚 Thanks

感谢 [john-smilga](https://github.com/john-smilga) 的教程

视频教程：[视频 1-41](https://www.youtube.com/watch?v=Oj7aqWYVKTo&list=PLnHJACx3NwAep5koWkniVHw8PK7dWCO21&index=39)

视频笔记：[React 线上课程笔记](https://github.com/john-smilga/react-course-v3/tree/main/01-fundamentals)

---

## 创建 React 项目

### Create React app

一般直接：

```
npx create-react-app app-name
```

如果提醒你**create-react-app**版本过低的话：

```
npx create-react-app@latest app-name
```

#### 文件结构

- 📁 node_modules：包含 app 所需要的所有依赖项。主要依赖项也会在 package.json 中列出。
- 📁 public：包含所有静态资源，index.html（页面模板）也包含其中。
  - index.html
    - title
    - fonts
    - css
    - favicon
    - id="root"：app 注入其中
- 📁 src：app 主要内容，我们写的代码都放在这里。
  - index.js：app 的入口文件
- .gitignore
- package.json：每个 Node.js 项目都有一个 package.json 文件，它包含了项目的所有基本信息。比如有项目的依赖列表（dependencies）、执行项目的脚本命令（scripts）等。
- package-lock.json：整个依赖关系树的一个快照
- README.md

#### 运行命令

```
npm start
```

### Vite

```
npm create vite@latest track-list -- --template react
```

#### Vite 使用说明

- 文件需要使用.jsx 扩展名

- index.html 就在 app 的一级目录下

- 入口文件为 main.jsx

#### 运行命令

```
npm run dev
```

---

## 组件

### 第一个组件

组件就是函数，创建组件就是创建函数。

选择自己喜欢的方式。

```js
function Greeting() {
  return <h2>Hello luking.</h2>;
}
```

```js
const Greeting = () => {
  return <h2>Hello luking.</h2>;
};
```

#### 注意事项

- 组件以大写字母开头
- 必须返回 JSX（return html）
- 必须闭合标签

### 根组件（root component）

组件可以有很多很多个，但是一个全部由 React 构建的应用，根组件通常只有一个。

根组件最终被注入到 index.html 中的 div#root 中。

```js
import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return <h2>Hello luking.</h2>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
```

### JSX 语法

JSX 是 JavaScript 的一种扩展语法，可以让我们在 JS 文件中编写类似于 HTML 的标签。

JSX 语法让写组件变得更加简单方便。

```js
// JSX
function Greeting() {
  return (
    <div>
      <h2>hello world</h2>
    </div>
  );
}

// 不用JSX
const Greeting = () => {
  return React.createElement("div", {}, React.createElement("h2", {}, "hello world"));
};
```

#### JSX 规则

- 返回一个根元素
- 闭合所有标签
- 驼峰命名所有属性

### 嵌套组件

组件是可以嵌套的

```js
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>luking</h2>;
const Message = () => {
  return <p>吃了嘛😃</p>;
};
```

## 🌰 Book List

### 组件结构

```js
const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img src="./images/book-1.jpg" alt="Interesting Facts For Curious Minds" />
);

const Title = () => <h2>Interesting Facts For Curious Minds</h2>;

const Author = () => <h3>Jordan Moore</h3>;
```

### 添加样式

#### index.css

- 在 📂src 下创建 index.css 文件
- 在 index.js 中引入 index.css 文件并且给 html 元素添加类名

```js
import "./index.css";

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};
```

#### inline styles

- style prop
- 值为包含样式键值对的对象
- **{}在 JSX 中意味着回到 JS，可以在里面写 JS 代码**

```js
const Author = () => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>;
};
```

### 添加图片的几种方式

- 外部图片，直接填写 url
- 本地图片
  - 放在 📁public - 性能较差
  - 放在 📁src - 性能较好

### 重构

```js
const img = "./images/book-1.jpg";
const title = "Interesting Facts For Curious Minds";
const author = "Jordan Moore";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <img className="book__img" src={img} alt={title} />
      <h2 className="book__title">{title}</h2>
      <h3 className="book__author">{author}</h3>
    </article>
  );
};
```

## Props

```js
// parameters
const someFunc = (param1, param2) => {
  console.log(param1, param2);
};
// arguments
someFunc("job", "developer");
```

前面说到，组件就是函数。

定义函数时也可定义函数的参数（parameters）

使用组件时，组件的属性就相当于是给函数传参（arguments）。props 对象就是组件的参数对象（arguments object）

所以就可以通过给组件传递不同的参数值，得到不同的组件内容。

只有使用组件时确实提供了相应的 prop 值（argument），组件定义中所使用的 prop 值（parameter）才能显示出来。

### 特殊的 prop - children

在组件的开始标签和结束标签之间所放的全部内容可以视为组件的 children。通过 props.children 传递给组件。

children 可以放置在组件定义的 JSX 结构中的任何位置。

```js
const Book = ({ img, title, author, children }) => {
  // rest of the logic
};
const Book = (props) => {
  const { img, title, author, children } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      {children}
    </article>
  );
};
```

### 组件列表必须加上的 prop - key

```js
const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </section>
  );
};
```

### Prop Drilling

- React 中的数据流是自顶向下的，prop 只能由父组件传递给子组件。
- alternatives Context API, redux, other state libraries

## Events

先看看纯 JS 种的事件：

```js
const btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  // access event object
  // do something when event fires
});
```

React 中处理事件基本是一样的（element, event, event handler function）：

```js
const EventExamples = () => {
  const handleButtonClick = () => {
    alert("handle button click");
  };
  return (
    <section>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};
```

another example:

- 写法 1：

```js
const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e);
    // e.target - element
    console.log(`Input Name : ${e.target.name}`);
    console.log(`Input Value : ${e.target.value}`);
    // console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert("handle button click");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <section>
      {/* add onSubmit Event Handler */}
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
        {/* add button with type='submit' */}
        <button type="submit">submit form</button>
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};
```

- 写法 2：

```js
<button type="submit" onClick={handleFormSubmission}>
  submit form
</button>
```

每个组件都是独立的（independent），同一个组件，传入不同的 props 调用多次，添加在组件上的事件处理函数是单独的，互不干扰的，每个组件的事件处理函数适用于每个特定的组件。

```js
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  const displayTitle = () => {
    console.log(title); //点击每个按钮 显示当前组件的title 互不干扰 单独适用
  };

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}>display title</button>
      <h4>{author} </h4>
    </article>
  );
};
```

## ES6 Modules

- name exports 名字必须匹配
- default exports 可以重命名

## 上传

- 托管平台：[netlify](https://www.netlify.com/)
- [Online Visit](https://online-course-booklist.netlify.app/)
