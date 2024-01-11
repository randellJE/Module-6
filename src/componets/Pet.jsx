function Pet(props) {
    let type = 'unknown'
    if (props.type) {
        type = props.type
    }

    return (
        <div className="Pet componetBox">
            <h2>My Pet</h2> <p>Type: {type}</p>

            {props.name ? <p>Name: {props.name}</p> : null}

            {props.colour && <p>Colour: {props.colour}</p>}
        </div>
    )
 }

 export default Pet;