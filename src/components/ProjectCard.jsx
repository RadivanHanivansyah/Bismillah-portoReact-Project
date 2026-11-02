import { useState } from "react";
import data from "../data/projects";
export default function ProjectCard() {
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
  return (
    <div className="bg-slate-50 font-normal px-5 py-2 lg:px-32 font-roboto">
      <div className="info-project">
        <h2 className="text-blue-500 text-lg lg:text-xl font-medium mb-1">
          Projek Saya
        </h2>
        <h1 className="lg:text-2xl text-xl font-medium lg:text-nowrap first-letter:uppercase">
          beberapa proyek yang pernah saya buat
        </h1>
      </div>
      <div className="project-card relative">
        <button className="text-blue-500 absolute right-0">
          Lihat semua →
        </button>
        <div className="project">
          {array.map((index) => {
            return (
              <div className="card" key={index}>
                <img src={data[index].image} alt="" />
                <h1 className="title">{data[index].title}</h1>
                <h3 className="description">{data[index].description}</h3>
                {data[index].technology.map((item, index) => {
                  return <span key={index}>{item.nameTechnology}</span>;
                })}
              </div>
            );
          })}
          <div className="previous next">
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
