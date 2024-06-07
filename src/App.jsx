import './App.css'
import React from 'react'
import Cocktail from './components/Cocktail'

function App() {

  const [randomCocktail, setRandomCocktail] = React.useState(null)
  const [cocktails, setCocktails] = React.useState(null)
  const [search, setSearch] = React.useState(null)

  async function fetchRandomCocktail() {
    const resp = await fetch('https://thecocktaildb.com/api/json/v1/1/random.php')
    const randomCocktail = await resp.json()
    setRandomCocktail(randomCocktail.drinks[0])
  }

  async function fetchCocktails() {
    const resp = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=')
    const cocktails = await resp.json()
    setCocktails(cocktails.drinks)
  }

  async function filterCocktails(search) {
    const resp = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    const cocktails = await resp.json()
    setCocktails(cocktails.drinks)
  }

  React.useEffect(() => {
    fetchRandomCocktail()
    fetchCocktails()
  }, [])

  function handleSearch(e) {
    const search = e.target.value
    setSearch(search)
    filterCocktails(search)
  }

  function changeRandomCocktail() {
    fetchRandomCocktail()
  }

  return (
  <>
    <h1>The Ultimate Cocktail Database</h1>
    <p className='intro'>Click on a cocktail to see the ingredients and instructions.</p>

    <div>
      <h2>Generate a random cocktail!</h2>
      <button onClick={changeRandomCocktail}>Click Here</button>
      {randomCocktail && < Cocktail cocktail={randomCocktail} id='randomCocktail'/>}
    </div>
    
    <div>
      <h2>Or search for your favourite cocktail!</h2>
      <input placeholder='e.g. margarita' onChange={handleSearch}/>   
      <div className='cocktails-div'>
      {cocktails && cocktails.map((cocktail) => {
        return < Cocktail 
          key={cocktail.idDrink}
          cocktail={cocktail}
        />
      })}
      </div>
      
    </div>
  </>
  )
}

export default App