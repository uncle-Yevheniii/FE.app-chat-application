import { Dispatch, SetStateAction } from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { Input } from './input/input'
import { FormState } from './types'
import { ValidationSchema } from './validation'
import { CreateUser } from '@/api'
import toast from 'react-hot-toast'

interface AuthorizationFormProps {
    setLocalStorage: Dispatch<SetStateAction<object>>
}
export function AuthorizationForm({ setLocalStorage }: AuthorizationFormProps) {
    return (
        <>
            <Formik
                validationSchema={ValidationSchema}
                initialValues={{
                    firstName: '',
                    lastName: ''
                }}
                onSubmit={async (value: FormState, { resetForm }: FormikHelpers<FormState>) => {
                    const { user } = await CreateUser(value)
                    toast.success('User created')
                    setTimeout(() => setLocalStorage(user), 1500)
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
