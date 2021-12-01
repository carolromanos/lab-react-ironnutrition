import userEvent from "@testing-library/user-event"
import { useState } from "react/cjs/react.development"


function AddFoodForm(props){
    const [formState, setFormState] =useState({})

    function handleSubmit(event){
        event.preventDefault()
        props.parentCB(formState)
        setFormState({})
    }

    function handleInput(event){
        let {name, value} = event.target
        setFormState(Object.assign({}, formState, {[name]: value}))

    }
    
    return(
        <div className="AddFood">
            <form onSubmit={handleSubmit}>

            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={formState.name}  placeholder="Food name..." onChange={handleInput} />
            <br/>
            <label htmlFor="image">Image:</label>
            <input type="text" name="image" value={formState.image}  placeholder="Image..." onChange={handleInput} />
            <br/>

            <label htmlFor="calories">Calories:</label>
            <input type="number" name="calories" value={formState.calories}  placeholder="Calories..." onChange={handleInput} />
            <br/>

            <label htmlFor="servings">Servings:</label>
            <input type="number" name="servings" value={formState.servings}  placeholder="Servings..." onChange={handleInput} />

            <br/>
            <button type="submit">Add Food</button>

            </form>
        </div>
    )
}

export default AddFoodForm