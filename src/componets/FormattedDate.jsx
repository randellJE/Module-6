function FormattedDate(props) {
    return (
        <div>
            {props.date.toLocaleString()}
        </div>
    )
}

export default FormattedDate