import { Helmet } from 'react-helmet-async'
import { Dispatch, SetStateAction } from 'react'
import { Chats } from '@/components/chats/chats'
import { CurrentChat } from '@/components/current-chat/current-chat'
import { IUserData } from '@/components/type'
import { UserInformation } from '@/components/user-information/user-information'

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
            <Chats />

            <CurrentChat />
        </div>
    )
}
