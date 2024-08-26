import { Dispatch, SetStateAction } from 'react'
import { Helmet } from 'react-helmet-async'
import { AuthorizationForm } from '@/components/authorization-form/authorization-form'
import { IUserData } from '@/components/type'

interface AuthorizationProps {
    setLocalStorage: Dispatch<SetStateAction<IUserData | null>>
}

export default function Authorization({ setLocalStorage }: AuthorizationProps) {
    return (
        <div>
            <Helmet>
                <title>Authorization</title>
            </Helmet>

            <AuthorizationForm setLocalStorage={setLocalStorage} />
        </div>
    )
}
