import "./Button.style.scss"

import {faUserPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddButton = ()=>{
    return(
        <div className={"AddButton"}>
            <FontAwesomeIcon icon={faUserPlus} />
        </div>
    )
}

export default AddButton;