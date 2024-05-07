import Navbar from "./Navbar";
import ProfileCard from "./ProfilesCards";

const About = () => {
  return (
    <div className="bg-gradient-to-b bg-gray-900 py-16 to-blue-900 from-black">
      <Navbar />
      <div className="text-left  flex justify-center  flex-col py-12 gap-3">
        <h1 className="text-4xl md:text-6xl font-kanit text-center  font-normal text-white underline ">
          About Me
        </h1>
        <div className="text-white py-8 text-2xl px-36 lg:px-60 hidden md:block">
        <p className="font-kanit py-4">Welcome to my corner of the web!</p>
        <p className=" font-kanit">I am <span className="text-blue-400 underline">Ali Yazdan</span>, 3rd year student with a love for creating meaningful projects and solving complex problems . My journey has been of continuous learning and growth, fueled by a desire to innovate and make a positive impact. </p>
        <p className="text-3xl font-kanit py-4"> 
        Dive into my portfolio to explore my work and discover more about the <span className="text-stone-400">projects</span> that define my journey.
          </p> </div>
        <p className="text-white font-kanit  py-6 italic text-xl px-4 block md:hidden">I have poured my passion for innovation into a variety of projects. Explore them below</p>
        <div>
        <ProfileCard/>
        </div>
      </div>
    </div>
  );
};

export default About;
