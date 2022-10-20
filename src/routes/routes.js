import { createBrowserRouter}   from "react-router-dom";
import ContactsView from "../components/Layouts/ContactsView";
import ContactsAdd from "../components/Layouts/ContactsAdd";
import ContactInfo from "../components/Layouts/ContactInfo";
import {RouterProvider ,} from "react-router";
import {useState} from "react";
import {UsersDate} from "../components/DataBase/UsersDate";


const Root = ()=>{
    const [user , setUser] = useState(UsersDate);
    const title = {title:"Contacts" , add: "AddContact"}

    const router = createBrowserRouter (

        [
            {path: "/",
                children:[
                    {
                        index:true,
                        element: <ContactsView user={user} setUser={setUser} ViewHeaderTitle={title.title}/>,
                    },{
                        path:"contactForm",
                        element: <ContactsAdd user={user} setUser={setUser} AddContactTitle={title.add}/>
                    },{
                        path: "contact/:contactId",
                        element: <ContactInfo user={user} setUser={setUser}/>
                    },{
                        path: "edit/:contactId",
                        element: <ContactsAdd user={user} setUser={setUser} AddContactTitle={title.add}/>
                    }
                ]
            },
        ])
    return(
        <RouterProvider router={router}/>
    )
}



export default Root;

