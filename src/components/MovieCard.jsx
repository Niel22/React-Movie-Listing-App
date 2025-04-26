import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContexts";


function MovieCard({movie}) {

    const {addToFavorites, removeFromFavorites, isFavorites} = useMovieContext();

    const favorite = isFavorites(movie.id);

    function onFavourite(e) {
        e.preventDefault();
        if(favorite) removeFromFavorites(movie.id);
        else addToFavorites(movie);
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://media.istockphoto.com/id/1452662817/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=is&k=20&c=CwWcNRaU5IWpoWWwFb4CqmmMt8eygBnLIOtUjMQjpiY="} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavourite}>
                    {favorite ? "❤️" : "🤍" }
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date.split('-')[0]}</p>
        </div>
    </div>
}

export default MovieCard;