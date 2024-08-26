import { useState } from 'react'
import { UserInformationProps } from './type'
import { UserGreetings } from './user-greetings/user-greetings'
import { UserButtons } from './user-buttons/user-buttons'
import { ModalContent } from './modal-content/modal-content'
import { ModalComponent } from '../ui/modal/modal'

import style from './style.module.css'

export function UserInformation({ userData, setData }: UserInformationProps) {
    const [modalIsOpen, setIsOpen] = useState<boolean>(false)
    const openModal = (): void => setIsOpen(true)
    const closeModal = (): void => setIsOpen(false)

    return (
        <div className={style.container}>
            <UserGreetings firstName={userData.firstName} lastName={userData.lastName} />
            <UserButtons openModal={openModal} />

            <ModalComponent modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}>
                <ModalContent userData={userData} setData={setData} closeModal={closeModal} />
            </ModalComponent>
        </div>
    )
}
