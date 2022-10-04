import {faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const SearchButton = ()=>{
    return(
        <div className={"SearchButton"}>
            <FontAwesomeIcon icon={faSearch}/>
        </div>
    )
}

export default SearchButton;