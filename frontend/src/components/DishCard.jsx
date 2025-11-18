

const DishCard = ({dishImg, dishName, width = "w-64", height = "h-50"}) => {
  return (
    <div className={`overflow-hidden rounded-t-[1em] rounded-b-[10em] bg-red-500 ${width} ${height} flex flex-col items-center justify-start`}>
      <img 
        src={dishImg} 
        alt={dishName}
        className="w-full h-2/3 object-cover object-center"
      />

      <div className="w-full h-1/3 flex items-center justify-center p-2">
        <h2 className="text-lg font-semibold text-gray-800 text-center">{dishName}</h2>
      </div>
    </div>
  )
}

export default DishCard