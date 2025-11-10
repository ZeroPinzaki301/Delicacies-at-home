import Carousel from '../components/Carousel'

import WeekFav1 from '../assets/dish-img/1stDishImg.png';
import WeekFav2 from '../assets/dish-img/2ndDishImg.png';
import WeekFav3 from '../assets/dish-img/3rdDishImg.png';
import WeekFav4 from '../assets/dish-img/4thDishImg.png';
import WeekFav5 from '../assets/dish-img/5thDishImg.png';
import WeekFav6 from '../assets/dish-img/6thDishImg.png';
import WeekFav7 from '../assets/dish-img/7thDishImg.png';
import WeekFav8 from '../assets/dish-img/8thDishImg.png';

import FavHeroBg from '../assets/img/favorites-hero-bg.png'

const Favorites = () => {

  const slides = [WeekFav1, WeekFav2, WeekFav3, WeekFav4, WeekFav5, WeekFav6, WeekFav7, WeekFav8]

  return (
    <div className='min-h-screen md:px-10 py-10 bg-yellow-100'>

      <div className='border-2 
        grid grid-cols-[60%_40%] 
        flex items-center mt-7 
        md:mt-10h bg-cover bg-center 
        md:min-h-[90vh]'
        style={{ backgroundImage: `url(${FavHeroBg})`}}
      >
        <div className='border-2 md:h-[80vh]'></div>
        <div className='border-2 md:h-[80vh]'></div>
      </div>

      <div className='md:min-h-[30em] bg-stone-950 flex flex-row'>

        <div className='w-[60%] md:p-3 border-2 '>
          <div>
            <Carousel autoSlide={true} className="h-[18em] w-[100%] md:h-[30em] md:w-[100%]">
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
        </div>

        <div className='w-[50%] flex items-center'>
          <h2 className='md:mt-5 text-yellow-100 text-left p-7 md:leading-normal text-7xl tracking-[.30em] font-thin'>Favorite Dishes for this Week</h2>
        </div>
      </div>

    </div>
  )
}

export default Favorites