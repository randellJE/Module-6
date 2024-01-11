function NamePart(props) {
    return (
        <span className="NamePart">{props.value}</span>
    )
}

function FullName(props) {
    return (
        <div className="FullName componetBox">
            Full name: <NamePart value={props.first}/> <NamePart value={props.last}/>
        </div>
    )
}

export default FullName;