import { createBrowserRouter } from "react-router-dom";
import ContactsView from "../components/Layouts/ContactsView";
import ContactsAdd from "../components/Layouts/ContactsAdd";
import ContactInfo from "../components/Layouts/ContactInfo";
import {RouterProvider} from "react-router";
import {useState} from "react";
import {UsersDate} from "../components/DataBase/UsersDate";


const Root = ()=>{
    const [user , setUser] = useState(UsersDate);
    const title = ["Contacts" , "AddContact"]

    const router = createBrowserRouter(

        [
            {path: "/",
                children:[
                    {
                        index: true,
                        element: <ContactsView user={user} setUser={setUser} ViewHeaderTitle={title[0]}/>,
                    },{
                        path:"contactForm",
                        element: <ContactsAdd user={user} setUser={setUser} AddContactTitle={title[1]}/>
                    },{
                        path: "contact/:contactId",
                        element: <ContactInfo user={user} setUser={setUser}/>
                    }
                ]
            },
        ])
    return(
        <RouterProvider router={router}/>
    )
}



export default Root;

