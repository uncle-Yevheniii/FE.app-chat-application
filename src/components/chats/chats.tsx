import Modal from 'react-modal'
import { useState } from 'react'
import { ChatsProps } from './type'
// import { CreateChat } from '@/API/chat-API'
import { ModalContent } from './modal-content/modal-content'

Modal.setAppElement('#root')
export function Chats({ userData, chatData, setChat }: ChatsProps) {
    const [modalIsOpen, setIsOpen] = useState<boolean>(false)
    const openModal = (): void => setIsOpen(true)
    const closeModal = (): void => setIsOpen(false)
    return (
        <div>
            <button type="button" onClick={openModal}>
                Add chat
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.75)'
                    },
                    content: {
                        position: 'absolute',
                        top: '40px',
                        left: '40px',
                        right: '40px',
                        bottom: '40px',
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '20px'
                    }
                }}
            >
                <ModalContent userData={userData} chatData={chatData} setChat={setChat} closeModal={closeModal} />
            </Modal>

            <div>
                <b>Chats</b>

                <ul>
                    {chatData.map((item) => (
                        <li key={item._id}>
                            <p>{`BOT: ${item.firstName} ${item.lastName}`}</p>
                            <button>Edit</button>
                            <button>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

// ;async () => {
//     await CreateChat(userData._id, { firstName: 'bob', lastName: 'bob' })
//         .then(({ chat }) => {
//             setChat((prev) => [...prev, chat])
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// }
