import {useAnimeContext} from "../contexts/AnimeContext"
import AnimeCard from "../components/AnimeCard"
import "../css/Favorites.css"

function Favorites() {
    const {favorites} = useAnimeContext()

    if (favorites.length !== 0) {
        return <div className="favorites">
            <h2>Your Favorites</h2>
            <div className="animes-grid">
                {favorites.map(anime => <AnimeCard anime={anime} key={anime.id} />)}
            </div>
        </div>
    }

    return <div className="favorites-empty">
        <h2>No Favorite Animes Yet</h2>
        <p>Start adding animes to your favorites and they will appear here</p>
    </div>
}

export default Favorites