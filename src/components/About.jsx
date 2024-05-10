import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import ProfileCard from "./ProfilesCards";

const About = () => {
  return (
    <div className="bg-gradient-to-b  to-blue-950 from-black py-16">
      <Navbar />
      <div className="text-left  flex justify-center  flex-col py-12 gap-3">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-kanit italic  font-semibold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-700 text-center">
          About Me
        </h1>
        <div className="text-white font-kanit py-8 text-lg md:text-xl px-6 sm:px-36 lg:px-60">
        <p className="py-4">Welcome to my corner of the web!</p>
        <p className="">I am <Link to={'/'} className="text-blue-400 underline">Ali Yazdan</Link>, 3rd year student studying in ISE branch with a love for creating meaningful projects and solving complex problems . My journey has been of continuous learning and growth, fueled by a desire to innovate and make a positive impact. </p>
        <p className="py-4"> 
        Dive into my portfolio to explore my work and discover more about the <span className="text-stone-400">projects</span> that define my journey.
          </p> </div>
        <ProfileCard/>
      </div>
    </div>
  );
};

export default About;
