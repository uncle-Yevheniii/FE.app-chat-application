import toast from 'react-hot-toast'
import { DeleteUser } from '@/api'
import { ModalDangerZoneProps } from '../../type'

enum TOAST_TEXT {
    SUCCESS = 'Successfully deleted!',
    ERROR = 'This is an error!'
}
export function ModalDangerZone({ userData }: ModalDangerZoneProps) {
    return (
        <div>
            <p>Danger zone</p>
            <button
                onClick={async () => {
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
                }}
            >
                Delete account
            </button>
        </div>
    )
}
