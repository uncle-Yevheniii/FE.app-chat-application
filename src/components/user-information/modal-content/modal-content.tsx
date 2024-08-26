import { ModalContentProps } from '../type'
import { ModalDangerZone } from './modal-danger-zone/modal-danger-zone'
import { ModalForm } from './modal-form/modal-form'

import style from './style.module.css'

export function ModalContent({ userData, setData, closeModal }: ModalContentProps) {
    return (
        <div className={style.container}>
            <button className={style.btn} onClick={closeModal}>
                close
            </button>
            <p className={style.title}>Edit profile name</p>

            <ModalForm userData={userData} setData={setData} closeModal={closeModal} />
            <ModalDangerZone userData={userData} />
        </div>
    )
}
