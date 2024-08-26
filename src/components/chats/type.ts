import { Dispatch, SetStateAction } from 'react'
import { IChatData, IUserData } from '../type'

export interface ChatsProps {
    userData: IUserData
    chatData: IChatData[] | []
    setChat: Dispatch<SetStateAction<IChatData[] | []>>
}

export interface ModalContentProps {
    userData: IUserData
    chatData: IChatData[] | []
    setChat: Dispatch<SetStateAction<IChatData[] | []>>
    closeModal: () => void
}

export interface ModalFormProps {
    userData: IUserData
    setChat: Dispatch<SetStateAction<IChatData[] | []>>
    closeModal: () => void
}
