import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";


export default function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <div className="fixed left-0 top-0 h-full flex flex-col z-40 justify-end items-center text-white p-4">
        <div className="bg-blue-900 flex md:flex-col flex-row gap-4 py-2 px-4 rounded-xl">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="my-2"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="my-2"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:your.email@gmail.com" className="my-2">
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
      <About/>
      <Project/>
    </div>
  );
}
