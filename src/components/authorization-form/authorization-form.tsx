import toast from 'react-hot-toast'
import { Dispatch, SetStateAction } from 'react'
import { Formik, FormikHelpers } from 'formik'
import { Form } from '@/components/ui/form/form'
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

    const onCreateUser = async (value: FormState, { resetForm }: FormikHelpers<FormState>) => {
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
    }

    return (
        <>
            <Formik validationSchema={ValidationSchema} initialValues={{ firstName: '', lastName: '' }} onSubmit={onCreateUser}>
                <Form />
            </Formik>
        </>
    )
}
