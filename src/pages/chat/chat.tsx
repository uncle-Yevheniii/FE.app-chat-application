import { UserInformation } from '@/components/user-information/user-information'
import { Helmet } from 'react-helmet-async'

interface ChatPageProps {
    userData: {
        firstName: string
        lastName: string
    }
}
export default function ChatPage({ userData }: ChatPageProps) {
    console.log(userData)
    return (
        <div>
            <Helmet>
                <title>Authorization</title>
            </Helmet>

            <UserInformation userData={userData} />
        </div>
    )
}
