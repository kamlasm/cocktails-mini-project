import React from "react"
import Instructions from "./Instructions"

function Cocktail({cocktail, id}) {

    const [isHidden, setIsHidden] = React.useState(false)
    
    function toggleIsHidden() {
        if (!isHidden) {
            setIsHidden(true) 
        } else {
            setIsHidden(false)
        }
    }

    return <div id={id}>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} onClick={toggleIsHidden}/>
        <h3>{cocktail.strDrink}</h3>

        {isHidden && < Instructions cocktail={cocktail}/>}

      </div>
}

export default Cocktail