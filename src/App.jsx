import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

//Things I added, im trying to leave most of this alone if I can haha
import SearchForm from './claytonElements/SearchForm'
import ShowCard from './claytonElements/ShowCards'
import { useState, useEffect } from 'react'

function App() {

  //Creating variables for the search, the empty array of shows, loading state, and a error state.
  const [searchTerm, setSearchTerm] = useState('')
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  //Takes what the user inputed and removes the white space from it
  function handleSearch(query) {
    setSearchTerm(query.trim())
  }

  //runs this when you search a new show
  useEffect(() => {

    //if the didnt put anything, set the shows array to empty
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

        //If there is a respose thats not ok, throw a error
        if (!response.ok) {
          throw new Error('Could not fetch shows')
        }

        //Makes a constant that is the json response, and the results being a map of just the .show values from data
        const data = await response.json()
        const showResults = data.map((result) => result.show)

        //Limit to the top 10 like last time
        setShows(showResults.slice(0, 10))

        //If theres a error, set the error value to this message and set shows to empty
      } catch (error) {
        setError('Something went wrong while loading shows.')
        setShows([])

        //Always will set loading to false, since even if it failed, it aint loading anymore
      } finally {
        setLoading(false)
      }
    }

    //Actually runs that function for getting the show data
    getShows()
  }, [searchTerm])

  //I cant figure out how to comment inside this, so its going outside of it

  //Header is just a header. 
  
  //Line below gives SearchForm.jsx the function handleSearch from above

  //the three lines below check to see if its loading, has a error, or empty and then spits out their respective messages

  //Last bit creates a div called show-list and makes one element using ShowCard.jsx inside said list
  return (
    <>
      <h1>TVmaze Show Gallery</h1>
      
      <SearchForm onSearch={handleSearch} />

      {loading && <p>Loading shows...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && searchTerm !== '' && shows.length === 0 && (<p>No shows found.</p>)}

      <div className="show-list">
        {shows.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}

      </div>
    </>
  )
}

export default App
