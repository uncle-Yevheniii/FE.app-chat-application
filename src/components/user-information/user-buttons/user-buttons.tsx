import toast from 'react-hot-toast'
import { UserButtonsProps } from '../type'

export function UserButtons({ openModal }: UserButtonsProps) {
    const TOAST_TEXT: string = 'Logout done'

    return (
        <div>
            <button onClick={openModal}>Edit</button>
            <button
                onClick={() => {
                    toast.success(TOAST_TEXT)
                    window.localStorage.clear()
                    window.location.reload()
                }}
            >
                Logout
            </button>
        </div>
    )
}
