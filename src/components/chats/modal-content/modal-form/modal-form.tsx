import toast from 'react-hot-toast'
import { Formik, FormikHelpers } from 'formik'
import { ModalFormProps } from '../../type'
import { Form } from '@/components/ui/form/form'
import { FormState } from './type'
import { CreateChat } from '@/API/chat-API'

enum TOAST_TEXT {
    SUCCESS = 'Chat created',
    ERROR = 'This is an error'
}

export function ModalForm({ userData, setChat, closeModal }: ModalFormProps) {
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '' }}
            onSubmit={async (value, { resetForm }: FormikHelpers<FormState>) => {
                await CreateChat(userData._id, value)
                    .then(({ chat }) => {
                        toast.success(TOAST_TEXT.SUCCESS)
                        setChat((prev) => [...prev, chat])
                        resetForm()
                        closeModal()
                    })
                    .catch((err) => {
                        toast.error(TOAST_TEXT.ERROR)
                        console.log(err)
                    })
            }}
        >
            <Form />
        </Formik>
    )
}
