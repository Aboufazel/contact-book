import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserMinus} from "@fortawesome/free-solid-svg-icons";
import "./Button.style.scss"

const DeleteButton = ({manageDelete , id})=>{

    return(
        <div className={"deleteButton"} role={"button"} onClick={()=>manageDelete(id)}>
            <FontAwesomeIcon icon={faUserMinus}/>
        </div>
    )
}

export default DeleteButton;