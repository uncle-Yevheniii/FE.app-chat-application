import { Helmet } from 'react-helmet-async'
import { AxiosError } from 'axios'
import { useEffect, useRef, useState } from 'react'

import { AuthorizationForm } from '@/components/authorization-form/authorization-form'
import { HealthCheck } from '@/api'

type MutableRefObject<T> = {
    current: T | null
}

export default function Authorization() {
    const [data, setData] = useState<object | null>(null)
    const [error, setError] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const abortController: MutableRefObject<AbortController> = useRef(null)

    useEffect(() => {
        abortController.current = new AbortController()

        const fetchData = async () => {
            try {
                setError(false)
                setLoading(true)
                const response = await HealthCheck({ controller: abortController.current! })
                setData(response)
            } catch (error: unknown) {
                if (error instanceof AxiosError && error.code !== 'ERR_CANCELED') {
                    setError(true)
                }
            } finally {
                setLoading(false)
            }
        }

        fetchData()
        return () => abortController.current!.abort()
    }, [])

    return (
        <div>
            <Helmet>
                <title>Authorization</title>
            </Helmet>

            {error && <p>Oops! Something went wrong.</p>}
            {loading ? <p>Loading...</p> : <AuthorizationForm />}
        </div>
    )
}
