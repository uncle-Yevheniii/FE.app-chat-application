import { Helmet } from 'react-helmet-async'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Chats } from '@/components/chats/chats'
import { CurrentChat } from '@/components/current-chat/current-chat'
import { IChatData, IUserData } from '@/components/type'
import { UserInformation } from '@/components/user-information/user-information'

interface ChatPageProps {
    userData: IUserData
    setData: Dispatch<SetStateAction<IUserData | null>>
}
const CHAT: string = 'chat_info'
const localStorage = () => {
    const savedObject = window.localStorage.getItem(CHAT)
    if (savedObject !== null) return JSON.parse(savedObject)
    return []
}

export default function ChatPage({ userData, setData }: ChatPageProps) {
    const [chat, setChat] = useState<IChatData[] | []>(localStorage)
    useEffect(() => {
        window.localStorage.setItem(CHAT, JSON.stringify(chat))
    }, [chat])
    return (
        <div>
            <Helmet>
                <title>Chat</title>
            </Helmet>

            <UserInformation userData={userData} setData={setData} />
            <Chats userData={userData} chatData={chat} setChat={setChat} />

            <CurrentChat />
        </div>
    )
}
