import { useState, useEffect } from 'react';
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const Carousel = ({ 
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
  className = ''
}) => {

  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent(current => current === 0 ? slides.length - 1 : current - 1)
  }

  const next = () => {
    setCurrent(current => current === slides.length - 1 ? 0 : current + 1)
  }

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide, autoSlideInterval])

  return (
    <div className={`overflow-hidden relative ${className}`}> {/* Apply className here */}

      <div className='flex transition-transform ease-out duration-500 h-full' 
           style={{transform: `translateX(-${current * 100}%)`}}>
        {slides}
      </div>

      <div className='absolute inset-0 flex items-center justify-between p-1'>
        <button onClick={prev} className='cursor-pointer text-yellow-200 text-5xl hover:scale-110 hover:text-yellow-400 transition-transform'>
          <FaArrowCircleLeft />
        </button>

        <button onClick={next} className='cursor-pointer text-yellow-200 text-5xl hover:scale-110 hover:text-yellow-400 transition-transform'>
          <FaArrowCircleRight />
        </button>
      </div>

      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {slides.map((_, i) => (
            <div 
              key={i}
              className={`
                transition-all w-2 h-2 bg-yellow-200 rounded-full cursor-pointer
                ${current === i ? "p-2" : "bg-opacity-50"}
              `}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel