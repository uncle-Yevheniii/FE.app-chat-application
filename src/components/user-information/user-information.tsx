import { useState } from 'react'

import Modal from 'react-modal'
import { UserInformationProps } from './type'
import { UserGreetings } from './user-greetings/user-greetings'

import { UserButtons } from './user-buttons/user-buttons'
import { ModalContent } from './modal-content/modal-content'

Modal.setAppElement('#root')

export function UserInformation({ userData, setData }: UserInformationProps) {
    const [modalIsOpen, setIsOpen] = useState<boolean>(false)
    const openModal = (): void => setIsOpen(true)
    const closeModal = (): void => setIsOpen(false)

    return (
        <div>
            <UserGreetings firstName={userData.firstName} lastName={userData.lastName} />
            <UserButtons openModal={openModal} />

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
                <ModalContent userData={userData} setData={setData} closeModal={closeModal} />
            </Modal>
        </div>
    )
}
