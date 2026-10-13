import html from "../assets/HTML5.svg";
import css from "../assets/CSS3.svg";
import tailwind from "../assets/Tailwind CSS.svg";
import javscript from "../assets/JavaScript.svg";
import reactJS from "../assets/React.svg";
import git from "../assets/Git.svg";

export default function Skills() {
  return (
    <div className="bg-white py-2 px-5 lg:px-32 font-roboto font-medium">
      <h4 className="text-base md:text-lg text-blue-500">Keahlian</h4>
      <h3 className="text-lg md:text-xl">Teknologi yang Saya Gunakan</h3>
      <div className="icon-name mt-2 grid grid-cols-3 gap-x-3 gap-y-3 lg:grid-cols-6 ">
        <div className="container border border-slate-200 rounded-2xl py-2 flex flex-col gap-y-1 justify-center items-center">
          <img src={html} alt="" className="w-1/2 md:w-1/3 lg:w-1/4" />
          <span className="name text-base">HTML</span>
        </div>
        <div className="container border border-slate-200 rounded-2xl py-2 px-1 flex flex-col gap-y-1 justify-center items-center">
          <img src={css} alt="" className="w-1/2 md:w-1/3 lg:w-1/4" />
          <span className="name text-base">CSS</span>
        </div>
        <div className="container border border-slate-200 rounded-2xl py-2 px-1 flex flex-col gap-y-1 justify-center items-center">
          <img src={tailwind} alt="" className="w-1/2 md:w-1/3 lg:w-1/4" />
          <span className="name text-nowrap text-sm">Tailwind CSS</span>
        </div>
        <div className="container border border-slate-200 rounded-2xl py-2 px-1 flex flex-col gap-y-1 justify-center items-center">
          <img src={javscript} alt="" className="w-1/2 md:w-1/3 lg:w-1/4" />
          <span className="name text-base">Javascript</span>
        </div>
        <div className="container border border-slate-200 rounded-2xl py-2 px-1 flex flex-col gap-y-1 justify-center items-center">
          <img src={reactJS} alt="" className="w-1/2 md:w-1/3 lg:w-1/4" />
          <span className="name text-base">React JS</span>
        </div>
        <div className="container border border-slate-200 rounded-2xl py-2 px-1 flex flex-col gap-y-1 justify-center items-center">
          <img src={git} alt="" className="w-1/2 md:w-1/3 lg:w-1/4" />
          <span className="name text-base">Git</span>
        </div>
      </div>
    </div>
  );
}
