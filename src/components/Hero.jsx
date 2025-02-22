import profilePic from "../assets/Profile.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Devesh Pal
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Front End Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              I am a passionate Front End Developer with a knack for creating
              robust and visually pleasing user interfaces.I have worked on
              technologies like HTML, CSS, JavaScript, React.My goal is to
              leverage my expertise to create innovative solutions that drive
              business growth and deliver exceptional user experiences.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={profilePic} alt="Devesh Pal"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
