import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080'

export const HealthCheck = async ({ controller }: { controller: AbortController }) => {
    try {
        const response = await axios.get('/ping', { signal: controller.signal })
        return response.data
    } catch (error) {
        return error
    }
}
