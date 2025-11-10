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
    <div className='min-h-screen md:px-10 py-10 bg-yellow-100'>

      <div
        className="
          mt-7
          md:mt-10h bg-cover bg-center 
          flex flex-col md:flex-row min-h-[40.5em] 
          md:min-h-[39.75em]
          pb-3"
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
          md:mt-0 mt-1
          items-center w-full md:w-[57%] 
          bg-stone-900/25 h-[27vh] md:h-[50vh] 
          md:h-auto text-center px-4 md:p-14">
            
          <div className="mb-1 text-yellow-200 text-2xl md:text-6xl font-light md:mb-4 tracking-wide">
            Take your time with <span className='md:ml-60'>every bite</span>
          </div>
          <div className="mb-2 text-yellow-200 text-4xl md:text-7xl font-[1000] md:mb-4 md:tracking-[.175em] tracking-widest">
            Feel right at <span className='md:mr-60'>HOME</span>
          </div>
          <div className="text-yellow-200 text-xl text-center md:text-l font-light tracking-widest">
            In a world that moves too fast, the taste of home is the one thing that never changes
          </div>
        </div>
      </div>

      <hr className='mt-1 md:mt-4 bg-black h-[.2em]'/>
      <hr className='mt-1 md:mt-2 bg-black h-[.1em]'/>

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

      <hr className='mt-4 bg-black h-[.1em]'/>
      <hr className='mt-1 md:mt-2 bg-black h-[.2em]'/>

      <div className='grid grid-rows-2 mt-5 gap-1 md:gap-0'>

        <div className='grid grid-rows-2 bg-linear-to-r from-stone-900/75 to-stone-950 md:grid-rows-1 md:grid-cols-[40%_60%] md:min-h-[27.5em]'>
          <div className='bg-cover bg-center' style={{backgroundImage: `url(${homeImg1})`}}></div>
          <div className='flex items-center text-center md:text-3xl py-3 md:px-6'>
            <p className='text-yellow-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque culpa porro ipsam illum expedita optio excepturi nesciunt earum ut veniam, sint doloremque, distinctio exercitationem eaque sapiente non mollitia minus vero!</p>
          </div>
        </div>

        <div className='grid bg-linear-to-r from-orange-500/75 to-yellow-200 grid-rows-2 md:grid-rows-1 md:grid-cols-[60%_40%] md:min-h-[27.5em]'>
          <div className='
            md:bg-cover bg-[length:85%_100%] bg-no-repeat bg-center
            md:col-start-2 md:row-start-1
            ' style={{backgroundImage: `url(${homeImg2})`}}></div>
          <div className='
            flex
            md:col-start-1 md:row-start-1
            text-center md:text-3xl
            items-center
            py-3 md:px-6 
          '>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus suscipit modi recusandae officia reprehenderit corrupti impedit aperiam, eum alias a omnis quisquam ipsam nam sint. Ipsam nihil quaerat omnis eos?</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Homepage