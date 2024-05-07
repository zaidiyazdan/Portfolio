import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" text-white w-full fixed py-2 top-0 z-10 ">
      <div className="max-w-7xl  mx-auto px-4">
        <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0 hidden sm:inline">
        <Link to={'/'} className="font-semibold font-kani text-lg">Ali Yazdan</Link>
          </div>
          <div className="backdrop-blur-md mx-auto font-kanit bg-gradient-to-b from-blue-600 to-blue-900 rounded-full px-8 py-3">
            <Link to={'/about'} className="px-3 py-2 hover:underline ">
              About
            </Link>
            <Link to={'/skills'} className="px-3 py-2 hover:underline ">
              Skills
            </Link>
            <a href="#certificates" className="px-3 py-2 hover:underline ">
              Certificates
            </a>
          </div>
          <a href="/Ali_Yazdan_SIT.pdf" target="_blank" rel="noopener noreferrer" className="text-white hidden sm:inline font-semibold bg-gradient-to-b from-blue-600 to-blue-900  border-2 rounded-full border-white px-6 py-2">
        Resume
      </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
