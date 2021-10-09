import React from 'react'
import { useField } from 'formik';
import Input from "../Input/Input"

import TextInputesCss from "./TextInputes.module.css"

export const TextInputes = ({inputPlaceHolder , errorSelfStyle , ...props}) => {
    const [field, meta] = useField(props);
    return (
        <React.Fragment>
        <Input  inputPlaceHolder={inputPlaceHolder} 
                {...field} {...props} />
        {meta.touched && meta.error ? (
            <div className={`shab ${TextInputesCss.error} ${TextInputesCss[errorSelfStyle]}`}>{meta.error}</div>
        ) : null}
        </React.Fragment>
    );
}

export default TextInputes