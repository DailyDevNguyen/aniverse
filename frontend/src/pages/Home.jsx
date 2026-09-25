import {useState, useEffect} from "react"
import AnimeCard from "../components/AnimeCard"
import {getPopularAnimes} from "../services/api.js"
import "../css/Home.css"

function Home() {
  const [animes, setAnimes] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPopularAnimes = async () => {
        try {
            const popularAnimes = await getPopularAnimes()
            setAnimes(popularAnimes)
        }
        catch (err) {
            console.log(err)
            setError("Failed to load animes...")
        }
        finally {
            setLoading(false)
        }
    }
  loadPopularAnimes()
}, []);

  return (
    <div className="home">
      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="animes-grid">
          {animes.map(anime => <AnimeCard anime={anime} key={anime.id} />)}
        </div>
      )}
    </div>
  )
}

export default Home