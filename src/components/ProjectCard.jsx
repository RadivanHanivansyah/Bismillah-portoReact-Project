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
      <div className="project-card mt-2 relative">
        <button className="text-blue-500 mb-2 absolute right-0">
          Lihat semua →
        </button>
        <div className="project w-full flex flex-wrap gap-2 relative top-8">
          {array.map((index) => {
            return (
              <div
                className="card border px-1 grid grid-cols-2 md:grid-cols-1 items-center gap-2.5"
                key={index}
              >
                <img className="size-auto" src={data[index].image} alt="" />
                <div className="fill-content">
                  <h1 className="title text-base mb-1 mt-0.5">
                    {data[index].title}
                  </h1>
                  <h3 className="description text-sm mb-1 text-pretty">
                    {data[index].description}
                  </h3>
                  {data[index].technology.map((item, index) => {
                    return (
                      <span className="inline-block text-sm mr-1" key={index}>
                        {item.nameTechnology}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div className="previous next">
            <button onClick={() => handlePrevious()}>Previous</button>
            <button onClick={() => handleNext()}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
