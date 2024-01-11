import { useState } from "react";

const AddCatForm = ({ onAddCat }) => {
  const [newCat, setNewCat] = useState({ name: "", latinName: "", image: "" });

  const handleChange = (e) => {
    setNewCat({ ...newCat, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCat(newCat); 
    setNewCat({ name: "", latinName: "", image: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={newCat.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="latinName"
        value={newCat.latinName}
        onChange={handleChange}
        placeholder="Latin Name"
        required
      />
      <input
        type="text"
        name="image"
        value={newCat.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <br />
      <br />
      <button type="submit">Add Cat</button>
    </form>
  );
};

export default AddCatForm;