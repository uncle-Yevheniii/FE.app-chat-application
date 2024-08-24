import { Field } from 'formik'
import { InputProps } from './type'

export function Input({ label, id, name, placeholder, type = 'text', value = '' }: InputProps) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <Field id={id} name={name} placeholder={placeholder} type={type} value={value} />
        </div>
    )
}
