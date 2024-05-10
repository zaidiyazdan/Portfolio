const Hero = () => {
  return (
    // <div className="bg-black h-[100vh] mx-auto flex justify-center items-center flex-col">
    <div className="h-[100vh] mx-auto flex justify-center items-center flex-col bg-[radial-gradient(ellipse_70%_70%_at_50%_-20%,rgba(81,81,236,0.4),rgba(255,255,255,0))]">
    <div className="relative h-screen w-full">
      <div className="absolute bottom-0 left-0 right-0 top-0 flex justify-center items-center ]">
        <div className="mx-2 lg:mx-20 flex justify-center  px-10 sm:px-20 md:px-40 flex-col gap-3">
          <p className="text-white text-md sm:text-2xl">
            Hi{" "}
            <span className="wave w-10 h-10" role="img" aria-labelledby="wave">
              {" "}
              👋
            </span>{" "}
            I am
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-kanit italic  font-semibold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-700">
            Ali Yazdan
          </h1>
          <p  className="text-xl flex items-center sm:text-3xl md:text-4xl cursor-pointer  text-white font-kanit">
            <div className="h-4 w-4 mr-4 animate-pulse flex justify-center items-center rounded-full bg-blue-200">
            <div className="h-2 w-2 rounded-full bg-blue-700">
              </div>
              </div> 
            <p>A Full Stack Developer </p>
          </p>
          <p className="text-xl  sm:text-3xl md:text-4xl text-white  hidden md:inline font-thin">
            I am currently pursuing BE from{" "}
            <span className="border-b-4  border-blue-600 hover:text-blue-500 cursor-pointer italic">
              Siddaganga Institute of Technology
            </span>{" "}
           
          </p>
          <a
            href="/Ali_Yazdan_SIT.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white sm:hidden w-[200px] text-center font-semibold bg-gradient-to-b from-blue-600 to-blue-900  border-2 rounded-full border-white px-6 py-2"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
