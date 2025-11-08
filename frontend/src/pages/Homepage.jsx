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
    <div className='min-h-screen px-1 md:px-10 py-10 bg-yellow-100'>

      <div
        className="
          mt-7
          md:mt-10h bg-cover bg-center 
          flex flex-col md:flex-row min-h-[30em] 
          md:min-h-[39.75em]"
        style={{ backgroundImage: `url(${heroBg})`}}
      >
        {/* Carousel Section */}
        <div className="flex justify-center items-center w-full md:w-[43%] h-[40vh] md:h-auto">
          <Carousel autoSlide={true} className="h-[18em] w-[85%] md:h-[30em] md:w-[35em]">
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
        <div className="
          flex flex-col justify-center 
          items-center w-full md:w-[57%] 
          bg-stone-900/25 h-[27vh] md:h-[50vh] 
          md:h-auto text-center px-4">
          <div className="mb-1 text-yellow-200 text-2xl md:text-5xl font-light md:mb-4 tracking-wider">
            Take your time with every bite
          </div>
          <div className="mb-2 text-yellow-200 text-4xl md:text-7xl font-[1000] md:mb-4 tracking-widest">
            Feel right at HOME
          </div>
          <div className="text-yellow-200 text-xl md:text-3xl font-light tracking-widest">
            Sit back relax, and wait for more
          </div>
        </div>
      </div>

      <hr className='md:mt-4 bg-orange-500 h-[.2em]'/>

      <div className='mt-5 py-3'>
        <h2 className='text-center tracking-widest font-medium text-4xl '>Wide variety of dishes</h2>
        <div className='
          grid 
          grid-cols-2 
          md:grid-cols-4 
          lg:grid-cols-8 
          md:h-[17.5em]
          gap-4 
          pt-6 
          mt-2 
          px-4 
          md:px-0
        '>
          
          {/* Pork */}
          <button className='
            bg-cover bg-center rounded-tl-3xl rounded-sm rounded-br-4xl 
            h-48 md:h-[15em] 
            w-full md:w-[10em]
            md:hover:w-[11.25em] md:hover:h-[17.5em] 
            duration-300 ease-out
            cursor-pointer overflow-hidden
            md:w-[10em]
          ' style={{ backgroundImage: `url(${slidish1})` }}>
            <div className="group h-full w-full">
              <div className="bg-transparent h-full w-full flex items-center justify-center 
                group-hover:bg-stone-900/75 duration-300 ease-out
                text-xl md:text-2xl font-thin tracking-widest text-yellow-200
                opacity-0 group-hover:opacity-100">
                Pork
              </div>
            </div>
          </button>

          {/* Chicken */}
          <button className='
            bg-cover bg-center rounded-tl-3xl rounded-sm rounded-br-4xl 
            h-48 md:h-[15em] 
            w-full
            md:hover:w-[11.25em] md:hover:h-[17.5em] 
            duration-300 ease-out
            cursor-pointer overflow-hidden
            md:w-[10em]
          ' style={{ backgroundImage: `url(${slidish2})` }}>
            <div className="group h-full w-full">
              <div className="bg-transparent h-full w-full flex items-center justify-center 
                group-hover:bg-stone-900/75 duration-300 ease-out
                text-xl md:text-2xl font-thin tracking-widest text-yellow-200
                opacity-0 group-hover:opacity-100">
                Chicken
              </div>
            </div>
          </button>

          {/* Fish */}
          <button className='
            bg-cover bg-center rounded-tl-3xl rounded-sm rounded-br-4xl 
            h-48 md:h-[15em] 
            w-full
            md:hover:w-[11.25em] md:hover:h-[17.5em] 
            duration-300 ease-out
            cursor-pointer overflow-hidden
            md:w-[10em]
          ' style={{ backgroundImage: `url(${slidish3})` }}>
            <div className="group h-full w-full">
              <div className="bg-transparent h-full w-full flex items-center justify-center 
                group-hover:bg-stone-900/75 duration-300 ease-out
                text-xl md:text-2xl font-thin tracking-widest text-yellow-200
                opacity-0 group-hover:opacity-100">
                Fish
              </div>
            </div>
          </button>

          {/* Vegetable */}
          <button className='
            bg-cover bg-center rounded-tl-3xl rounded-sm rounded-br-4xl 
            h-48 md:h-[15em] 
            w-full
            md:hover:w-[11.25em] md:hover:h-[17.5em] 
            duration-300 ease-out
            cursor-pointer overflow-hidden
            md:w-[10em]
          ' style={{ backgroundImage: `url(${slidish4})` }}>
            <div className="group h-full w-full">
              <div className="bg-transparent h-full w-full flex items-center justify-center 
                group-hover:bg-stone-900/75 duration-300 ease-out
                text-xl md:text-2xl font-thin tracking-widest text-yellow-200
                opacity-0 group-hover:opacity-100">
                Vegetable
              </div>
            </div>
          </button>

          {/* Noodle */}
          <button className='
            bg-cover bg-center rounded-tl-3xl rounded-sm rounded-br-4xl 
            h-48 md:h-[15em] 
            w-full
            md:hover:w-[11.25em] md:hover:h-[17.5em] 
            duration-300 ease-out
            cursor-pointer overflow-hidden
            md:w-[10em]
          ' style={{ backgroundImage: `url(${slidish5})` }}>
            <div className="group h-full w-full">
              <div className="bg-transparent h-full w-full flex items-center justify-center 
                group-hover:bg-stone-900/75 duration-300 ease-out
                text-xl md:text-2xl font-thin tracking-widest text-yellow-200
                opacity-0 group-hover:opacity-100">
                Noodle
              </div>
            </div>
          </button>

          {/* Beef */}
          <button className='
            bg-cover bg-center rounded-tl-3xl rounded-sm rounded-br-4xl 
            h-48 md:h-[15em] 
            w-full
            md:hover:w-[11.25em] md:hover:h-[17.5em] 
            duration-300 ease-out
            cursor-pointer overflow-hidden
            md:w-[10em]
          ' style={{ backgroundImage: `url(${slidish6})` }}>
            <div className="group h-full w-full">
              <div className="bg-transparent h-full w-full flex items-center justify-center 
                group-hover:bg-stone-900/75 duration-300 ease-out
                text-xl md:text-2xl font-thin tracking-widest text-yellow-200
                opacity-0 group-hover:opacity-100">
                Beef
              </div>
            </div>
          </button>

          {/* Seafood */}
          <button className='
            bg-cover bg-center rounded-tl-3xl rounded-sm rounded-br-4xl 
            h-48 md:h-[15em] 
            w-full
            md:hover:w-[11.25em] md:hover:h-[17.5em] 
            duration-300 ease-out
            cursor-pointer overflow-hidden
            md:w-[10em]
          ' style={{ backgroundImage: `url(${slidish7})` }}>
            <div className="group h-full w-full">
              <div className="bg-transparent h-full w-full flex items-center justify-center 
                group-hover:bg-stone-900/75 duration-300 ease-out
                text-xl md:text-2xl font-thin tracking-widest text-yellow-200
                opacity-0 group-hover:opacity-100">
                Seafood
              </div>
            </div>
          </button>

          {/* Dessert */}
          <button className='
            bg-cover bg-center rounded-tl-3xl rounded-sm rounded-br-4xl 
            h-48 md:h-[15em] 
            w-full
            md:hover:w-[11.25em] md:hover:h-[17.5em] 
            duration-300 ease-out
            cursor-pointer overflow-hidden
            md:w-[10em]
          ' style={{ backgroundImage: `url(${slidish8})` }}>
            <div className="group h-full w-full">
              <div className="bg-transparent h-full w-full flex items-center justify-center 
                group-hover:bg-stone-900/75 duration-300 ease-out
                text-xl md:text-2xl font-thin tracking-widest text-yellow-200
                opacity-0 group-hover:opacity-100">
                Dessert
              </div>
            </div>
          </button>

        </div>
      </div>

      <hr className='mt-4 bg-orange-500 h-[.2em]'/>

      <div className='mt-5 flex flex-col'>
        <div className='
          md:h-[25em] grid grid-rows-[5fr, 5fr] min-h-[22.75em] 
          md:flex md:flex-row bg-linear-to-r 
          from-stone-900/75 to-stone-950/75'>
          <div className='w-full md:h-full md:w-[40%] bg-cover bg-center' style={{ backgroundImage: `url(${homeImg1})` }}></div>
          <div className='w-full h-[.5em] md:h-full md:w-[60%] flex md:items-center'>
            <p className='border border-stone-900/0 mt-2 md:mt-0 text-yellow-200 md:px-6 text-center md:text-right text-l md:text-3xl font-thin tracking-widest'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ea unde pariatur, laudantium eum rerum dolorum illum quos excepturi architecto odio nobis in? Nulla, esse voluptates. Numquam quam animi maiores.</p>
          </div>
        </div>
        <div className='
          md:h-[25em] grid grid-rows-[5fr, 5fr] min-h-[22.75em] 
          md:flex md:flex-row bg-linear-to-r 
          from-orange-400/75 to-yellow-200/75
          md:mt-0 mt-2'>
          <div className='w-full h-[.5em] md:h-full md:w-[60%] flex md:items-center'>
            <p className='border md:row-start-1 mt-2 md:mt-0 row-start-2 border-stone-900/0 text-stone-900 text-center md:text-left md:text-3xl text-l font-thin tracking-widest md:px-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ea unde pariatur, laudantium eum rerum dolorum illum quos excepturi architecto odio nobis in? Nulla, esse voluptates. Numquam quam animi maiores.</p>
          </div>
          <div className='
            w-full md:bg-white/75 bg-stone-200/75
            md:row-start-2 row-start-1 md:w-[40%] 
            md:bg-[length:100%_100%] bg-no-repeat 
            bg-[length:70%_100%] bg-center' 
            style={{ backgroundImage: `url(${homeImg2})` }}>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Homepage