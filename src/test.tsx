import React from "react";
import { useArray, useMount } from "utils";

export const Test = () => {
  const persons: { name: string; age: number }[] = [
    { name: "a", age: 2 },
    { name: "b", age: 3 },
  ];

  const { value, clear, removeIndex, add } = useArray(persons);
  useMount(() => {});
  return (
    <div>
      <button onClick={() => add({ name: "john", age: 2 })}>add john</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button style={{ marginBottom: "30px" }} onClick={() => clear()}>
        clear
      </button>
      {value.map((person, index) => (
        <div style={{ marginBottom: "30px" }}>
          <span style={{ color: "red" }}>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
};
