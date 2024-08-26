import toast from 'react-hot-toast'
import { Formik, FormikHelpers } from 'formik'
import { ModalFormProps } from '../../type'
import { Form } from '@/components/ui/form/form'
import { UpdateUser } from '@/API/user-API'
import { FormState } from './type'
import { ValidationSchema } from '@/components/authorization-form/validation'

export function ModalForm({ userData, setData, closeModal }: ModalFormProps) {
    const onUpdateUser = async (value: FormState, { resetForm }: FormikHelpers<FormState>) => {
        await UpdateUser({ ...value, _id: userData._id })
            .then(({ user }) => {
                toast.success('Successfully edited!')
                setData({ _id: userData._id, ...user })
                resetForm()
                closeModal()
            })
            .catch((err) => {
                console.log(err)
                toast.error('This is an error!')
            })
    }

    return (
        <Formik validationSchema={ValidationSchema} initialValues={{ firstName: '', lastName: '' }} onSubmit={onUpdateUser}>
            <Form />
        </Formik>
    )
}
