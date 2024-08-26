import toast from 'react-hot-toast'
import { DeleteUser } from '@/API/user-API'
import { ModalDangerZoneProps } from '../../type'

import style from './style.module.css'

enum TOAST_TEXT {
    SUCCESS = 'Successfully deleted!',
    ERROR = 'This is an error!'
}
export function ModalDangerZone({ userData }: ModalDangerZoneProps) {
    const onDeleteUser = async () => {
        await DeleteUser(userData._id)
            .then(() => {
                toast.success(TOAST_TEXT.SUCCESS)
                window.localStorage.clear()
                setTimeout(() => window.location.reload(), 1500)
            })
            .catch((err) => {
                console.log(err)
                toast.error(TOAST_TEXT.ERROR)
            })
    }

    return (
        <div className={style.margin}>
            <div className={style.container}>
                <p className={style.titleDanger}>Danger zone</p>
                <button className={style.btnDanger} onClick={onDeleteUser}>
                    Delete account
                </button>
            </div>
        </div>
    )
}
