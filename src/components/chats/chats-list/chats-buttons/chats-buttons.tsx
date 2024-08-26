import { useState } from 'react'
import { ModalComponent } from '@/components/ui/modal/modal'
import { ModalContent } from './modal-content/modal-content'
import { ChatsButtonsProps } from '../../type'

export function ChatsButtons({ setChat, userData, chatId, chatData }: ChatsButtonsProps) {
    const [modalIsOpen, setIsOpen] = useState<boolean>(false)
    const openModal = (): void => setIsOpen(true)
    const closeModal = (): void => setIsOpen(false)

    return (
        <div>
            <button type="button" onClick={openModal}>
                Edit
            </button>
            <button type="button">Delete</button>

            <ModalComponent modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}>
                <ModalContent closeModal={closeModal} setChat={setChat} userData={userData} chatId={chatId} chatData={chatData} />
            </ModalComponent>
        </div>
    )
}
