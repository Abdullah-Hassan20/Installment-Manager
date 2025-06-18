import React from 'react'

function Footer() {
  return (
    <>
    <footer className=' flex items-center justify-center gap-2 bg-gradient-to-l from-red-700 to-black h-[15vh]'>
        <div className='text-red-100 font-bold text-sm sm:text-xl text-center w-[25vw]'>INSAAF TRADERS</div>
        <div className='overflow-hidden '>
            <p className='animate-scroll whitespace-nowrap text-red-100 text-sm md:text-lg w-[65vw] inline-block;'>
            Where you get everything on easy installment plans</p> 
        </div>
    </footer>
    <style>{`
          @keyframes scroll_2000 {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll_2000 8s linear infinite;
        }
    }
      `}</style>
      </>
  )
}

export default Footer
