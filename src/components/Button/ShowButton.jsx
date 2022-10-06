
import {faEye} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ShowButton = ()=>{
    return(
        <div className={"editButton"}>
            <FontAwesomeIcon icon={faEye}/>
        </div>
    )
}

export default ShowButton;