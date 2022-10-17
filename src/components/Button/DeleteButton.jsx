import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserMinus} from "@fortawesome/free-solid-svg-icons";
import "./Button.style.scss"
import { useDispatch, useSelector } from "react-redux";
import {deleteContact} from '../../Redux/Reducers/contactSlice/contact.slice'

const DeleteButton = ()=>{
    
    const dispatch = useDispatch();

    const manageDelete = (id) =>{
        dispatch(deleteContact(id));
    }

    return(
        <div className={"deleteButton"} role={"button"} onClick={manageDelete}>
            <FontAwesomeIcon icon={faUserMinus}/>
        </div>
    )
}

export default DeleteButton;