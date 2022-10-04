import Container from "../Container/Container";
import "./Header.style.scss"
import AddButton from "../Button/AddButton";
import SearchBox from "../SearchBox/SearchBox";

const ViewHeader = ({manageSearch})=>{
    return(
       <Container>
          <div className={"ViewHeader"}>
               <div className={"ViewHeader__top"}>
                   <AddButton/>
                   <h3>Contacts</h3>
               </div>
               <div className={"ViewHeader__Bottom"}>
                   <SearchBox manageSearch={manageSearch}/>
               </div>
              <div className={"EndHeader"}/>
          </div>
       </Container>
    );
}

export default ViewHeader;