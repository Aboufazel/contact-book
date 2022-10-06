import Container from "../Container/Container";
import AddForm from "../AddForm/AddForm";
import AddHeader from "../Header/AddHeader";


const ContactsAdd = ({user , setUser , AddContactTitle})=>{
    return(
        <Container>
            <AddHeader title={AddContactTitle}/>
            <AddForm user={user} setUser={setUser}/>
        </Container>
    )
}

export default ContactsAdd;