import UserInfo from "./UserInfo"
import FormattedDate from "./FormattedDate"

function Comment(props){
    return (
        <div>
            <UserInfo author= {props.author} />
            <div>
                {props.text}
            </div>
            <FormattedDate date={props.date} />
        </div>
    )
}

export default Comment