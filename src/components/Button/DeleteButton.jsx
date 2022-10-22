import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserMinus} from "@fortawesome/free-solid-svg-icons";
import "./Button.style.scss"
import { useDispatch} from "react-redux";
import {deleteContact} from '../../Redux/Reducers/contactSlice/contact.slice'

const DeleteButton = ({id})=>{
    const dispatch = useDispatch();

    const manageDelete = () =>{
       dispatch(deleteContact(id));
    }

    return(
        <div className={"deleteButton"} role={"button"} onClick={manageDelete}>
            <FontAwesomeIcon icon={faUserMinus}/>
        </div>
    )
}

export default DeleteButton;