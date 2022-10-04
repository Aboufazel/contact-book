import SearchButton from "../Button/Searchbutton";
import "./SearchBox.style.scss"

const SearchBox = ({manageSearch})=>{
    return(
        <div className={"SearchBox"}>
            <SearchButton/><input onChange={manageSearch} placeholder={'SearchContact'}/>
        </div>
    )
}


export default SearchBox;