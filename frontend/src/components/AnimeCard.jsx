import "../css/AnimeCard.css"
import {useAnimeContext} from "../contexts/AnimeContext"

function AnimeCard({anime}) {
    const {isFavorite, addToFavorites, removeFromFavorites} = useAnimeContext();
    const favorite = isFavorite(anime.id);

    const onFavoriteClick = (e) => {
        e.preventDefault()
        if (favorite) removeFromFavorites(anime.id)
        else addToFavorites(anime)
    }

    return <div className="anime-card">
        <div className="anime-poster">
            <img src={`https://shikimori.io${anime.image.original}`} alt={anime.name} />
            <div className="anime-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>♥</button>
            </div>
        </div>
        <div className="anime-info">
            <h3 className="anime-title">{anime.name}</h3>
            <p className="anime-release-date">{anime.aired_on?.split("-")[0]}</p>
        </div>
    </div>
}

export default AnimeCard