import { useState } from "react";
import data from "../data/projects";
export default function ProjectCard() {
  const [Index, setIndex] = useState(0);
  const array = [
    Index % data.length,
    (Index + 1) % data.length,
    (Index + 2) % data.length,
  ];
  console.log(array);
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
        <div className="container-project lg:w-full lg:grid md:flex md:flex-wrap lg:grid-cols-3 lg:h-fit lg:overflow-visible md:overflow-y-hidden md:h-84 md:gap-y-12 first:h-80 *:lg:w-11/12 *:md:w-[45%] md:justify-center md:gap-3 lg:justify-items-normal relative top-8">
          {array.map((index) => {
            return (
              <div
                className="card border-2 rounded-lg p-2 md:flex md:flex-wrap md:items-start items-center md:gap-1 gap-2.5"
                key={index}
              >
                <img className="w-fit" src={data[index].image} alt="" />
                <div className="information-content md:w-full">
                  <h1 className="title font-medium text-base mb-1 mt-0.5">
                    {data[index].title}
                  </h1>
                  <h3 className="description text-sm mb-2">
                    {data[index].description}
                  </h3>
                </div>
                <div className="technology-content col-span-2 grid md:flex md:flex-wrap grid-cols-3 gap-x-2 gap-y-1 md:">
                  {data[index].technology.map((item, index) => {
                    return (
                      <span
                        className="text-xs text-center border rounded-xl px-2 py-0.5 bg-slate-50 text-blue-500"
                        key={index}
                      >
                        {item.nameTechnology}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="previous-next *:rounded-lg mt-1 *:w-fit *:lg:h-3/4 *:md:h-1/2  *:hover:bg-blue-500 *:hover:cursor-pointer">
          <button
            className="w-1/2 absolute left-0 lg:-translate-x-14 md:-translate-x-0 lg:bottom-[20%] md:bottom-1/4 border lg:text-6xl md:text-4xl"
            onClick={() => handlePrevious()}
          >
            &#11164;
          </button>
          <button
            className="w-1/2 absolute right-0 lg:bottom-[20%] md:bottom-1/4 lg:translate-x-7 md:translate-x-0 border lg:text-6xl md:text-4xl"
            onClick={() => handleNext()}
          >
            &#11166;
          </button>
        </div>
      </div>
    </div>
  );
}
