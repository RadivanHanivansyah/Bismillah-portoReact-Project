import { useState } from "react";
import data from "../data/projects";

export default function Project() {
  const [Index, setIndex] = useState(0);
  const array = [
    Index % data.length,
    (Index + 1) % data.length,
    (Index + 2) % data.length,
  ];
  function handleNext() {
    setIndex((pre) => pre + 1);
  }
  function handlePrevious() {
    setIndex((pre) => (pre - 1 + data.length) % data.length);
  }
  console.log(array);
  return (
    <div>
      <button className="block" onClick={() => handleNext()}>
        next
      </button>
      <button onClick={() => handlePrevious()}>prev</button>
      {array.map((index, item) => {
        return <h1 key={index}>{data[index].title}</h1>;
      })}
    </div>
  );
}
