import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <nav className=" text-white w-full fixed py-2 top-0 z-10 ">
      <div className="max-w-7xl hidden sm:block  mx-auto px-4">
        <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0">
        <span className="font-semibold font-kani text-lg">Ali Yazdan</span>
          </div>
          <div className="backdrop-blur-md rounded-full px-8 py-3">
            <a href="#about" className="px-3 py-2 hover:underline hover:text-blue-600">
              About
            </a>
            <a href="#resume" className="px-3 py-2 hover:underline hover:text-blue-600 ">
              Skills
            </a>
            <a href="#projects" className="px-3 py-2 hover:underline hover:text-blue-600">
              Projects
            </a>
            <a href="#certificates" className="px-3 py-2 hover:underline hover:text-blue-600 ">
              Certificates
            </a>
          </div>
          <button className="text-white font-semibold bg-gradient-to-b from-blue-600 to-blue-900  border-2 rounded-full border-white px-6 py-2">
            Resume
          </button>
        </div>
      </div>
      <div className= "block sm:hidden">
      <>
      {/* Hamburger Icon */}
      <div className="fixed top-4 left-4 cursor-pointer z-50" onClick={toggleMenu}>
        {isOpen ? (
          <>
            <div className="h-1 w-6 bg-gray-200 transform rotate-45 origin-center absolute"></div>
            <div className="h-1 w-6 bg-gray-200 transform -rotate-45 origin-center absolute"></div>
          </>
        ) : (
          <>
            <div className="h-1 w-6 bg-gray-200 mb-1"></div>
            <div className="h-1 w-4 bg-gray-200 mb-1"></div>
            <div className="h-1 w-2 bg-gray-200"></div>
          </>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className={`fixed top-0 left-0 w-full h-full bg-blue-800 bg-opacity-96 z-40 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="flex flex-col justify-center items-center h-full">
          <li className="my-4"><a href="#" className="text-white text-lg">Home</a></li>
          <li className="my-4"><a href="#" className="text-white text-lg">About</a></li>
          <li className="my-4"><a href="#" className="text-white text-lg">Services</a></li>
          <li className="my-4"><a href="#" className="text-white text-lg">Contact</a></li>
        </ul>
      </nav>
    </>
      </div>
    </nav>
  );
}

export default Navbar;
