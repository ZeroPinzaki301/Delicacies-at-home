import React from 'react'

import dishesData from '../data/dishes.json';

const DishesCategory = () => {

  const [selectedDishes, setSelectedDishes] = useState([]);

  const hadleDishClick = (dishType) => {
    const dishes = dishesData[dishType] || [];
    setSelectedDishes(dishes);
  }

  return (
    <div>DishesCategory</div>
  )
}

export default DishesCategory