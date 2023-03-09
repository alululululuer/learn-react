import { useState } from "react";

import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    const updatedPeople = people.filter((person) => person.id !== id);

    setPeople(updatedPeople);
  };

  const removeAll = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>remove {name}</button>
          </div>
        );
      })}
      <button onClick={removeAll}>remove all</button>
    </div>
  );
};

export default UseStateArray;
