import { Form, Formik, FormikHelpers } from 'formik'
import { FormState } from './types'
import { Input } from './input/input'

export function AuthorizationForm() {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: ''
            }}
            onSubmit={(value: FormState, { setSubmitting, resetForm }: FormikHelpers<FormState>) => {
                console.log(value)
                setSubmitting(false)
                resetForm()
            }}
        >
            <Form>
                <Input label="First Name" id="firstName" name="firstName" placeholder="First Name" />
                <Input label="Last Name" id="lastName" name="lastName" placeholder="Last Name" />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}
