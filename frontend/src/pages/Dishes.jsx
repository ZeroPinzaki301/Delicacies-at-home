import React, { useState } from "react";
import DishCard from "../components/DishCard";
import dishesData from "../data/dishes.json";
import { MdPlaylistRemove } from "react-icons/md";

const Dishes = () => {
  const [selectedType, setSelectedType] = useState(null);

  const cloudinaryLink = "https://res.cloudinary.com/dqs9oiho2/image/upload/";
  const WeekFav1 = `${cloudinaryLink}v1763443535/1stDishImg_nnddos.png`;
  const WeekFav2 = `${cloudinaryLink}v1763443542/2ndDishImg_vmk4bc.png`;
  const WeekFav3 = `${cloudinaryLink}v1763443512/3rdDishImg_lugyg1.png`;
  const WeekFav4 = `${cloudinaryLink}v1763443541/4thDishImg_fluehj.png`;
  const WeekFav5 = `${cloudinaryLink}v1763443518/5thDishImg_l18zg6.png`;
  const WeekFav6 = `${cloudinaryLink}v1763443541/6thDishImg_mt8ncl.png`;
  const WeekFav7 = `${cloudinaryLink}v1763443523/7thDishImg_lnhckt.png`;
  const WeekFav8 = `${cloudinaryLink}v1763443518/8thDishImg_wnnfm2.png`;

  const categories = [
    { name: "Pork", img: WeekFav2 },
    { name: "Chicken", img: WeekFav8 },
    { name: "Fish", img: WeekFav6 },
    { name: "Vegetable", img: WeekFav7 },
    { name: "Noodle", img: WeekFav4 },
    { name: "Beef", img: WeekFav3 },
    { name: "Seafood", img: WeekFav1 },
    { name: "Dessert", img: WeekFav5 },
  ];

  const getDishesByType = (type) => {
    return dishesData[type.toLowerCase()] || [];
  };

  return (
    <div className="min-h-screen px-1 md:px-10 py-10 bg-yellow-100 overflow-x-hidden">

      {/* If no category selected → original grid */}
      {!selectedType ? (
        
        <div className="mt-7 gap-1 md:gap-7 md:px-15 grid grid-cols-2 md:grid-cols-4 transition-all duration-500 ease-in-out">
          <h1 className="mt-1 col-span-2 mb-3 text-center text-3xl md:text-6xl tracking-widest transition-all duration-500 ease-in-out">
            Category of Dishes
          </h1>
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => setSelectedType(cat.name)}
              className="cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <DishCard
                width="w-full"
                height="md:h-[16.15em] h-[11em]"
                dishName={cat.name}
                dishImg={cat.img}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex mt-10">
          {/* Left side: fixed category buttons (20%) */}
          <div 
            className="
              z-0
              fixed mt-10 left-0 
              top-0 h-screen w-1/5 
              grid grid-cols-1 md:grid-cols-2 
              grid-rows-[.75fr_.75fr_.75fr_.75fr_.75fr_.75fr_.75fr_.75fr_.75fr_.75fr] 
              md:grid-rows-[1.5fr_2fr_2fr_2fr_2fr_.5fr] 
              p-2 bg-yellow-200 shadow-lg 
              transition-transform duration-500 ease-in-out">
            {/* Back / X button */}
            <button
              onClick={() => setSelectedType(null)}
              className="md:col-span-2 text-white py-2 rounded transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <MdPlaylistRemove className="text-black text-3xl md:text-6xl mt-3 cursor-pointer md:ml-5"/>
            </button>

            {categories.map((cat) => (
              <div
                key={cat.name}
                onClick={() => setSelectedType(cat.name)}
                className={`cursor-pointer rounded-tl-4xl w-[4em] h-[4em] md:w-[8em] md:h-[8em] rounded-bl-sm rounded-br-sm rounded-tr-sm transform transition-transform duration-300 ease-in-out hover:scale-105 ${
                  selectedType === cat.name ? "bg-orange-300/75" : ""
                }`}
              >
                <DishCard
                  width="w-[4em] md:w-[8em]"
                  height="h-[4em] md:h-[8em]"
                  dishName={cat.name}
                  dishImg={cat.img}
                  textSize="text-[.42em] md:text-[1em]"
                />
              </div>
            ))}
          </div>

          {/* Right side: rendered dishes (80%) */}
          <div className="ml-[20%] w-4/5 pl-6 transition-opacity duration-500 ease-in-out">
            <h1 className="mt-1 text-center text-3xl md:text-6xl tracking-widest transition-all duration-500 ease-in-out">
              Category of Dishes
            </h1>

            <h2 className="mt-3 underline text-xl md:text-3xl mb-5 text-center capitalize">
              {selectedType} Dishes
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {getDishesByType(selectedType).map((dish) => (
                <DishCard
                  key={dish.dishId}
                  width="w-full"
                  height="h-[10em] md:h-[18em]"
                  dishName={dish.name}
                  dishImg={dish.imgPath}
                  textSize="text-[.6em] md:text-[1.25em]"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dishes;