import Movie from "./Movie";
import { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import AddMovieFormUncontrolled from "./AddMovieFormUncontrolled";

function MoviesList() {

    const movies = [
        {
          id: 1,  
          title: "The Shawshank Redemption",
          year: 1994,
          synopsis: "Two imprisoned men find redemption.",
        },
        {
          id: 2,  
          title: "The Dark Knight",
          year: 2008,
          synopsis: "Batman fights the menace known as the Joker.",
        },
        {
          id: 3,  
          title: "Interstellar",
          year: 2014,
          synopsis: "Explorers travel through a wormhole in space.",
        },
      ];

      const [currentMovies, setCurrentMovies] = useState(movies)

// the slides example
    // const movieItems = movies.map(movie => (
    //     <li>{movie.title}</li>
    // ))
// roberts way!!!! below
    // const movieItemsReturn = movies.map((movie, index) => {
    //     return (
    //         <li key={index}>{movie.title}</li>
    //     )
    // })

    const movieItemsComponent = currentMovies.map(movie =>(
        <Movie
        key={movie.id}
        title={movie.title}
        year={movie.year}
        synopsis={movie.synopsis}/>
    ));

    const handleReverseMovies = () => {
      let newMovies = [...currentMovies]
      newMovies.reverse()
      setCurrentMovies(newMovies)
    }

    const handleAddNewMovie = () => {
      let newMovies = [
        ...currentMovies,
        {
          id: 4,
          title: "The Whale",
          year: 2022,
          synopsis: "A morbidly obese teacher attempts to reconnect with his daughter."
        }
      ]

      setCurrentMovies(newMovies)
    }

    const handleDeleteMovie = (idToDelete) => {
      // let idToDelete = 4;
      let newMovies = currentMovies.filter(movie => movie.id != idToDelete)
      
      setCurrentMovies(newMovies)
    }

    const handleUpdateMovie = (movieId) => {
      let updatedSynopsis1 = "Iconic heart-warming prison break movie";
      let newMovies = currentMovies.map((movie) => {
        return movie.id === movieId
          ? {
              ...movie,
              synopsis: updatedSynopsis1,
            }
          : movie;
      });
      setCurrentMovies(newMovies)
    };

    const handleSortMovie = () => {
      let newMovies = [...currentMovies]
      newMovies.sort((a, b) => a.title.localeCompare(b.title))
      setCurrentMovies(newMovies)
    }

    const handleAddMovie = (newMovie) => {
      newMovie.id = currentMovies.length + 1
      let newMovies = [...currentMovies, newMovie]
      setCurrentMovies(newMovies)
    }

    return (
        <div>
            <ul> 
                {movieItemsComponent}
            </ul>
            <button onClick={handleReverseMovies}>Reverse List</button>
            <button onClick={handleAddNewMovie}>Add New Movie</button>
            <button onClick={() => handleDeleteMovie(3)}>Delete Movie</button>
            <button onClick={()  => handleUpdateMovie(2)}>Update Movie</button>
            <button onClick={handleSortMovie}>Sort Movie</button>
            {/* <AddMovieForm onAddMovie={handleAddMovie} /> */}
            <AddMovieFormUncontrolled onAddMovie={handleAddMovie} />
        </div>
    )
}

export default MoviesList