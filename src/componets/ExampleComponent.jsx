import "../Styles/examplecomponet.css";

const divStyle = {
  textTransform: "uppercase",
  color: "orange",
};

function ExampleComponent(props) {
  return (
    <div className="ExampleComponent componentBox">
      <h1 style={divStyle}>My Example Component</h1>{" "}
      {/* passing through a style variable */}
      <p>My first React component!</p>
      <h2 style={{ fontWeight: 12 }}>{props.name}</h2>
      {/* inline style example & a passed through name value from the app.jsx */}
    </div>
  );
}

export default ExampleComponent;