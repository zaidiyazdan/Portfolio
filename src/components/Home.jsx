import Hero from "./Hero";
import MusicPlayer from "./MusicPlayer";
import Navbar from "./Navbar";
import Project from "./Project";


export default function Home() {


  return (
    <div className="bg-black w-full">
      <Navbar/>
      <Hero/>
      <div className="fixed left-0 bottom-0 z-50 sm:top-0 h-full flex flex-col justify-end items-center text-white p-4">
        <div className="bg-blue-900 md:flex-col hidden sm:flex md:px-4 flex-row gap-6 py-2 px-8 rounded-xl">
          <a
            href="https://www.instagram.com/zaidiyazda/"
            target="_blank"
            rel="noopener noreferrer"
            className="my-2"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ali-yazdan-452711229"
            target="_blank"
            rel="noopener noreferrer"
            className="my-2"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:yazdaalizaidi@gmail.com" className="my-2">
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://www.keybr.com/profile/q3sxpkl"
            target="_blank"
            rel="noopener noreferrer"
            className="my-2"
          >
            <i className="fas fa-keyboard"></i>
          </a>
        </div>
      </div>
      <Project />
      <MusicPlayer/>
    </div>
  );
}
