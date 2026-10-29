import { useState } from 'react'

//Using the function passed from App.jsx
function SearchForm({ onSearch }) {
  //Makes the state query that can be changed with setQuery auto to empty  
  const [query, setQuery] = useState('')

  //Runs when the user submits the form, prevents the defualt html then runs the onSearch function with your input
  function handleSubmit(event) {
    event.preventDefault()
    onSearch(query)
  }

  return (
    //Makes a form element that calls handleSubmit when its button is hit
    <form onSubmit={handleSubmit}>
      <label htmlFor="showSearch">Search for a TV show:</label>

      <input
        type="text"
        id="showSearch"
        placeholder="Enter a show name..."
        value={query}
        //Changes the query value to whatever the person types in
        onChange={(event) => setQuery(event.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  )
}

export default SearchForm
