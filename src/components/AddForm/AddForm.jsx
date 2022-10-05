import "./Form.style.scss"
import SaveButton from "../Button/SaveButton";

const AddForm = () => {
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