import SearchButton from "../Button/Searchbutton";
import "./SearchBox.style.scss"

const SearchBox = ()=>{
    return(
        <div className={"SearchBox"}>
            <SearchButton/><input placeholder={'SearchContact'}/>
        </div>
    )
}


export default SearchBox;