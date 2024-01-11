import { useState } from "react";

function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [synopsis, setSynopsis] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    const newMovie = Object.fromEntries(data)
    console.log(newMovie)
    onAddMovie({ title, year, synopsis });
  };
  return (
    <div className="AddMovieForm">
      <form onSubmit={handleSubmit}>
        <label>
          Movie Title:
          <input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Year Released:
          <input
            name="year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <label>
          Synopsis:
          <input
            name="synopsis"
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
          />
        </label>
        <button>Add Synopsis</button>
      </form>
    </div>
  );
}

export default AddMovieForm