import React from 'react'
import baba from '../assets/baba.jpg'
import me from '../assets/me.jpg'


function Home() {
  return (
    <>
      <div className="flex justify-center items-center min-h-[70vh] bg-gradient-to-bl from-red-700 via-red-600 to-black">
        <div className="flex flex-col items-center justify-center gap-2 md:gap-5 text-white rounded-3xl bg-white/10 p-5 backdrop-blur-sm border border-white/20 shadow-xl">
            <h2 className="font-bold text-xl">Owners</h2>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="text-[12px] md:text-lg hover:scale-105 transition-all duration-300 flex flex-col items-center rounded-[20px] w-[120px] h-[150px] md:w-[170px] md:h-[200px] p-3 bg-gradient-to-b from-red-700 to-black">
                <img src={baba} alt="" className=" w-[70px] h-[77px] md:w-[100px] md:h-[110px] rounded-[20px] mb-1 md:mb-2 object-cover" />
                <h3>Hafiz Abdul Rauf</h3>
                <p>03216037020</p>
              </div>
              <div className="text-[12px] md:text-lg hover:scale-105 transition-all duration-300 flex flex-col items-center rounded-[20px] w-[120px] h-[150px] md:w-[170px] md:h-[200px] p-3 bg-gradient-to-b from-red-700 to-black">
                <img src={me} alt="" className="w-[70px] h-[77px] md:w-[100px] md:h-[110px] rounded-[20px] mb-2 object-cover" />
                <h3>Abdullah Hassan</h3>
                <p>03020663387</p>
              </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Home;




