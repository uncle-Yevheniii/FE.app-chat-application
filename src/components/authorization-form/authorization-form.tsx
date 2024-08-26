import toast from 'react-hot-toast'
import { Dispatch, SetStateAction } from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { Input } from '../ui/input/input'
import { FormState } from './types'
import { ValidationSchema } from './validation'
import { CreateUser } from '@/API/user-API'
import { IUserData } from '../type'

interface AuthorizationFormProps {
    setLocalStorage: Dispatch<SetStateAction<IUserData | null>>
}
export function AuthorizationForm({ setLocalStorage }: AuthorizationFormProps) {
    enum TOAST_TEXT {
        SUCCESS = 'User created',
        ERROR = 'This is an error'
    }

    return (
        <>
            <Formik
                validationSchema={ValidationSchema}
                initialValues={{
                    firstName: '',
                    lastName: ''
                }}
                onSubmit={async (value: FormState, { resetForm }: FormikHelpers<FormState>) => {
                    await CreateUser(value)
                        .then(({ user }) => {
                            toast.success(TOAST_TEXT.SUCCESS)
                            setTimeout(() => setLocalStorage(user), 1500)
                            resetForm()
                        })
                        .catch((err) => {
                            toast.error(TOAST_TEXT.ERROR)
                            console.log(err)
                        })
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
