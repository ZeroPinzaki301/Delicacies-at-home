import DishCard from "../components/DishCard"

const Dishes = () => {

  const cloudinaryLink = 'https://res.cloudinary.com/dqs9oiho2/image/upload/';

  const WeekFav1 = `${cloudinaryLink}v1763443535/1stDishImg_nnddos.png`;
  const WeekFav2 = `${cloudinaryLink}v1763443542/2ndDishImg_vmk4bc.png`;
  const WeekFav3 = `${cloudinaryLink}v1763443512/3rdDishImg_lugyg1.png`;
  const WeekFav4 = `${cloudinaryLink}v1763443541/4thDishImg_fluehj.png`;
  const WeekFav5 = `${cloudinaryLink}v1763443518/5thDishImg_l18zg6.png`;
  const WeekFav6 = `${cloudinaryLink}v1763443541/6thDishImg_mt8ncl.png`;
  const WeekFav7 = `${cloudinaryLink}v1763443523/7thDishImg_lnhckt.png`;
  const WeekFav8 = `${cloudinaryLink}v1763443518/8thDishImg_wnnfm2.png`;

  return (
    <div className="min-h-screen px-1 md:px-10 py-10 bg-yellow-100 overflow-x-hidden">

      <h1 className="mt-12 text-center text-6xl tracking-widest">Category of Dishes</h1>

      <div className="mt-5 gap-1 md:gap-7 md:px-15 grid grid-cols-2 md:grid-cols-4">
        <div className="mt-">
          <DishCard 
            width="w-full"
            height="md:h-[16.15em] h-[11em]"
            dishName="Pork"
            dishImg={WeekFav2}
          />
        </div>
        <div className="mt-">
          <DishCard 
            width="w-full"
            height="md:h-[16.15em] h-[11em]"
            dishName="Chicken"
            dishImg={WeekFav8}
          />
        </div>
        <div className="mt-">
          <DishCard 
            width="w-full"
            height="md:h-[16.15em] h-[11em]"
            dishName="Fish"
            dishImg={WeekFav6}
          />
        </div>
        <div className="mt-">
          <DishCard 
            width="w-full"
            height="md:h-[16.15em] h-[11em]"
            dishName="Vegetable"
            dishImg={WeekFav7}
          />
        </div>
        <div className="mt-">
          <DishCard 
            width="w-full"
            height="md:h-[16.15em] h-[11em]"
            dishName="Noodle"
            dishImg={WeekFav4}
          />
        </div>
        <div className="mt-">
          <DishCard 
            width="w-full"
            height="md:h-[16.15em] h-[11em]"
            dishName="Beef"
            dishImg={WeekFav3}
          />
        </div>
        <div className="mt-">
          <DishCard 
            width="w-full"
            height="md:h-[16.15em] h-[11em]"
            dishName="Seafood"
            dishImg={WeekFav1}
          />
        </div>
        <div className="mt-">
          <DishCard 
            width="w-full"
            height="md:h-[16.15em] h-[11em]"
            dishName="Dessert"
            dishImg={WeekFav5}
          />
        </div>
      </div>
    
    </div>
  )
}

export default Dishes