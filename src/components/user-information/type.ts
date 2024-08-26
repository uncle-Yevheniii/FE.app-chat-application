import { Dispatch, SetStateAction } from 'react'
import { IUserData } from '../type'

export interface UserInformationProps {
    userData: IUserData
    setData: Dispatch<SetStateAction<IUserData | null>>
}

export interface GreetingsProps {
    firstName: string
    lastName: string
}

export interface UserButtonsProps {
    openModal: () => void
}

export interface ModalContentProps {
    userData: IUserData
    setData: Dispatch<SetStateAction<IUserData | null>>
    closeModal: () => void
}
export interface ModalFormProps {
    userData: IUserData
    setData: Dispatch<SetStateAction<IUserData | null>>
    closeModal: () => void
}
export interface ModalDangerZoneProps {
    userData: IUserData
}
