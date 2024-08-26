import { ChatsListProps } from '../type'
import { ChatsButtons } from './chats-buttons/chats-buttons'

export function ChatsList({ chatData, userData, setChat }: ChatsListProps) {
    return (
        <div>
            <h1>Chats</h1>
            <ul>
                {chatData.map((item) => (
                    <li key={item._id}>
                        <p>{item.firstName}</p>
                        <p>{item.lastName}</p>
                        <ChatsButtons chatData={chatData} userData={userData} chatId={item._id} setChat={setChat} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
