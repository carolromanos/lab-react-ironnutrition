import "antd/dist/antd.css";
import "./App.css";
import { useState } from "react";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {
  const [foodList, setFoodList] = useState(foods)
  const [filteredFood, setFilteredFood] = useState(foods)


  function createFood(body){
    body._id = parseInt(Math.random() * 1000)
    setFoodList([body, ...foodList])
  }

  function handleFilterFood(string){
    if(string === "") {setFilteredFood(foodList)}
    else{
      setFilteredFood(      
        foodList.filter(food=>food.name.toLowerCase().includes(string.toLowerCase()))
      )
    }
    
  }
  function removeFood(index){
    foodList.forEach((food)=>{
      if(food.name === index){
        setFilteredFood(filteredFood.filter(food=> food.name !== index))
        setFoodList(foodList.filter(food=> food.name !== index))

      }
    })
/*     foodList.splice(index, 1)
    setFoodList([...foodList])
 */
}
  
  return (<div className="App">
    <AddFoodForm  parentCB={createFood}/>
    <Search filterFood={handleFilterFood}/>
    <div className="food-list">
    {filteredFood.map((food, index)=>(
      
      
      <FoodBox food={food} index={food.name} removeFood={removeFood} />
      
    ))}
    </div>
  </div>
  )
}
export default App;
