import React, { useState } from 'react'

const MusicPlayer = () => {
    const [play, setPlay] = useState(true);
  return (
    <div className="flex bg-blue-950 justify-center h-[100vh]  flex-col py-10 gap-5 items-center">
        <div className="flex shadow-lg cursor-pointer my-6">
          <div
            onClick={() => setPlay(true)}
            className={`text-lg bg-black cursor-pointer md:text-lg px-6 py-1 border-white font-kanit text-white text-shadow-black ${
              play ? "border-b-2  font-normal border-white bg-opacity-50" : ""
            }`}
          >
            Listen
          </div>
          <div
            onClick={() => setPlay(false)}
            className={`text-lg bg-black md:text-lg px-6 py-1 border-white font-kanit font-normal text-white text-shadow-black ${
              !play ? "border-b-2 font-normal  border-white bg-opacity-50" : ""
            }`}
          >
            About
          </div>
        </div>
        <div className="w-[300px] sm:w-[400px] h-[400px] mx-auto">
          {play && (
            <iframe
              title="Spotify Playlist"
              src="https://open.spotify.com/embed/playlist/54toiyD3c7DUaEJEBTWlUx?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
              style={{ borderRadius: "12px" }}
            ></iframe>
          )}
          {!play && (
            <div className="text-white text-md p-4 rounded-xl h-[300px]">
              <p>
                From a young age, music has been an inseparable part of my life,
                weaving its melodies through my memories and emotions. Whether
                its the rhythm of a favorite song lifting my spirits or the
                lyrics of a meaningful tune resonating deeply within me, music
                has always been a source of comfort and inspiration. Each melody
                is like a bookmark in the story of my life, evoking nostalgia,
                joy, and sometimes even solace during difficult times. Music is
                not just a passion for me; its a language that speaks to my
                soul, connecting me to the world and to myself in profound ways
              </p>
            </div>
          )}
        </div>
      </div>
  )
}

export default MusicPlayer
