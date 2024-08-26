import { UserInformation } from '@/components/user-information/user-information'
import { Dispatch, SetStateAction } from 'react'
import { Helmet } from 'react-helmet-async'

interface ChatPageProps {
    userData: {
        _id: string
        firstName: string
        lastName: string
    }
    setData: Dispatch<SetStateAction<object>>
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
