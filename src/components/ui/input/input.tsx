import { Field } from 'formik'
import { InputProps } from './type'

import style from './style.module.css'

export function Input({ label, id, name, placeholder, type = 'text' }: InputProps) {
    return (
        <div className={style.container}>
            <label htmlFor={id}>{label}</label>
            <Field className={style.input} id={id} name={name} placeholder={placeholder} type={type} />
        </div>
    )
}
