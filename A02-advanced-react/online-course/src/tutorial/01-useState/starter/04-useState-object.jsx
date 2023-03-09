import { useState } from "react";

const UseStateObject = () => {
  // const [name, setName] = useState("luking");
  // const [age, setAge] = useState(6);
  // const [hobby, setHobby] = useState("sleep");

  // const displayPerson = () => {
  //   setName("lucy");
  //   setAge(18);
  //   setHobby("🏄‍♀️");
  // };

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

    // setPerson({ ...person, age: 10 });
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

export default UseStateObject;
