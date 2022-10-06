import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserMinus} from "@fortawesome/free-solid-svg-icons";

const DeleteButton = ({onClick})=>{

    return(
        <div className={"deleteButton"} role={"button"} onClick={()=>onClick}>
            <FontAwesomeIcon icon={faUserMinus}/>
        </div>
    )
}

export default DeleteButton;