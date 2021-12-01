import { useState } from "react/cjs/react.development"


export default function Search(props){
    const [string, stringState] = useState("")

    function handleSearch(event){
        stringState(event.target.value)
     
        props.filterFood(event.target.value)
    }

    return(
    <div>
        <input type="search" value={string}  name="search" onChange={handleSearch}/>
    </div>
    )
}