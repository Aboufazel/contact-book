import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserMinus} from "@fortawesome/free-solid-svg-icons";

const DeleteButton = ()=>{

    return(
        <div className={"deleteButton"}>
            <FontAwesomeIcon icon={faUserMinus}/>
        </div>
    )
}

export default DeleteButton;