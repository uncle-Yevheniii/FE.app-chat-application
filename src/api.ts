import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080'

export const HealthCheck = async ({ controller }: { controller: AbortController }) => {
    const response = await axios.get('/ping', { signal: controller.signal })

    return response.data
}

export const CreateUser = async ({ firstName, lastName }: { firstName: string; lastName: string }) => {
    const response = await axios.post('/users/create', { firstName, lastName })
    return response.data
}

export const DeleteUser = async (id: string) => {
    const response = await axios.delete(`/users/delete/${id}`)
    return response.data
}
