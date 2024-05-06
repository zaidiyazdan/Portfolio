const Hero = () => {
  return (
    <div className="bg-black h-[100vh] flex justify-center gap-8 items-center flex-col">
      <div className="px-36 mx-10 flex justify-center flex-col gap-3">
        <p className="text-white text-lg wave">Hi 👋 I am</p>
        <h1 className="text-6xl font-kanit italic  font-semibold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-700">Ali Yazdan</h1>
        <p className="text-5xl text-white font-kanit">A Full Stack Developer</p>
        <p className="text-4xl text-white  hidden md:inline font-medium">I am currently pursuing a Bachelors degree in Engineering from <span className="border-b-4  border-blue-600 italic">Siddaganga Institute of Technology</span> in the ISE branch.</p>
      </div>
      
    </div>
  )
}

export default Hero
