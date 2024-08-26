import { Form as FormComponent } from 'formik'
import { Input } from '../input/input'

export function Form() {
    return (
        <FormComponent autoComplete="off">
            <Input label="First Name" id="firstName" name="firstName" placeholder="First Name" />
            <Input label="Last Name" id="lastName" name="lastName" placeholder="Last Name" />
            <button type="submit">Submit</button>
        </FormComponent>
    )
}
