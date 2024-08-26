import { Toaster } from 'react-hot-toast'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Authorization, Chat } from '../pages'
import { useEffect, useState } from 'react'
import { IUserData } from './type'

const USER: string = 'user_info'
const localStorage = () => {
    const savedObject = window.localStorage.getItem(USER)
    if (savedObject !== null) return JSON.parse(savedObject)
    return null
}

export default function App() {
    const [data, setData] = useState<IUserData | null>(localStorage)
    useEffect(() => {
        window.localStorage.setItem(USER, JSON.stringify(data))
    }, [data])
    return (
        <>
            <Routes>
                <Route path="/authorization" element={data !== null ? <Navigate to="/chat" /> : <Authorization setLocalStorage={setData} />} />
                <Route path="/chat" element={data !== null ? <Chat userData={data} setData={setData} /> : <Navigate to="/authorization" />} />
                <Route path="*" element={<Navigate to="/authorization" />} />
            </Routes>
            <Toaster toastOptions={{ duration: 1500 }} />
        </>
    )
}
