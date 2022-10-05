
import {faUserEdit} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const EditButton = ()=>{
    return(
        <div className={"editButton"}>
            <FontAwesomeIcon icon={faUserEdit}/>
        </div>
    )
}

export default EditButton;