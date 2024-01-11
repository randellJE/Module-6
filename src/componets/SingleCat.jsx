// Create a SingleCat component for rendering each individual cat, and add an image property for each one.
// delete button added to SingleCat component

const SingleCat = ({ cat, onDelete }) => {
    return (
      <div className='cat-card'>
        <h2>{cat.name}</h2>
        <p>{cat.latinName}</p>
        <img
          src={cat.image}
          alt={cat.name}
          style={{ width: "100px", height: "100px" }}
        />
        <br />
        <button onClick={() => onDelete(cat.name)}>Delete</button>
      </div>
    );
  };
  
  export default SingleCat;