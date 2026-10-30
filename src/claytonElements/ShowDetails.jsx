
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { cleanSummary, getDisplayValue } from '../utils/utils'

function ShowDetail() {
  //Gets the show ID from the URL
  const { id } = useParams()

  //Variables for the show information, cast, loading, and errors
  const [show, setShow] = useState(null)
  const [cast, setCast] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  //Gets the show information whenever the ID in the URL changes
  useEffect(() => {
    async function getShowDetails() {
      setLoading(true)
      setError('')

      try {
        //Fetches the individual show's information
        const showResponse = await fetch(
          `https://api.tvmaze.com/shows/${id}`
        )

        if (!showResponse.ok) {
          throw new Error('Could not fetch show details')
        }

        const showData = await showResponse.json()
        setShow(showData)

        //Fetches the cast for that show
        const castResponse = await fetch(
          `https://api.tvmaze.com/shows/${id}/cast`
        )

        if (!castResponse.ok) {
          throw new Error('Could not fetch cast')
        }

        const castData = await castResponse.json()

        //Limits the cast list to 15 members
        setCast(castData.slice(0, 15))

      } catch (error) {
        setError('Something went wrong while loading the show.')
      } finally {
        setLoading(false)
      }
    }

    getShowDetails()
  }, [id])

  //Displays a message while the information is loading
  if (loading) {
    return <p>Loading show details...</p>
  }

  //Displays an error if something went wrong
  if (error) {
    return <p>{error}</p>
  }

  //Displays a message if no show was found
  if (!show) {
    return <p>Show not found.</p>
  }

  return (
    <div className="show-details">
      <Link to="/">Back to Gallery</Link>

      <h1>{show.name}</h1>

      {show.image && (
        <img src={show.image.original} alt={show.name} />
      )}

      <p>Rating: {getDisplayValue(show.rating?.average)}</p>

      <p>
        Genres: {show.genres.length > 0
          ? show.genres.join(', ')
          : 'Not available'}
      </p>

      <p>Premiered: {getDisplayValue(show.premiered)}</p>

      <p>Status: {getDisplayValue(show.status)}</p>

      <p>
        Network / Streaming Service: {
          show.network?.name || show.webChannel?.name || 'Not available'
        }
      </p>

      <h2>Summary</h2>
      <p>
        {show.summary
          ? show.summary.replace(/<[^>]*>/g, '')
          : 'No summary available.'}
      </p>

      <h2>Cast</h2>

      {cast.length > 0 ? (
        <ul>
          {cast.map((member) => (
            <li key={member.person.id}>
              {member.person.name} as {member.character.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information available.</p>
      )}
    </div>
  )
}

export default ShowDetail
