import Carousel from '../components/Carousel';

// Image imports top
import slidish1 from '../assets/img/slidish-1.jpg';
import slidish2 from '../assets/img/slidish-2.jpg';
import slidish3 from '../assets/img/slidish-3.jpg';
import slidish4 from '../assets/img/slidish-4.jpg';
import slidish5 from '../assets/img/slidish-5.jpg';
import slidish6 from '../assets/img/slidish-6.jpg';
import slidish7 from '../assets/img/slidish-7.jpg';
import slidish8 from '../assets/img/slidish-8.jpg';
import heroBg from '../assets/img/hero-bg.png';
import homeImg1 from '../assets/img/home-img-1.png';
import homeImg2 from '../assets/img/home-img-2.png';
// Image imports bottom

const Homepage = () => {

  const slides = [
    slidish1, slidish2, slidish3, slidish4, 
    slidish5, slidish6, slidish7, slidish8
  ]

  return (
    <div className='min-h-screen px-10 py-10 bg-yellow-100'>

      <div
        className="mt-10 flex flex-col md:flex-row min-h-screen md:min-h-[40em]"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Carousel Section */}
        <div className="flex justify-center items-center w-full md:w-[43%] h-[50vh] md:h-auto">
          <Carousel autoSlide={true} className="h-[20em] w-[90%] md:h-[30em] md:w-[35em]">
            {slides.map((s, index) => (
              <img
                key={index}
                src={s}
                className="object-cover flex-shrink-0"
                alt={`Slide ${index + 1}`}
              />
            ))}
          </Carousel>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center items-center w-full md:w-[57%] bg-stone-900/25 h-[50vh] md:h-auto text-center px-4">
          <div className="text-yellow-200 text-3xl md:text-5xl font-bold mb-4">
            Take your time with every bite
          </div>
          <div className="text-yellow-200 text-5xl md:text-7xl font-[1000] mb-4">
            Feel right at HOME
          </div>
          <div className="text-yellow-200 text-xl md:text-3xl font-bold tracking-widest">
            Sit back relax, and wait for more
          </div>
        </div>
      </div>

      <hr className='mt-4 bg-orange-500 h-[.2em]'/>

      <div className='mt-5 h-[24.5em] py-3'>
        <h2 className='text-center tracking-widest font-bold text-4xl '>Wide variety of dishes</h2>
        <div className='flex pt-6 gap-5 mt-2 justify-center'>

          <button className='bg-cover bg-center rounded-tl-3xl 
          rounded-sm rounded-br-4xl h-[15em] w-[11%] 
          hover:w-[15%] hover:h-[20em] duration-300 ease-out
          cursor-pointer overflow-hidden' 
          style={{ backgroundImage: `url(${slidish1})` }}>
            <div className="group h-full w-full">
              <div className="bg-transparent h-full w-full flex items-center justify-center 
              group-hover:bg-stone-900/75 duration-300 ease-out
              text-3xl font-bold tracking-widest text-yellow-200
              invisible group-hover:visible">
                Pork
              </div>
            </div>
          </button>

          <button className='bg-cover bg-center rounded-tl-3xl 
          rounded-sm rounded-br-4xl h-[15em] w-[11%]
          hover:w-[15%] hover:h-[20em] duration-300 ease-out
          cursor-pointer overflow-hidden' 
          style={{ backgroundImage: `url(${slidish2})` }}>
            <div className="group h-full w-full">
              <div className="bg-transparent h-full w-full flex items-center justify-center 
              group-hover:bg-stone-900/75 duration-300 ease-out
              text-3xl font-bold tracking-widest text-yellow-200
              invisible group-hover:visible">
                Chicken
              </div>
            </div>
          </button>

          <button className='bg-cover bg-center rounded-tl-3xl 
          rounded-sm rounded-br-4xl h-[15em] w-[11%]
          hover:w-[15%] hover:h-[20em] duration-300 ease-out
          cursor-pointer overflow-hidden' 
          style={{ backgroundImage: `url(${slidish3})` }}>
            <div className="group h-full w-full">
              <div className="bg-transparent h-full w-full flex items-center justify-center 
              group-hover:bg-stone-900/75 duration-300 ease-out
              text-3xl font-bold tracking-widest text-yellow-200
              invisible group-hover:visible">
                Fish
              </div>
            </div>
          </button>

          <button className='bg-cover bg-center rounded-tl-3xl 
          rounded-sm rounded-br-4xl h-[15em] w-[11%]
          hover:w-[15%] hover:h-[20em] duration-300 ease-out
          cursor-pointer overflow-hidden' 
          style={{ backgroundImage: `url(${slidish4})` }}>
            <div className="group h-full w-full">
              <div className="bg-transparent h-full w-full flex items-center justify-center 
              group-hover:bg-stone-900/75 duration-300 ease-out
              text-3xl font-bold tracking-widest text-yellow-200
              invisible group-hover:visible">
                Vegetable
              </div>
            </div>
          </button>

          <button className='bg-cover bg-center rounded-tl-3xl 
          rounded-sm rounded-br-4xl h-[15em] w-[11%]
          hover:w-[15%] hover:h-[20em] duration-300 ease-out
          cursor-pointer overflow-hidden' 
          style={{ backgroundImage: `url(${slidish5})` }}>
            <div className="group h-full w-full">
              <div className="bg-transparent h-full w-full flex items-center justify-center 
              group-hover:bg-stone-900/75 duration-300 ease-out
              text-3xl font-bold tracking-widest text-yellow-200
              invisible group-hover:visible">
                Noodle
              </div>
            </div>
          </button>

          <button className='bg-cover bg-center rounded-tl-3xl 
          rounded-sm rounded-br-4xl h-[15em] w-[11%]
          hover:w-[15%] hover:h-[20em] duration-300 ease-out
          cursor-pointer overflow-hidden' 
          style={{ backgroundImage: `url(${slidish6})` }}>
            <div className="group h-full w-full">
              <div className="bg-transparent h-full w-full flex items-center justify-center 
              group-hover:bg-stone-900/75 duration-300 ease-out
              text-3xl font-bold tracking-widest text-yellow-200
              invisible group-hover:visible">
                Beef
              </div>
            </div>
          </button>

          <button className='bg-cover bg-center rounded-tl-3xl 
          rounded-sm rounded-br-4xl h-[15em] w-[11%]
          hover:w-[15%] hover:h-[20em] duration-300 ease-out
          cursor-pointer overflow-hidden' 
          style={{ backgroundImage: `url(${slidish7})` }}>
            <div className="group h-full w-full">
              <div className="bg-transparent h-full w-full flex items-center justify-center 
              group-hover:bg-stone-900/75 duration-300 ease-out
              text-3xl font-bold tracking-widest text-yellow-200
              invisible group-hover:visible">
                Seafood
              </div>
            </div>
          </button>

          <button className='bg-cover bg-center rounded-tl-3xl 
          rounded-sm rounded-br-4xl h-[15em] w-[11%]
          hover:w-[15%] hover:h-[20em] duration-300 ease-out
          cursor-pointer overflow-hidden' 
          style={{ backgroundImage: `url(${slidish8})` }}>
            <div className="group h-full w-full">
              <div className="bg-transparent h-full w-full flex items-center justify-center 
              group-hover:bg-stone-900/75 duration-300 ease-out
              text-3xl font-bold tracking-widest text-yellow-200
              invisible group-hover:visible">
                Dessert
              </div>
            </div>
          </button>

        </div>
      </div>

      <hr className='mt-4 bg-orange-500 h-[.2em]'/>

      <div className='mt-5 flex flex-col'>
        <div className='min-h-[25em] flex bg-linear-to-r from-stone-900/75 to-stone-950/75'>
          <div className='w-[40%] bg-cover bg-center' style={{ backgroundImage: `url(${homeImg1})` }}></div>
          <div className='w-[60%] flex items-center px-6'>
            <p className='text-yellow-200 text-right text-3xl font-bold tracking-widest'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ea unde pariatur, laudantium eum rerum dolorum illum quos excepturi architecto odio nobis in? Nulla, esse voluptates. Numquam quam animi maiores.</p>
          </div>
        </div>
        <div className='min-h-[25em] flex bg-linear-to-r from-orange-300/75 to-yellow-200/75'>
          <div className='w-[60%] flex items-center px-6 '>
            <p className='text-stone-900 text-left text-3xl font-bold tracking-widest'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ea unde pariatur, laudantium eum rerum dolorum illum quos excepturi architecto odio nobis in? Nulla, esse voluptates. Numquam quam animi maiores.</p>
          </div>
          <div className='w-[40%] bg-[length:100%_100%] bg-center' style={{ backgroundImage: `url(${homeImg2})` }}></div>
        </div>
      </div>

    </div>
  )
}

export default Homepage