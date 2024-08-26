import { ModalContentProps } from '../type'
import { ModalForm } from './modal-form/modal-form'

export function ModalContent({ userData, setChat, closeModal, chatData }: ModalContentProps) {
    return (
        <div>
            <button onClick={closeModal}>close</button>
            <p>Create chat</p>

            <ModalForm userData={userData} setChat={setChat} closeModal={closeModal} chatData={chatData} />
        </div>
    )
}
