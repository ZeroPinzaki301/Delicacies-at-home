import { TbBowlFilled } from "react-icons/tb";

const DishCard = ({ dishImg, dishName, width = "w-50", height = "h-50" }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${width} ${height} p-4`}>
      
      
    
      <h3 className="mt-3 text-center font-medium text-gray-800 truncate w-full">
        {dishName}
      </h3>
    </div>
  );
};

export default DishCard;