import { Dispatch, SetStateAction } from 'react'

export interface IModalProps {
    children: React.JSX.Element
    modalIsOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}
