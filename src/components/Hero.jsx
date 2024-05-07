const Hero = () => {
  return (
    <div className="bg-black h-[100vh] mx-auto flex justify-center items-center flex-col">
      <div className="mx-2 lg:mx-20 flex justify-center px-10 sm:px-20 md:px-40 flex-col gap-3">
        <p className="text-white text-md sm:text-lg wave">Hi 👋 I am</p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-kanit italic  font-semibold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-700">Ali Yazdan</h1>
        <p className="text-xl sm:text-3xl md:text-4xl text-white font-kanit">A Full Stack Developer</p>
        <p className="text-xl sm:text-3xl md:text-4xl text-white  hidden md:inline font-medium">I am currently pursuing a Bachelors degree in Engineering from <span className="border-b-4  border-blue-600 italic">Siddaganga Institute of Technology</span> in the ISE branch.</p>
        <a href="/Ali_Yazdan_SIT.pdf" target="_blank" rel="noopener noreferrer" className="text-white sm:hidden w-[200px] text-center font-semibold bg-gradient-to-b from-blue-600 to-blue-900  border-2 rounded-full border-white px-6 py-2">Resume</a>
      </div>
      
    </div>
  )
}

export default Hero
