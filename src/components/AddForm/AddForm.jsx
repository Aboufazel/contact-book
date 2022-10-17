import "./Form.style.scss"
import SaveButton from "../Button/SaveButton";
import {useState , useEffect} from "react";
import {useParams , useNavigate} from "react-router";
import {addContact} from '../../Redux/Reducers/contactSlice/contact.slice'
import { useDispatch, useSelector } from "react-redux";

const AddForm = ({user , setUser}) => {
    const {contactId} = useParams();
    const backLink = useNavigate();
    

    const state = useSelector (state => state.action);
    console.log(state);
    const dispatch = useDispatch();

    const [form , setForm] = useState([
        {id:Math.floor(Math.random()*1000) , name:"" , phone:""},
    ])
    const manageChange = e => {
        setForm({...form, [e.target.name]: e.target.value});
        
    }

    const manageSubmit = e =>{
        e.preventDefault();
        if(contactId){
            setUser(user.map(item=> item.id === form.id ? form : item))
        }else {
            //setUser([...user,{id:Math.floor(Math.random()*1000) ,...form}]);
            dispatch(addContact(state));
            
        }
        emptyInput();
        backLink(contactId ? `/contact/${form.id}` : '/');
    }

    const emptyInput = () => {
        setForm({name: '', number: ''});
    }

    useEffect(() => {
        if (contactId) {
            setForm(user.filter(item => item.id === Number(contactId))[0])
        }
    }, [])
        return (
        <div className={"AddForm"}>
            <form className={"form"} onSubmit={manageSubmit}>
                <label>ContactName</label>
                <input name={"name"} onChange={manageChange} value={form.name}/>
                <label>PhoneNumber</label>
                <input name={"phone"} onChange={manageChange} value={form.phone}/>
                <div className={"button_row"}>
                    <SaveButton/>
                </div>
            </form>
        </div>
    )
}


export default AddForm;