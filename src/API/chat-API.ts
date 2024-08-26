import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080'

export const CreateChat = async (owner_id, data) => {
    const response = await axios.post('/chats/create', data, { params: { userId: owner_id } })
    return response.data
}

export const UpdateChat = async (owner_id, chat_id, data) => {
    const response = await axios.patch(`/chats/update/${chat_id}`, data, { params: { userId: owner_id } })
    return response.data
}
