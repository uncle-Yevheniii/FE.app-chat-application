import { useState } from 'react'
import { ChatsProps } from './type'
import { ModalContent } from './modal-content/modal-content'
import { ChatsList } from './chats-list/chats-list'
import { ModalComponent } from '../ui/modal/modal'

export function Chats({ userData, chatData, setChat }: ChatsProps) {
    const [modalIsOpen, setIsOpen] = useState<boolean>(false)
    const openModal = (): void => setIsOpen(true)
    const closeModal = (): void => setIsOpen(false)
    return (
        <div>
            <button type="button" onClick={openModal}>
                Add chat
            </button>

            <ModalComponent modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}>
                <ModalContent userData={userData} chatData={chatData} setChat={setChat} closeModal={closeModal} />
            </ModalComponent>

            <div>
                <b>Chats</b>
                <ChatsList userData={userData} chatData={chatData} setChat={setChat} />
            </div>
        </div>
    )
}
