import Modal from 'react-modal'
import { IModalProps } from './type'

export function ModalComponent({ modalIsOpen, setIsOpen, children }: IModalProps) {
    const closeModal = (): void => setIsOpen(false)

    return (
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
                    top: '120px',
                    left: '120px',
                    right: '120px',
                    bottom: '120px',

                    border: '2px solid gray',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px'
                }
            }}
        >
            {children}
        </Modal>
    )
}
