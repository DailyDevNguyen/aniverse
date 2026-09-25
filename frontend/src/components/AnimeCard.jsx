import "../css/AnimeCard.css"

function AnimeCard({anime}) {
    return <div className="anime-card">
        <div className="anime-poster">
            <img src={`https://shikimori.io${anime.image.original}`} alt={anime.name} />
            <div className="anime-overlay">
                <button className="favorite-btn">♥</button>
            </div>
        </div>
        <div className="anime-info">
            <h3 className="anime-title">{anime.name}</h3>
            <p className="anime-release-date">{anime.aired_on.split("-")[0]}</p>
        </div>
    </div>
}

export default AnimeCard