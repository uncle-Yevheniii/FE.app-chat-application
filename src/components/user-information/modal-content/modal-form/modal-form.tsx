import { Formik, Form, FormikHelpers } from 'formik'
import { ModalFormProps } from '../../type'
import { Input } from '@/components/ui/input/input'
import toast from 'react-hot-toast'
import { UpdateUser } from '@/api'
import { FormState } from './type'

export function ModalForm({ userData, setData, closeModal }: ModalFormProps) {
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '' }}
            onSubmit={async (value: FormState, { resetForm }: FormikHelpers<FormState>) => {
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
            }}
        >
            <Form autoComplete="off">
                <Input label="First Name" id="firstName" name="firstName" placeholder="First Name" />
                <Input label="Last Name" id="lastName" name="lastName" placeholder="Last Name" />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}
