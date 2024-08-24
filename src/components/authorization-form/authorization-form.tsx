import { Form, Formik, FormikHelpers } from 'formik'
import { FormState } from './types'
import { Input } from './input/input'
import { ValidationSchema } from './validation'

export function AuthorizationForm() {
    return (
        <>
            <Formik
                validationSchema={ValidationSchema}
                initialValues={{
                    firstName: '',
                    lastName: ''
                }}
                onSubmit={(value: FormState, { resetForm }: FormikHelpers<FormState>) => {
                    resetForm()
                }}
            >
                <Form autoComplete="off">
                    <Input label="First Name" id="firstName" name="firstName" placeholder="First Name" />
                    <Input label="Last Name" id="lastName" name="lastName" placeholder="Last Name" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    )
}
