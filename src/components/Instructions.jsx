function Instructions({cocktail}) {

    return <div className='instructions'>
    <h4>Ingredients</h4>
    <ul>
        <li>{cocktail.strIngredient1} {cocktail.strMeasure1}</li>
        <li>{cocktail.strIngredient2} {cocktail.strMeasure2}</li>
        {cocktail.strIngredient3 &&<li>{cocktail.strIngredient3}  {cocktail.strMeasure3}</li>}
        {cocktail.strIngredient4 && <li>{cocktail.strIngredient4} {cocktail.strMeasure4}</li>}
        {cocktail.strIngredient5 && <li>{cocktail.strIngredient5} {cocktail.strMeasure5}</li>}
        {cocktail.strIngredient6 && <li>{cocktail.strIngredient6} {cocktail.strMeasure6}</li>}
        {cocktail.strIngredient7 && <li>{cocktail.strIngredient7} {cocktail.strMeasure7}</li>}
        {cocktail.strIngredient8 && <li>{cocktail.strIngredient8} {cocktail.strMeasure8}</li>}
        {cocktail.strIngredient9 && <li>{cocktail.strIngredient9} {cocktail.strMeasure9}</li>}
        {cocktail.strIngredient10 && <li>{cocktail.strIngredient10} {cocktail.strMeasure10}</li>}
    </ul>
    <h4>Instructions</h4>
    <p>{cocktail.strInstructions}</p>
    </div>
}

export default Instructions