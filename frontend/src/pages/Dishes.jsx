import DishCard from "../components/DishCard"



const Dishes = () => {
  return (
    <div className="min-h-[90vh]">
      <div className="mt-">
        <DishCard 
          dishName="TestName"
          dishImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbwDAkKWDA1mGQafmeIFS9rWlEw0pTxlGO7A&s"
        />
      </div>

    </div>
  )
}

export default Dishes