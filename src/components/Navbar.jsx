import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" text-white w-full fixed py-2 top-0 z-10 ">
      <div className="mx-auto px-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 hidden sm:inline">
            <Link to={"/"} className="font-semibold font-kani text-lg">
              Ali Yazdan
            </Link>
          </div>
          <div className="backdrop-blur-md hidden sm:block font-kanit text-center bg-gradient-to-b from-blue-700 to-blue-900 rounded-full px-8">
            <div className="inline-block hover:border-t-2 border-white  py-3 hover:bg-[radial-gradient(ellipse_60%_60%_at_50%_-20%,rgba(255,255,255,0.7),rgba(255,255,255,0))]  text-white">
              <Link to={"/about"} className="px-3 py-2 ">
                About
              </Link>
            </div>
            <div className="inline-block hover:border-t-2 border-white  py-3 hover:bg-[radial-gradient(ellipse_60%_60%_at_50%_-20%,rgba(255,255,255,0.7),rgba(255,255,255,0))]  text-white">
              <Link to={"/skills"} className="px-3 py-2 ">
                Skills
              </Link>
            </div>
            <div className="inline-block hover:border-t-2 border-white  py-3 hover:bg-[radial-gradient(ellipse_60%_60%_at_50%_-20%,rgba(255,255,255,0.7),rgba(255,255,255,0))]  text-white">
              <a
                href="mailto:yazdaalizaidi@gmail.com"
                className="px-3 py-2 "
              >
                Contact
              </a>
            </div>
          </div>
          <div className="backdrop-blur-md sm:hidden mx-auto font-kanit bg-gradient-to-b from-blue-600 to-blue-900 rounded-full px-8 py-3">
            <Link to={"/"} className="px-3 py-2 hover:underline ">
              Home
            </Link>

            <Link to={"/about"} className="px-3 py-2 hover:underline ">
              About
            </Link>
            <Link to={"/skills"} className="px-3 py-2 hover:underline ">
              Skills
            </Link>
          </div>
          <div className="items-center hidden sm:flex">
            <a
              href="/Ali_Yazdan_SIT.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white py-2 px-4 rounded-full hover:bg-blue-950 flex transition duration-300 ease-in-out"
            >
              Resume
              <img
                src="https://assets-global.website-files.com/63dcb6e1a80e9454b630f4c4/63e0b50ea0956f4526968ef1_23-icon-external.svg"
                className="ml-1 text-gray-100"
              />
            </a>
            {/* <a
            href="mailto:yazdaalizaidi@gmail.com"
            className="text-white px-4 inline-block"
          >
            <span className="transition duration-300 ease-in-out bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Contact me
            </span>
          </a> */}
          </div>

          {/* <a href="/Ali_Yazdan_SIT.pdf" target="_blank" rel="noopener noreferrer" className="text-white px-4 hover:underline">
          yazdaalizaidi@gmail.com
        </a> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
