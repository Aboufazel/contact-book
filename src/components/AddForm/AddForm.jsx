import "./Form.style.scss"
import SaveButton from "../Button/SaveButton";
import {useState} from "react";
import {useParams , useNavigate} from "react-router";

const AddForm = ({user , setUser}) => {
    const {contactId} = useParams();
    const backLink = useNavigate()
    const [form , setForm] = useState([
        {id:Math.floor(Math.random()*1000) , name:"" , phone:""},
    ])
    const manageChange = e => {
        setForm({...form, [e.target.name]: e.target.value});
        console.log(form);
    }

    const manageSubmit = e =>{
        e.preventDefault();
        setUser([...user,{id:Math.floor(Math.random()*1000) ,...form}]);

        emptyInput();
        backLink('/');
    }

    const emptyInput = () => {
        setForm({name: '', number: ''});
    }
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