import "./Form.style.scss"
import SaveButton from "../Button/SaveButton";
import {useState} from "react";

const AddForm = () => {
    const [form , setForm] = useState([
        {id:Math.floor(Math.random()*1000) , name:"" , phone:""},
    ])
    return (
        <div className={"AddForm"}>
            <form className={"form"}>
                <label>ContactName</label>
                <input/>
                <label>PhoneNumber</label>
                <input/>
                <div className={"button_row"}>
                    <SaveButton/>
                </div>
            </form>
        </div>
    )
}


export default AddForm;