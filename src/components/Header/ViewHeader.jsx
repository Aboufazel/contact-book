import Container from "../Container/Container";
import "./Header.style.scss"
import AddButton from "../Button/AddButton";

const ViewHeader = ()=>{
    return(
       <Container>
          <div className={"ViewHeader"}>
              <AddButton/>
              <h3>Contacts</h3>
          </div>
       </Container>
    );
}

export default ViewHeader;