import { createContext, useState, useContext, useEffect } from "react";

const MovieContexts = createContext();

export const useMovieContext = () => useContext(MovieContexts);

export const MovieProvider = ({children}) => {
    const [favorites, setFavourites] = useState([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");

        if(storedFavs) setFavourites(JSON.parse(storedFavs));
    }, []);

    useEffect(() => {
        console.log(favorites);
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites]);

    const addToFavorites = (movie) => {
        setFavourites(prev => [...prev, movie]);
    }

    const removeFromFavorites = (id) => {
        setFavourites(prev => prev.filter(movie => movie.id !== id));
    }
    
    const isFavorites = (id) => {
        return favorites.some(movie => movie.id === id);
    }

    const value = {
        favorites, addToFavorites, removeFromFavorites, isFavorites
    }
    return <MovieContexts.Provider value={value}>
        {children}
    </MovieContexts.Provider>
}