import erevive from '../assets/erevive.png'
import mightymuscles from '../assets/mightymuscles.png'


const Project = () => {
  return (
    <div className="bg-gradient-to-b flex flex-col justify-start items-center lg:px-60 bg-black py-6 to-blue-950 from-black ">
      <h1 className="text-4xl sm:text-5xl font-kanit  font-semibold bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-blue-700">My Projects</h1>
      <div className="text-center  flex justify-center flex-col gap-3">
        <h1 className="text-4xl md:text-5xl md:hidden py-8  font-kanit italic font-normal text-white underline text-shadow-black">
          I have poured my passion for innovation into a variety of projects.
          Explore them below
        </h1>
        <h1 className="text-5xl md:text-5xl hidden md:block py-8  font-kanit italic font-normal text-white underline text-shadow-black">
          I have poured my passion for innovation into a variety of projects.
          Explore them below
        </h1>
        <div className="px-4 md:px-32">
          <div className="w-full p-4 rounded-xl backdrop-blur-md group border-2 bg-gray-400 border-fade-primary bg-secondary hover:bg-gray-500 transition-all duration-200 mb-4 cursor-pointer">
            <div className="bg-gray-100 hover:bg-gray-200 p-5 rounded-xl">
              <div className="flex items-center mt-5">
                <h1 className="font-bold text-2xl group-hover:text-cta duration-400 transition-all mr-2">
                  DriveMate
                </h1>
                <span className="text-xs uppercase border-blue-400 border-2 bg-opacity-[0.12] font-semibold py-1 px-2 rounded-md flex items-center w-fit">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="1.05"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"></path>
                  </svg>
                  <p className="ml-1 ">Best Project Winner</p>
                </span>
              </div>
              <p className="text-fade-primary text-md font-medium">
                DriveMate is a comprehensive carpooling app..
              </p>
              <div className='bg-stone-300 rounded-lg mt-4 p-4'>
              <img
                src="https://buzzflick.com/wp-content/uploads/2022/02/Top-App-Demo-Videos.jpg"
                className="transform rounded-md group-hover:-translate-y-3 my-4 transition-all duration-200 ease-in-out"
                alt=""
              />
              </div>
              <p className="mt-5 font-medium uppercase underline text-sm decoration-cta underline-offset-4 hover:text-blue-600 duration-200 transition-all">
                Know more!
              </p>
            </div>
          </div>
          <div className="w-full p-4 rounded-xl backdrop-blur-md group border-2 bg-blue-400 border-fade-primary bg-secondary hover:bg-blue-700 transition-all duration-200 mb-4 cursor-pointer">
            <div className="bg-gray-100 hover:bg-gray-200 p-5 rounded-xl">
              <div className="flex items-center mt-5">
                <h1 className="font-bold text-2xl group-hover:text-cta duration-400 transition-all mr-2">
                  E-Revive
                </h1>
              </div>
              <p className="text-fade-primary text-md font-medium">
                E Waste facility locater and education platform..
              </p>
              <div className='bg-stone-300 rounded-lg mt-4 p-4'>
              <img
                src={erevive}
                className="transform rounded-md group-hover:-translate-y-3 my-4 transition-all duration-200 ease-in-out"
                alt=""
              />
              </div>
              <p className="mt-5 font-medium uppercase underline text-sm decoration-cta underline-offset-4 hover:text-blue-600 duration-200 transition-all">
                Know more!
              </p>
            </div>
          </div>
          <div className="w-full p-4 rounded-xl backdrop-blur-md group border-2 bg-gray-400 border-fade-primary bg-secondary hover:bg-gray-500 transition-all duration-200 mb-4 cursor-pointer">
            <div className="bg-gray-100 hover:bg-gray-200 p-5 rounded-xl">
              <div className="flex items-center mt-5">
                <h1 className="font-bold text-2xl group-hover:text-cta duration-400 transition-all mr-2">
                  Mighty Muscles
                </h1>
              </div>
              <p className="text-fade-primary text-md font-medium">
                Migthy Muscles is a wrokout guide web app..
              </p>
              <div className='bg-stone-300 rounded-lg mt-4 p-4'>
              <img
                src={mightymuscles}
                className="transform rounded-md group-hover:-translate-y-3 my-4 transition-all duration-200 ease-in-out"
                alt=""
              />
              </div>
              <p className="mt-5 font-medium uppercase underline text-sm decoration-cta underline-offset-4 hover:text-blue-600 duration-200 transition-all">
                Know more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
