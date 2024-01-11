function AddMovieFormUncontrolled({ onAddMovie }) {
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = new FormData(e.target)
      const newMovie = Object.fromEntries(data)
      console.log(newMovie)
      onAddMovie(newMovie);
    };

    return (
      <div className="AddMovieForm">
        <form onSubmit={handleSubmit}>
          <label>
            Movie Title:
            <input
              name="title"
            />
          </label>
          <label>
            Year Released:
            <input
              name="year"
              type="number"
            />
          </label>
          <label>
            Synopsis:
            <input
              name="synopsis"
            />
          </label>
          <button>Add Synopsis</button>
        </form>
      </div>
    );
  }
  
  export default AddMovieFormUncontrolled