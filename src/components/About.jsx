import Navbar from "./Navbar";
import ProfileCard from "./ProfilesCards";

const About = () => {
  return (
    <div className="bg-gradient-to-b  to-blue-950 from-black py-16 h-[100vh] overflow-hidden">
      <Navbar />
      <div className="text-left  flex justify-center  flex-col py-12 gap-3">
        <h1 className="text-4xl md:text-5xl font-kanit text-center  font-normal text-white underline ">
          About Me
        </h1>
        <div className="text-white font-kanit py-8 text-xl px-36 lg:px-60 hidden md:block">
        <p className="py-4">Welcome to my corner of the web!</p>
        <p className="">I am <span className="text-blue-400 underline">Ali Yazdan</span>, 3rd year student with a love for creating meaningful projects and solving complex problems . My journey has been of continuous learning and growth, fueled by a desire to innovate and make a positive impact. </p>
        <p className="text-2xl py-4"> 
        Dive into my portfolio to explore my work and discover more about the <span className="text-stone-400">projects</span> that define my journey.
          </p> </div>
        <p className="text-white   py-6 italic text-xl px-4 block md:hidden">I have poured my passion for innovation into a variety of projects. Explore them below</p>
        <div>
        <ProfileCard/>
        </div>
      </div>
    </div>
  );
};

export default About;
