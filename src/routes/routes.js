import { createBrowserRouter } from "react-router-dom";
import ContactsView from "../components/Layouts/ContactsView";
import ContactsAdd from "../components/Layouts/ContactsAdd";
import ContactInfo from "../components/Layouts/ContactInfo";




const router = createBrowserRouter(
    [
    {path: "/",
        children:[
            {
                index: true,
                element: <ContactsView/>,
            },{
             path:"contactForm",
             element: <ContactsAdd/>
            },{
              path: "contact/:contactId",
              element: <ContactInfo/>
            }
        ]
    },
])


export default router;