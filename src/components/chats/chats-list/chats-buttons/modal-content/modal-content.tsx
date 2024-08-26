import { ModalContentProps } from '@/components/chats/type'
import { ModalForm } from './modal-form/modal-form'

export function ModalContent({ chatId, chatData, userData, setChat, closeModal }: ModalContentProps) {
    return (
        <div>
            <button onClick={closeModal}>close</button>
            <p>Edit chat</p>

            <ModalForm chatId={chatId} chatData={chatData} userData={userData} setChat={setChat} closeModal={closeModal} />
        </div>
    )
}
