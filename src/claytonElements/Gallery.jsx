//Importing useState and useEffect from react, then the SearchForm and ShowCard functions from their files
import { useState, useEffect } from 'react'
import SearchForm from './SearchForm'
import ShowCard from './ShowCards'

//This is the gallery page, containing the searching
function Gallery() {

  //Creating variables for the search, the empty array of shows, loading state, and an error state.
  //Starter value of Fullmetal Alchemist is hardcoded into the page.
  const [searchTerm, setSearchTerm] = useState('Fullmetal Alchemist')
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  //Takes what the user inputed and removes the white space from it
  function handleSearch(query) {
    setSearchTerm(query.trim())
  }

  //runs this when you search a new show
  useEffect(() => {

    //if they didnt put anything, set the shows array to empty
    if (searchTerm === '') {
      setShows([])
      return
    }

    //function for getting the show data
    async function getShows() {

      //auto sets loading to true and error to empty
      setLoading(true)
      setError('')

      try {
        //Searches the API for the data via the url
        const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchTerm)}`
        const response = await fetch(apiUrl)

        //If there is a response thats not ok, throw an error
        if (!response.ok) {
          throw new Error('Could not fetch shows')
        }

        //Makes a constant that is the json response, and the results being a map of just the .show values from data
        const data = await response.json()
        const showResults = data.map((result) => result.show)

        //Limit to the top 10 like last time
        setShows(showResults.slice(0, 10))

      } catch (error) {
        setError('Something went wrong while loading shows.')
        setShows([])

      } finally {
        setLoading(false)
      }
    }

    //Actually runs that function for getting the show data
    getShows()
  }, [searchTerm])

  return (
    <>
      {/*Its a header what do you want me to say*/}
      <h1>TVmaze Show Gallery</h1>

      {/*Calls SeachForm, and when it gets a input, chuck it into the handleSearch function*/}
      <SearchForm onSearch={handleSearch} />

      {/*Flavor text for loading, errors, the works*/}
      {loading && <p>Loading shows...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && searchTerm !== '' && shows.length === 0 && (
        <p>No shows found.</p>
      )}

      {/*The div that displays the cards made by the ShowCard function*/}
      <div className="show-list">
        {shows.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>

      {/*The footer giving credit to TVmaze and a link to them so I dont get sued*/}
      <p><a href="https://www.tvmaze.com/">Link to TVmaze, all data provided by them</a></p>

    </>
  )
}

export default Gallery
