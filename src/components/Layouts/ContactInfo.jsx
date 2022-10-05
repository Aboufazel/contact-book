import ContactInfoCard from "../ContactCard/ContactInfoCard";


const ContactInfo =({user , setUser})=>{
    return (
        <div>
            <ContactInfoCard user={user} setUser={setUser}/>
        </div>
    )
}


export default ContactInfo;