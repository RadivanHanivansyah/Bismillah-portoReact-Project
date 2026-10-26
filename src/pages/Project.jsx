import { useState } from "react";
import data from "../data/projects";

export default function Project() {
  const [Index, setIndex] = useState(0);
  const [array, setArray] = useState([
    Index,
    (Index + 1) % data.length,
    (Index + 2) % data.length,
  ]);
  console.log(array);
  function handleNext() {
    const nextIndex = (index + 1) % data.length;
    setIndex(nextIndex);
    setArray([
      nextIndex,
      (nextIndex + 1) % data.length,
      (nextIndex + 2) % data.length,
    ]);
    // const array = [
    //   Index % data.length,
    //   (Index + 1) % data.length,
    //   (Index + 2) % data.length,
    // ];
    console.log(array);
  }
  function handlePrevious() {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
    const array = [Index, (Index + 1) % data.length, (Index + 2) % data.length];
    console.log(array);
  }
  console.log(Index);
  return (
    <div>
      <button className="block" onClick={() => handleNext()}>
        next
      </button>
      <button onClick={() => handlePrevious()}>prev</button>
    </div>
  );
}
