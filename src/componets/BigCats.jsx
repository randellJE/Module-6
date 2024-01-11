import { useState } from "react";
import SingleCat from "./SingleCat"
import AddCatForm from "./AddCatForm";

const cats = [
    { name: 'Cheetah', latinName: 'Acinonyx jubatus', image: "/BigCats/Cheetah.jpg"},
    { name: 'Cougar', latinName: 'Puma concolor', image: "/BigCats/Cougar.jpg"},
    { name: 'Jaguar', latinName: 'Panthera onca', image: "/BigCats/Jaguar.jpg"},
    { name: 'Leopard', latinName: 'Panthera pardus', image: "/BigCats/Leopard.jpg"},
    { name: 'Lion', latinName: 'Panthera leo', image: "/BigCats/Lion.jpg"},
    { name: 'Snow leopard', latinName: 'Panthera uncia', image: "/BigCats/Snow_Leopard.JPG"},
    { name: 'Tiger', latinName: 'Panthera tigris', image: "/BigCats/Tiger.jpg"},
]

const BigCats = () => {

    const [catsList, setCatsList] = useState(cats);
  
    //   Sorting Alphabetically
    const sortAlphabetically = () => {
      const sortedCats = [...catsList].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setCatsList(sortedCats);
    };
  
    //   Reverse List
    const reverseList = () => {
      const reversedCats = [...catsList].reverse();
      setCatsList(reversedCats);
    };
  
    //   Filter Panthera
  
    const filterPanthera = () => {
      const filteredCats = cats.filter((cat) =>
        cat.latinName.includes("Panthera")
      );
      setCatsList(filteredCats);
    };
  
    // Reset
    const resetList = () => {
      setCatsList(cats);
    };
  
    // Add New Cat
    const addNewCat = (newCat) => {
      setCatsList([...catsList, newCat]);
    };
  
    // Delete Cat
    const deleteCat = (catName) => {
      setCatsList(catsList.filter((cat) => cat.name !== catName));
    };
  
    return (
      <>
        <AddCatForm onAddCat={addNewCat} />
        <br />
        <button onClick={sortAlphabetically}>Sort Alphabetically</button>
        <button onClick={filterPanthera}>Filter Panthera</button>
        <br />
        <button onClick={reverseList}>Reverse List</button>
        <button onClick={resetList}>Reset</button>
        <br />
  
        <div className="cat-list">
          {catsList.map((cat, index) => (
            <SingleCat key={index} cat={cat} onDelete={deleteCat} />
          ))}
        </div>
      </>
    );
  };
  
  export default BigCats;