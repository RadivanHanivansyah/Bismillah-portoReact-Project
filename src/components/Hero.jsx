import shape from "../assets/blob-haikei.svg";
function Hero() {
  return (
    <div className="bg-slate-50 grid grid-cols-2 content-start font-normal px-5 lg:gap-x-4 lg:font-normal font-roboto">
      <div className="info-hero lg:pl-32">
        <h2>Halo, saya</h2>
        <h1>
          <span>Radivan</span>
          Rahmatika Hanivansyah
        </h1>
        <h2>Frontend Developer</h2>
        <p className="text-wrap">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
          molestias eaque, corporis sit saepe similique est in dolore amet id
          dolorum. Voluptatum, aperiam fuga distinctio possimus omnis eius ab
          esse? Ex nobis ratione nam distinctio architecto enim eum deleniti
          nostrum! Culpa, aspernatur illum. Tempore excepturi amet et dolorem
          repellendus fuga numquam debitis praesentium, quo tempora voluptatem
          placeat? Saepe, cum tempore. Alias, consequatur vitae! Fuga
          consequatur impedit saepe, unde, molestias esse nisi itaque aliquid
          commodi est quos voluptatem nihil similique consequuntur, beatae
          eligendi accusamus reprehenderit sit eos aliquam. Unde, sunt
          inventore! Voluptatum, minus veniam cum, at eos exercitationem eaque
          nisi, similique dolore dignissimos tempore in porro odit sit adipisci
          laboriosam. Rerum consequuntur vero beatae harum dolore reprehenderit
          fugiat sequi odio reiciendis?
        </p>
        <div className="project-contact">
          <button className="project">Lihat Project</button>
          <button className="contact">Hubungi Saya</button>
        </div>
        <div className="icon-contact"></div>
      </div>
      <div className="img-hero place-self-start">
        <img src={shape} alt="" className="shape w-full" />
      </div>
    </div>
  );
}

export default Hero;
