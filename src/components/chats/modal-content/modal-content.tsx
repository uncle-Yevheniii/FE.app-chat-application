import { ModalContentProps } from '../type'
import { ModalForm } from './modal-form/modal-form'

import style from './style.module.css'

export function ModalContent({ userData, setChat, closeModal, chatData }: ModalContentProps) {
    return (
        <div className={style.container}>
            <button className={style.btn} onClick={closeModal}>
                close
            </button>
            <p className={style.title}>Create chat</p>

            <ModalForm userData={userData} setChat={setChat} closeModal={closeModal} chatData={chatData} />
        </div>
    )
}
