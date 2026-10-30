//Importing useState, useEffet, link, and the two utils functions
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { cleanSummary, getDisplayValue } from '../utils/utils'

//The main function, needs a show value which is gained from Gallery.jsx
function ShowCard({ show }) {
  //Creates a empty array called cast that can be updated with setCast
  const [cast, setCast] = useState([])
  

  useEffect(() => {
    //runs this to get the cast from the api url, using the show id from the main api call
    async function getCast() {
      try {
        //uses the show object's id from Gallery.jsx to make a call for the cast
        const response = await fetch(
          `https://api.tvmaze.com/shows/${show.id}/cast`
        )

        //If its not a good response, throw
        if (!response.ok) {
          throw new Error('Could not fetch cast')
        }

        //Get all the cast data in this variable, then strip it down to the top 5
        const castData = await response.json()
        setCast(castData.slice(0, 5))
      } catch (error) {
        console.error('Error fetching cast:', error)
      }
    }

    //Actually runs the function that was defined above
    getCast()
  }, [show.id])

  return (
    //This is creating the actual bundle of info that is the card, first by putting them under a class of show-card
    <article className="show-card">
        {/*this is a pretty dumb way to do comments but whatever
        First it grabs the show name, and makes a link to its detail page*/}
      <h2>
            <Link to={`/shows/${show.id}`}>
                {show.name}
            </Link>
      </h2>

        {/*Grabs the image for the show if its there*/}
      {show.image && (
        <img src={show.image.medium} alt={show.name} />
      )}
      
        {/*These next four are pretty much the same, they go and grab them from the json if it can*/}
      
      <p>
        Genres: {show.genres.length > 0
          ? show.genres.join(', ')
          : 'Not available'}
      </p>

      <p>Rating: {getDisplayValue(show.rating.average)}</p>
      <p>Premiered: {getDisplayValue(show.premiered)}</p>

      <div>
        <h3>Summary</h3>
        <p>{cleanSummary(show.summary)}</p>
      </div>

      <div>
        {/*checks to see if theres more than 0 cast members listed
        then it makes a map, each actors id is tied to them as the key, and it lists who played who*/}
        <h3>Cast</h3>
        {cast.length > 0 ? (
          <ul>
            {cast.map((member) => (
              <li key={member.person.id}>
                {member.person.name} as {member.character.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>Cast unavailable.</p>
        )}
      </div>
    </article>
  )
}

export default ShowCard
