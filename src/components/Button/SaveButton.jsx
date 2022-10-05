import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import "./Button.style.scss"

const SaveButton=()=>{
    return(
        <button className={"SaveButton"} type={"submit"}>
            <FontAwesomeIcon icon={faSave}/>
            <div>SaveContact</div>
        </button>
    )
}

export default SaveButton;