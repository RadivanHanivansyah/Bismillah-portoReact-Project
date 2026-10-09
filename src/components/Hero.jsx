import shape from "../assets/blob-haikei.svg";
import graduate from "../components/graduation-hat-alt-svgrepo-com.svg";
import location from "../components/location-pin-alt-1-svgrepo-com.svg";
function Hero() {
  return (
    <div className="bg-slate-50 grid lg:grid-cols-2 content-start font-normal px-5 lg:gap-x-4 lg:font-normal font-roboto">
      <div className="info-hero lg:pl-32 border">
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
        <div className="project-contact">
          <button className="project">Lihat Project</button>
          <button className="contact">Hubungi Saya</button>
        </div>
        <div className="icon-contact"></div>
      </div>
      <div className="img-hero place-self-start border">
        <img src={shape} alt="" className="shape w-full" />
      </div>
    </div>
  );
}

export default Hero;
