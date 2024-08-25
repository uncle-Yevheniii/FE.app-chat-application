import { useState } from 'react'
import { Navigate } from 'react-router-dom'

export function Redirect({ component: Component, redirect }) {
    const USER: string = 'user_info'
    const [storage, setStorage] = useState(true)

    const checkUser = localStorage.getItem(USER)
    if (checkUser !== null && checkUser === '{}') setStorage(true)

    return <>{storage ? <Navigate to={redirect} /> : <Component />}</>
}
