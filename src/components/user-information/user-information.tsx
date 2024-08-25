interface UserInformationProps {
    userData: {
        firstName: string
        lastName: string
    }
}

export function UserInformation({ userData }: UserInformationProps) {
    console.log(userData)
    return (
        <div>
            <div>
                <span>
                    Hello,{' '}
                    <b>
                        {userData.firstName} {userData.lastName}
                    </b>
                </span>
            </div>
            <div>
                <button>Edit</button>
                <button
                    onClick={() => {
                        window.localStorage.clear()
                        window.location.reload()
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    )
}
