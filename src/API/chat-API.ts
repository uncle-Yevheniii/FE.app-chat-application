import { IUserData } from '@/components/type'
import axios from 'axios'

axios.defaults.baseURL = 'https://be-app-chat-application.onrender.com'

export const CreateChat = async (owner_id: string, data: IUserData) => {
    const response = await axios.post('/chats/create', data, { params: { userId: owner_id } })
    return response.data
}

export const UpdateChat = async (owner_id: string, chat_id: string, data: IUserData) => {
    const response = await axios.patch(`/chats/update/${chat_id}`, data, { params: { userId: owner_id } })
    return response.data
}

export const DeleteChat = async (owner_id: string, chat_id: string) => {
    const response = await axios.delete(`/chats/delete/${chat_id}`, { params: { userId: owner_id } })
    return response.data
}
