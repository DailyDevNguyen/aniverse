import {useState, useEffect} from "react"
import AnimeCard from "../components/AnimeCard"
import {getPopularAnimes, searchAnimes} from "../services/api.js"
import "../css/Home.css"

function Home() {
  const [searchQuery, setSearchQuery] = useState("")
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

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const searchResults = await searchAnimes(searchQuery);
      setAnimes(searchResults);
    }
    catch (err) {
      console.log(err);
      setError("Failed to search animes...");
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          className="search-input"
          placeholder="Search for animes..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button className="submit-btn" type="submit">Search</button>
      </form>

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