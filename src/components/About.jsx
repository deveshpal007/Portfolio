import aboutMe from "../assets/about.jpg";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutMe} alt="about" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              I am a dedicated and versatile front end developer with a passion
              for creating aesthetically pleasing and user friendly web
              applications. I have worked on tehcnologies like HTml, CSs ,
              javascript and react.My jourmney in web develpoment began with a
              deep curiosity for how things work on web and it has evolved into
              a career where i continuously strive to learn and adapt to new
              challenges. I thrive in collabaritve environment and enjoy solving
              complex problems to deliver high quality solutions. Outside of
              coding, I enjoy staying active and exploring new tehcnologies and
              advancements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
