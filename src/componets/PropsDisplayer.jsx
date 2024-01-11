import { Children } from "react";

function PropsDisplayer(props) {
  const stringProps = JSON.stringify(props);
  return (
    <div className="PropsDisplayer componentBox">
      <h2> Check out my props!</h2>
      <h3> {stringProps.name}</h3>
      <h4> {stringProps.age}</h4>
      <h5> {stringProps.pets}</h5>
      <p>{stringProps}</p>
    </div>
  );
}

export default PropsDisplayer;