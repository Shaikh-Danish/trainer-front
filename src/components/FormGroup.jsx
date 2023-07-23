import {  Field, ErrorMessage } from "formik"

function FormGroup({formName, type}) {
    let name = formName.toLowerCase()

    if (formName.split(" ").length > 1) {
        name = name.split(" ").join("")
    }

    return (
        <div className="form-group">
            <label htmlFor={name}>{formName}</label>
            <Field type={type} name={name} />
            <ErrorMessage
            name={name}
            component="div"
            className={`${name} error`}
            />
        </div>
    )
}

export default FormGroup

