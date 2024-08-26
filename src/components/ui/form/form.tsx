import { Form as FormComponent } from 'formik'
import { Input } from '../input/input'

import style from './style.module.css'

export function Form() {
    return (
        <FormComponent autoComplete="off" className={style.form}>
            <Input label="First Name" id="firstName" name="firstName" placeholder="First Name" />
            <Input label="Last Name" id="lastName" name="lastName" placeholder="Last Name" />
            <button className={style.btn} type="submit">
                Submit
            </button>
        </FormComponent>
    )
}
