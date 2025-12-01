import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Carousel from '../components/Carousel';

const Favorites = () => {
  const [hovered, setHovered] = useState(null);

  const cloudinaryLink = 'https://res.cloudinary.com/dqs9oiho2/image/upload/';

  const WeekFav1 = `${cloudinaryLink}v1763443535/1stDishImg_nnddos.png`;
  const WeekFav2 = `${cloudinaryLink}v1763443542/2ndDishImg_vmk4bc.png`;
  const WeekFav3 = `${cloudinaryLink}v1763443512/3rdDishImg_lugyg1.png`;
  const WeekFav4 = `${cloudinaryLink}v1763443541/4thDishImg_fluehj.png`;
  const WeekFav5 = `${cloudinaryLink}v1763443518/5thDishImg_l18zg6.png`;
  const WeekFav6 = `${cloudinaryLink}v1763443541/6thDishImg_mt8ncl.png`;
  const WeekFav7 = `${cloudinaryLink}v1763443523/7thDishImg_lnhckt.png`;
  const WeekFav8 = `${cloudinaryLink}v1763443518/8thDishImg_wnnfm2.png`;

  const FavHeroBg = `${cloudinaryLink}v1763443552/favorites-hero-bg_m96hzd.png`;
  const FavEndBg = `${cloudinaryLink}v1763443490/fav-bg-end_dz5m1l.jpg`;

  const slides = [WeekFav1, WeekFav2, WeekFav3, WeekFav4, WeekFav5, WeekFav6, WeekFav7, WeekFav8];

  const hoverFavorite = (x) => {
    setHovered(x);
  };

  const renderContent = () => {
    switch (hovered) {
      case "fav1":
        return  <AnimatePresence mode="wait">
                  {hovered && (
                    <motion.div
                      key={hovered}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className='w-full h-full bg-cover'
                      style={{ backgroundImage: `url(${WeekFav1})` }}
                    >
                      <div className='bg-linear-to-t from-stone-950 via-stone-700/70 to-stone-600/50 h-[100%] w-[100%] flex flex-col justify-end p-7'>
                        <h2 className='text-yellow-300 text-xl md:text-4xl mb-2 tracking-[.2em]'>Ginataang Alimango</h2>
                        <hr className='h-[.2em] text-yellow-200 bg-yellow-200'/>
                        <p className='text-yellow-200 tracking-widest text-sm text-justify'>Ginataang alimango is a Filipino crab dish simmered in coconut milk with garlic, ginger, and chili. Its creamy, savory sauce enhances the natural sweetness of the crab, making it a comforting and flavorful meal often enjoyed with rice.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

      case "fav2":
        return  <AnimatePresence mode="wait">
                  {hovered && (
                    <motion.div
                      key={hovered}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className='w-full h-full bg-cover'
                      style={{ backgroundImage: `url(${WeekFav2})` }}
                    >
                      <div className='bg-linear-to-t from-stone-950 via-stone-700/70 to-stone-600/50 h-[100%] w-[100%] flex flex-col justify-end p-7'>
                        <h2 className='text-yellow-300 text-xl md:text-4xl mb-2 tracking-[.2em]'>Lechon Kawali</h2>
                        <hr className='h-[.2em] text-yellow-200 bg-yellow-200'/>
                        <p className='text-yellow-200 tracking-widest text-sm text-justify'>Lechon kawali is crispy deep-fried pork belly, boiled first then fried to golden perfection. It's crunchy on the outside, tender inside, and often served with a tangy liver sauce.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
      case "fav3":
        return  <AnimatePresence mode="wait">
                  {hovered && (
                    <motion.div
                      key={hovered}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className='w-full h-full bg-cover'
                      style={{ backgroundImage: `url(${WeekFav3})` }}
                    >
                      <div className='bg-linear-to-t from-stone-950 via-stone-700/70 to-stone-600/50 h-[100%] w-[100%] flex flex-col justify-end p-7'>
                        <h2 className='text-yellow-300 text-xl md:text-4xl mb-2 tracking-[.2em]'>Nilagang Baka</h2>
                        <hr className='h-[.2em] text-yellow-200 bg-yellow-200'/>
                        <p className='text-yellow-200 tracking-widest text-sm text-justify'>Nilagang baka is a comforting beef soup simmered with potatoes, corn, cabbage, and peppercorns. Its clear broth is mild and savory, perfect for rainy days or simple meals.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
      case "fav4":
        return  <AnimatePresence mode="wait">
                  {hovered && (
                    <motion.div
                      key={hovered}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className='w-full h-full bg-cover'
                      style={{ backgroundImage: `url(${WeekFav4})` }}
                    >
                      <div className='bg-linear-to-t from-stone-950 via-stone-700/70 to-stone-600/50 h-[100%] w-[100%] flex flex-col justify-end p-7'>
                        <h2 className='text-yellow-300 text-xl md:text-4xl mb-2 tracking-[.2em]'>Pancit Palabok</h2>
                        <hr className='h-[.2em] text-yellow-200 bg-yellow-200'/>
                        <p className='text-yellow-200 tracking-widest text-sm text-justify'>Pancit palabok features rice noodles topped with a rich orange sauce made from shrimp and annatto. Garnished with boiled eggs, chicharrón, and green onions, it's festive and flavorful</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
      case "fav5":
        return  <AnimatePresence mode="wait">
                  {hovered && (
                    <motion.div
                      key={hovered}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className='w-full h-full bg-cover'
                      style={{ backgroundImage: `url(${WeekFav5})` }}
                    >
                      <div className='bg-linear-to-t from-stone-950 via-stone-700/70 to-stone-600/50 h-[100%] w-[100%] flex flex-col justify-end p-7'>
                        <h2 className='text-yellow-300 text-xl md:text-4xl mb-2 tracking-[.2em]'>Halo Halo</h2>
                        <hr className='h-[.2em] text-yellow-200 bg-yellow-200'/>
                        <p className='text-yellow-200 tracking-widest text-sm text-justify'>Halo-halo is a colorful Filipino dessert of crushed ice, sweet beans, fruits, jellies, and leche flan. Mixed together with milk, it's a refreshing treat for hot days</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
      case "fav6":
        return  <AnimatePresence mode="wait">
                  {hovered && (
                    <motion.div
                      key={hovered}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className='w-full h-full bg-cover'
                      style={{ backgroundImage: `url(${WeekFav6})` }}
                    >
                      <div className='bg-linear-to-t from-stone-950 via-stone-700/70 to-stone-600/50 h-[100%] w-[100%] flex flex-col justify-end p-7'>
                        <h2 className='text-yellow-300 text-xl md:text-4xl mb-2 tracking-[.2em]'>Sinigang na Bangus</h2>
                        <hr className='h-[.2em] text-yellow-200 bg-yellow-200'/>
                        <p className='text-yellow-200 tracking-widest text-sm text-justify'>Sinigang na bangus is milkfish simmered in a sour tamarind broth with vegetables like kangkong and radish. Its tangy flavor is balanced by the soft, delicate fish</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
      case "fav7":
        return  <AnimatePresence mode="wait">
                  {hovered && (
                    <motion.div
                      key={hovered}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className='w-full h-full bg-cover'
                      style={{ backgroundImage: `url(${WeekFav7})` }}
                    >
                      <div className='bg-linear-to-t from-stone-950 via-stone-700/70 to-stone-600/50 h-[100%] w-[100%] flex flex-col justify-end p-7'>
                        <h2 className='text-yellow-300 text-xl md:text-4xl mb-2 tracking-[.2em]'>Pinakbet</h2>
                        <hr className='h-[.2em] text-yellow-200 bg-yellow-200'/>
                        <p className='text-yellow-200 tracking-widest text-sm text-justify'>Pinakbet is a vegetable stew made with squash, eggplant, bitter melon, and okra, flavored with bagoong. It's earthy, salty, and deeply rooted in Ilocano cooking.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
      case "fav8":
        return  <AnimatePresence mode="wait">
                  {hovered && (
                    <motion.div
                      key={hovered}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className='w-full h-full bg-cover'
                      style={{ backgroundImage: `url(${WeekFav8})` }}
                    >
                      <div className='bg-linear-to-t from-stone-950 via-stone-700/70 to-stone-600/50 h-[100%] w-[100%] flex flex-col justify-end p-7'>
                        <h2 className='text-yellow-300 text-xl md:text-4xl mb-2 tracking-[.2em]'>Adobong Manok</h2>
                        <hr className='h-[.2em] text-yellow-200 bg-yellow-200'/>
                        <p className='text-yellow-200 tracking-widest text-sm text-justify'>Adobong manok is chicken braised in soy sauce, vinegar, garlic, and bay leaves. Its savory, slightly tangy flavor makes it one of the Philippines' most iconic dishes.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
      default:
        return <div className='w-full h-full bg-cover bg-center' style={{ backgroundImage: `url(${FavEndBg})` }}></div>;
    }
  };

  return (
    <div className='min-h-screen md:px-10 py-10 bg-yellow-100'>

      {/* Hero Section */}
      <div 
        className='md:mt-7 bg-cover bg-center mt-7 md:min-h-[90vh]'
        style={{ backgroundImage: `url(${FavHeroBg})`}}
      >
        <div className='grid grid-cols-[70%_30%] flex items-center h-[100%] md:min-h-[90vh] bg-linear-to-r from-stone-950/75 via-amber-950/75 to-yellow-900/50'>
          <div className='flex flex-col justify-center md:h-[40vh] gap-5 md:mx-35 md:border-x-7 md:border-yellow-400 p-10'>
            <div className='
              md:text-6xl tracking-widest 
              font-bold text-center text-yellow-300 
              text-shadow-lg text-shadow-yellow-100/20
              border-t-5 md:border-r-10 border-r-5
              md:w-full
              text-5xl text-center w-[40vh]
            '>Home Favorites</div>
            <div className='
              md:px-15 text-2xl md:text-justify 
              tracking-wide md:leading-[1.5em] 
              text-orange-300 md:border-l-10 border-l-5 border-b-5
              md:p-0
              md:w-full
              w-[30vh] p-3
            '>Explore the meals that gather people around the table—and turn everyday moments into lasting memories.</div>
          </div>
          <div className='md:h-[80vh]'></div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className='md:min-h-[30em] bg-stone-950 flex flex-col-reverse md:flex-row items-center'>
        <div className='md:w-[60%] w-[90%] md:p-3 border-2'>
          <div>
            <Carousel autoSlide={true} className="h-[15em] w-[100%] md:h-[30em] md:w-[100%]">
              {slides.map((s, index) => (
                <img
                  key={index}
                  src={s}
                  className="object-cover flex-shrink-0 w-full h-full"
                  alt={`Slide ${index + 1}`}
                  onError={(e) => {
                    console.error(`Failed to load image: ${s}`);
                    e.target.style.backgroundColor = '#ccc';
                  }}
                />
              ))}
            </Carousel>
          </div>
        </div>

        <div className='md:w-[50%] flex items-center md:border-r-5 md:border-b-4 md:border-yellow-200 md:mx-5 md:my-10'>
          <h2 className='
            md:my-7 md:mx-7 text-yellow-100 text-left p-7 
            md:leading-tight md:text-7xl tracking-[.30em] 
            font-thin md:border-l-7 md:border-t-5 md:border-yellow-200
            text-5xl
          '>Favorite Dishes for this Week</h2>
        </div>
      </div>

      <hr className='mt-3 h-1 bg-black'/>
      <hr className='my-1 h-2 bg-black'/>
      <hr className='mb-3 h-1 bg-black'/>

      {/* Interactive Favorites Section */}
      <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-[60%_40%] bg-linear-to-r from-stone-950/75 via-amber-950/75 to-yellow-900/50 md:min-h-[70vh] border-2'>
        <div className='row-start-2 md:row-start-1 border-2 h-[50vh] md:h-[100%] bg-cover bg-center'>
          {renderContent()}
        </div>
        <div className='row-start-1 py-10'>
          <h2 className='text-center md:text-4xl mb-5 text-yellow-100'>All time favorites</h2>
          <div className='grid grid-cols-2 md:grid-cols-1 text-center flex flex-col gap-3 text-md md:text-2xl text-yellow-100'>
            <p className='cursor-pointer hover:underline underline-offset-1 hover:text-shadow-md text-shadow-yellow-100/75 duration-500 ease-in-out' 
               onMouseOver={() => hoverFavorite("fav1")} onMouseOut={() => hoverFavorite(null)}>
              Ginataang Alimango
            </p>
            <p className='cursor-pointer hover:underline underline-offset-1 hover:text-shadow-md text-shadow-yellow-100/75 duration-500 ease-in-out' 
               onMouseOver={() => hoverFavorite("fav2")} onMouseOut={() => hoverFavorite(null)}>
              Lechon Kawali
            </p>
            <p className='cursor-pointer hover:underline underline-offset-1 hover:text-shadow-md text-shadow-yellow-100/75 duration-500 ease-in-out' 
               onMouseOver={() => hoverFavorite("fav3")} onMouseOut={() => hoverFavorite(null)}>
              Nilagang Baka
            </p>
            <p className='cursor-pointer hover:underline underline-offset-1 hover:text-shadow-md text-shadow-yellow-100/75 duration-500 ease-in-out' 
               onMouseOver={() => hoverFavorite("fav4")} onMouseOut={() => hoverFavorite(null)}>
              Pancit Palabok
            </p>
            <p className='cursor-pointer hover:underline underline-offset-1 hover:text-shadow-md text-shadow-yellow-100/75 duration-500 ease-in-out' 
               onMouseOver={() => hoverFavorite("fav5")} onMouseOut={() => hoverFavorite(null)}>
              Halo Halo
            </p>
            <p className='cursor-pointer hover:underline underline-offset-1 hover:text-shadow-md text-shadow-yellow-100/75 duration-500 ease-in-out' 
               onMouseOver={() => hoverFavorite("fav6")} onMouseOut={() => hoverFavorite(null)}>
              Sinigang na Bangus
            </p>
            <p className='cursor-pointer hover:underline underline-offset-1 hover:text-shadow-md text-shadow-yellow-100/75 duration-500 ease-in-out' 
               onMouseOver={() => hoverFavorite("fav7")} onMouseOut={() => hoverFavorite(null)}>
              Pinakbet
            </p>
            <p className='cursor-pointer hover:underline underline-offset-1 hover:text-shadow-md text-shadow-yellow-100/75 duration-500 ease-in-out' 
               onMouseOver={() => hoverFavorite("fav8")} onMouseOut={() => hoverFavorite(null)}>
              Adobong Manok
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Favorites;