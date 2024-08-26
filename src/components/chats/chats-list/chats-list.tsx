import { ChatsListProps } from '../type'
import { ChatsButtons } from './chats-buttons/chats-buttons'

import style from './style.module.css'

export function ChatsList({ chatData, userData, setChat }: ChatsListProps) {
    return (
        <>
            {chatData.length > 0 ? (
                <ul className={style.chatsList}>
                    {chatData.map(({ _id, firstName, lastName }) => {
                        const name = firstName.length < 10 ? firstName : `${firstName.substring(0, 10)}...`
                        const surname = lastName.length < 10 ? firstName : `${lastName.substring(0, 10)}...`

                        return (
                            <li key={_id} className={style.chatsListItem}>
                                <p>{`${name.charAt(0).toUpperCase() + name.slice(1)} ${surname.charAt(0).toUpperCase() + surname.slice(1)}`}</p>

                                <ChatsButtons chatData={chatData} userData={userData} chatId={_id} setChat={setChat} />
                            </li>
                        )
                    })}
                </ul>
            ) : (
                <p className={style.noChats}>{'You have no chats yet.'}</p>
            )}
        </>
    )
}
