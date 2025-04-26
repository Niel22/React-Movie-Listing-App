import MovieCard from "../components/MovieCard";
import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContexts";


function Favorites() {

    const {favorites} = useMovieContext();

    if(favorites.length > 0)
    {
        return (
        <div className="favorites">
            <h2>Your Favourites Movies</h2>
            <div className="movies-grid">
                {favorites.map(movie => (<MovieCard movie={movie} key={movie.id}/>
            ))}
            </div>
        </div>)
    }

    return <div className="favorites-empty">
        <h2>No Favourite Movies Yet</h2>
        <p>Start adding movies to your favorites and it will appear here</p>
    </div>
}

export default Favorites;