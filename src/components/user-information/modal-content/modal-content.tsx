import { ModalContentProps } from '../type'
import { ModalDangerZone } from './modal-danger-zone/modal-danger-zone'
import { ModalForm } from './modal-form/modal-form'

export function ModalContent({ userData, setData, closeModal }: ModalContentProps) {
    return (
        <div>
            <button onClick={closeModal}>close</button>
            <p>Edit profile name</p>

            <ModalForm userData={userData} setData={setData} closeModal={closeModal} />
            <ModalDangerZone userData={userData} />
        </div>
    )
}
