import "./ContactCard.style.scss"

import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import EditButton from "../Button/EditButton";

const ContactInfoCard = ({user , setUser})=>{
    const [contact, setContact] = useState({})
    const {contactId} = useParams()

    useEffect(() => {
        const currentContact = user.filter( item => item.id === Number(contactId))[0]
        setContact(currentContact)
    }, [])
    return(
        <div className={"ContactInfoCard"}>
            <div className={"items"}>
                <div>
                    <img src={`https://avatars.dicebear.com/api/micah/:${contact.id}.svg`}/>
                </div>
                <div>
                    {contact.name}
                </div>
                <div>
                    {contact.phone}
                </div>
                <Link to={`/edit/${contact.id}`}>
                    <EditButton/>
                </Link>
            </div>
        </div>
    )
}

export default ContactInfoCard;