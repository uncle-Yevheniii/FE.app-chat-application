import toast from 'react-hot-toast'
import { UserButtonsProps } from '../type'

import style from './style.module.css'

export function UserButtons({ openModal }: UserButtonsProps) {
    const TOAST_TEXT: string = 'Logout done'

    const onLogout = () => {
        toast.success(TOAST_TEXT)
        window.localStorage.clear()
        window.location.reload()
    }

    return (
        <div className={style.container}>
            <button className={style.btn} onClick={openModal}>
                Edit
            </button>
            <button className={style.btn} onClick={onLogout}>
                Logout
            </button>
        </div>
    )
}
