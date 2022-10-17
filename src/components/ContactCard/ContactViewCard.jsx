import React from "react";
import "./ContactCard.style.scss"
import {Link} from "react-router-dom";
import ShowButton from "../Button/ShowButton";
import DeleteButton from "../Button/DeleteButton";
import { useDispatch, useSelector } from "react-redux";

const ContactViewCard = () => {

    const showContact = useSelector (state => state.action)
    
    const handleClick = (e) => {
        e.stopPropagation();
    };
    return (
        <div className={"ContactCard"}>
            {showContact.map(users => (

                <div className={"Card"} key={users.id} role={"button"} onClick={handleClick}>
                    <div className={"ContactAvatar"}>
                    <img src={`https://avatars.dicebear.com/api/micah/:${users.id}.svg`}/>
                    </div>
                    <div className={"ContactInfo"}>
                        <div className={"Info_name"}>{users.name}</div>
                        <div className={"Info_tel"}>{users.phone}</div>
                    </div>
                    <Link to={`/contact/${users.id}`} className={"LinkCard"}>
                        <div>
                            <ShowButton/>
                        </div>
                    </Link>
                     <div>
                         <DeleteButton id={users.id}/>
                     </div>
                </div>
            ))
            }
        </div>
    )
}


export default ContactViewCard;