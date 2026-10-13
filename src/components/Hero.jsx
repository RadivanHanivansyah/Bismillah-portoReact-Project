import shape from "../assets/blob-haikei.svg";
import graduate from "../assets/graduation-hat-alt-svgrepo-com.svg";
import location from "../assets/location-pin-alt-1-svgrepo-com.svg";
import fotoSemiFormal from "../assets/foto-semiformal.png";
const Hero = function () {
  return (
    <div className="bg-slate-50 border-b border-slate-50 grid lg:grid-cols-2 content-start font-normal px-5 py-2 lg:gap-x-4 lg:font-normal font-roboto overflow-x-hidden overflow-y-hidden">
      <div className="info-hero lg:pl-32">
        <h2 className="text-blue-500 text-lg lg:text-xl font-medium mb-1">
          Halo, saya
        </h2>
        <h1 className="lg:text-2xl text-xl font-medium lg:text-nowrap">
          <span className="text-blue-500 mr-2">Radivan</span>
          Rahmatika Hanivansyah
        </h1>
        <h2 className="my-2 font-medium text-base lg:text-lg">
          Frontend Developer
        </h2>
        <p className="text-wrap text-sm md:text-base text-justify whitespace-pre-line indent-2">
          Bachelor’s degree in Computer Science from Sriwijaya University. I am
          highly motivated to pursue a career as a Front-End Developer and am
          also open to developing my skills and gaining experience in Full-Stack
          Developer. Have a strong foundation in HTML, CSS, JavaScript, React,
          and Git, complemented by strong problem-solving skills, a proactive
          mindset, and a keen interest in exploring and learning new
          technologies. Creating projects such as web films and to-do lists
          using React and Tailwind CSS, as well as state management using
          Zustand. Ready to contribute as a front-end developer by implementing
          UI/UX designs to support the company's needs
        </p>
        <div className="icon-about flex text-xs lg:text-sm font-medium my-2 gap-x-2 md:gap-x-0">
          <div className="graduate flex items-center md:w-1/4 lg:w-fit gap-x-1.5">
            <img src={graduate} alt="" className="w-1/6" />
            <h4 className="text-nowrap">
              S1 Teknik Informatika
              <span className="block font-normal">Universitas Sriwijaya</span>
            </h4>
          </div>
          <div className="location flex items-center gap-x-1.5 md:w-1/4 lg:w-fit">
            <img src={location} alt="" className="w-1/6" />
            <h4 className="text-nowrap">Palembang, Indonesia</h4>
          </div>
        </div>
        <div className="project-contact flex gap-x-4 md:gap-x-8 mt-5 group">
          <button className="project border py-1.5 px-4 md:px-8 rounded-xl bg-blue-500 group-hover:cursor-pointer group-active:bg-white font-medium group-active:shadow-white group-active:inset-shadow-sm/50 group-active:inset-shadow-black">
            Lihat Project
          </button>
          <button className="contact border py-1.5 px-4 md:px-8 rounded-xl bg-white font-medium group-hover:cursor-pointer group-active:bg-blue-500 group-active:shadow-sm/50 group-active:shadow-blue-500 group-active:inset-shadow-sm/50 group-active:inset-shadow-black">
            Hubungi Saya
          </button>
        </div>
        <div className="icon-contact flex gap-x-2.5 md:gap-x-4 mt-5">
          <a href="" className="github group">
            <svg
              className="h-7 w-7 group-hover:text-teal-500 fill-current md:h-10 md:w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M280.5 426.5C214.5 418.5 168 371 168 309.5C168 284.5 177 257.5 192 239.5C185.5 223 186.5 188 194 173.5C214 171 241 181.5 257 196C276 190 296 187 320.5 187C345 187 365 190 383 195.5C398.5 181.5 426 171 446 173.5C453 187 454 222 447.5 239C463.5 258 472 283.5 472 309.5C472 371 425.5 417.5 358.5 426C375.5 437 387 461 387 488.5L387 540.5C387 555.5 399.5 564 414.5 558C505 523.5 576 433 576 321C576 179.5 461 64 319.5 64C178 64 64 179.5 64 321C64 432 134.5 524 229.5 558.5C243 563.5 256 554.5 256 541L256 501C249 504 240 506 232 506C199 506 179.5 488 165.5 454.5C160 441 154 433 142.5 431.5C136.5 431 134.5 428.5 134.5 425.5C134.5 419.5 144.5 415 154.5 415C169 415 181.5 424 194.5 442.5C204.5 457 215 463.5 227.5 463.5C240 463.5 248 459 259.5 447.5C268 439 274.5 431.5 280.5 426.5z" />
            </svg>
          </a>
          <a href="" className="linkedin hover:cursor-pointer group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 md:h-10 md:w-10 group-hover:text-[#0077B5] fill-current"
              viewBox="0 0 640 640"
            >
              <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" />
            </svg>
          </a>
          <a href="" className="email group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 md:h-10 md:w-10 group-hover:text-red-500 group-hover:cursor-pointer fill-current"
              viewBox="0 0 640 640"
            >
              <path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="img-hero place-self-start relative">
        <img
          src={fotoSemiFormal}
          alt=""
          className="w-3/4 translate-x-1/5 lg:translate-x-1/5 md:translate-x-2/3 relative z-50"
        />

        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="blob absolute w-[550px] h-[550px] -bottom-35 -translate-x-1/5 md:w-[650px] md:h-[650px] lg:h-[670px] md:translate-x-1/12 lg:-translate-x-1/7 -rotate-z-[150deg] -bottom-16 z-0"
        >
          <path
            fill="#E2E8F0"
            d="M38.7,-59C46.7,-47.6,47.2,-31.5,52.6,-16.7C58,-1.8,68.3,11.9,68.2,25.3C68.2,38.7,57.8,51.9,44.6,58.1C31.5,64.3,15.8,63.5,1,62.1C-13.8,60.7,-27.5,58.8,-34.6,50.6C-41.7,42.5,-42.2,28.2,-49.4,14.1C-56.6,0.1,-70.5,-13.6,-68.7,-23.3C-66.9,-32.9,-49.4,-38.4,-35.3,-47.9C-21.2,-57.4,-10.6,-70.9,2.4,-74.2C15.4,-77.5,30.8,-70.5,38.7,-59Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
