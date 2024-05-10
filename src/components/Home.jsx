import { useEffect, useState } from "react";
import Hero from "./Hero";
import MusicPlayer from "./MusicPlayer";
import Navbar from "./Navbar";
import Project from "./Project";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="bg-black w-full">
      <Navbar />
      <Hero />
      <div className="fixed left-0 bottom-0 z-50 sm:top-0 h-full flex flex-col justify-end items-center text-white p-4">
        <div className="bg-blue-900 md:flex-col hidden sm:flex md:px-4 flex-row gap-3 py-2 px-8 rounded-xl">
          <a
            href="https://www.instagram.com/zaidiyazda/"
            target="_blank"
            rel="noopener noreferrer"
            className="my-2"
          >
            <i className="fab fa-instagram text-2xl hover:text-gray-300"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ali-yazdan-452711229"
            target="_blank"
            rel="noopener noreferrer"
            className="my-2"
          >
            <i className="fab fa-linkedin text-2xl hover:text-gray-300"></i>
          </a>
          <a href="mailto:yazdaalizaidi@gmail.com" className="my-2">
            <i className="fas fa-envelope text-xl hover:text-gray-300"></i>
          </a>
          <a
            href="https://www.keybr.com/profile/q3sxpkl"
            target="_blank"
            rel="noopener noreferrer"
            className="my-2"
          >
            <i className="fas fa-keyboard text-xl hover:text-gray-300"></i>
          </a>
        </div>
      </div>
      <Project />
      <MusicPlayer />
      <div className="z-5 flex flex-col bg-blue-950 border-t-2 sm:border-none border-gray-300 justify-end items-center text-white p-4">
        <div className="md:flex-col flex sm:hidden flex-row gap-10 py-2 px-8 rounded-xl">
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
        <div className="fixed bottom-4 right-7">
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-4 px-4 rounded-full flex items-center"
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
