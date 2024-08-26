import { IUserData } from '@/components/type'
import { UserInformation } from '@/components/user-information/user-information'
import { Dispatch, SetStateAction } from 'react'
import { Helmet } from 'react-helmet-async'

interface ChatPageProps {
    userData: IUserData
    setData: Dispatch<SetStateAction<IUserData | null>>
}
export default function ChatPage({ userData, setData }: ChatPageProps) {
    return (
        <div>
            <Helmet>
                <title>Chat</title>
            </Helmet>

            <UserInformation userData={userData} setData={setData} />
        </div>
    )
}
