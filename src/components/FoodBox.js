import { Card, Col, Button } from "antd";

export default function FoodBox(props){
    const {food, index} = props
    console.log(index)
  

   function deleteFood(){
    props.removeFood(index)
   }
   
    return(
        <div>
    <Col>
    <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
    >
        <img src={food.image} height={60} alt="Food img" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
        <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button onClick={deleteFood} type="primary"> Delete </Button>
    </Card>
    </Col>
    </div>
    )
}