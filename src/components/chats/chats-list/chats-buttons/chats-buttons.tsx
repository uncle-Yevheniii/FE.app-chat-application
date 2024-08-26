import toast from 'react-hot-toast'
import { useState } from 'react'
import { ModalComponent } from '@/components/ui/modal/modal'
import { ModalContent } from './modal-content/modal-content'
import { ChatsButtonsProps } from '../../type'
import { DeleteChat } from '@/API/chat-API'

enum TOAST_TEXT {
    SUCCESS = 'Chat created',
    ERROR = 'This is an error'
}
export function ChatsButtons({ setChat, userData, chatId, chatData }: ChatsButtonsProps) {
    const [modalIsOpen, setIsOpen] = useState<boolean>(false)
    const openModal = (): void => setIsOpen(true)
    const closeModal = (): void => setIsOpen(false)

    return (
        <div>
            <button type="button" onClick={openModal}>
                Edit
            </button>
            <button
                type="button"
                onClick={async () => {
                    return DeleteChat(userData._id, chatId)
                        .then(() => {
                            const currentChat = chatData.filter((chat) => chat._id !== chatId)
                            toast.success(TOAST_TEXT.SUCCESS)
                            setChat(currentChat)
                        })

                        .catch((err) => {
                            toast.error(TOAST_TEXT.ERROR)
                            console.log(err)
                        })
                }}
            >
                Delete
            </button>

            <ModalComponent modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}>
                <ModalContent closeModal={closeModal} setChat={setChat} userData={userData} chatId={chatId} chatData={chatData} />
            </ModalComponent>
        </div>
    )
}
