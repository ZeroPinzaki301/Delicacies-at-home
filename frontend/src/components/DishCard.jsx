import { TbBowlFilled } from "react-icons/tb";

const DishCard = ({ dishImg, dishName, width = "w-50", height = "h-50", textSize = "text-xl" }) => {
  return (
    <div 
      className={`
        flex flex-col rounded-tl-4xl 
        rounded-bl-sm rounded-br-sm 
        rounded-tr-sm bg-orange-400/25  
        border-2 border-amber-900/50
        items-center justify-center ${width} ${height} px-3 py-1`}>
      
      <div 
        className="
          cursor-pointer
          rounded-b-[4em] md:rounded-b-[6.5em] 
          w-[90%] h-[55%] md:h-[60%] hover:w-[95%] 
          hover:h-[60%] md:hover:h-[65%] bg-cover bg-center
          ease-out duration-300" 
        style={{ backgroundImage: `url(${dishImg})`}}>

      </div>
    
      <h3 className={`mt-1 text-center ${textSize} font-bold tracking-widest text-amber-900 w-full`}>
        {dishName}
      </h3>
    </div>
  );
};

export default DishCard;