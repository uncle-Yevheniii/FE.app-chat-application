import { UserInformation } from '@/components/user-information/user-information'
import { Helmet } from 'react-helmet-async'

interface ChatPageProps {
    userData: {
        _id: string
        firstName: string
        lastName: string
    }
}
export default function ChatPage({ userData }: ChatPageProps) {
    return (
        <div>
            <Helmet>
                <title>Chat</title>
            </Helmet>

            <UserInformation userData={userData} />
        </div>
    )
}
