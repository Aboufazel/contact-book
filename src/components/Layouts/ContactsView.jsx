import Container from "../Container/Container";
import ViewHeader from "../Header/ViewHeader";
import ContactViewCard from "../ContactCard/ContactViewCard";
import {useState} from "react";


const ContactsView= ({user , setUser , ViewHeaderTitle})=>{
    const [search , setSearch] = useState('');

    const manageSearch = (e)=>{
        setSearch(e.target.value)
    }
    return(
        <Container>
            <ViewHeader manageSearch={manageSearch} title={ViewHeaderTitle}/>
            <ContactViewCard search={search} user={user} setUser={setUser}/>
        </Container>
    )
}

export default ContactsView;