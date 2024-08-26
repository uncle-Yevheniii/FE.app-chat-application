import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080'

export const CreateChat = async (id, data) => {
    const response = await axios.post('/chats/create', data, { params: { userId: id } })
    return response.data
}
