import toast from 'react-hot-toast'
import { Formik, FormikHelpers } from 'formik'
import { ModalFormProps } from '@/components/chats/type'
import { Form } from '@/components/ui/form/form'
import { FormState } from './type'
import { UpdateChat } from '@/API/chat-API'

enum TOAST_TEXT {
    SUCCESS = 'Chat created',
    ERROR = 'This is an error'
}

export function ModalForm({ chatId, chatData, userData, setChat, closeModal }: ModalFormProps) {
    const onUpdateChat = async (value: FormState, { resetForm }: FormikHelpers<FormState>) => {
        await UpdateChat(userData._id, chatId, value)
            .then(({ chat }) => {
                const currentChat = chatData.filter((chat) => chat._id !== chatId)
                toast.success(TOAST_TEXT.SUCCESS)
                setChat([chat, ...currentChat])
                resetForm()
                closeModal()
            })
            .catch((err) => {
                toast.error(TOAST_TEXT.ERROR)
                console.log(err)
            })
    }

    return (
        <Formik initialValues={{ firstName: '', lastName: '' }} onSubmit={onUpdateChat}>
            <Form />
        </Formik>
    )
}
