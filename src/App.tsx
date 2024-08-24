import { Navigate, Route, Routes } from 'react-router-dom'
import { Authorization, Chat } from './pages'

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/authorization" element={<Authorization />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="*" element={<Navigate to="/authorization" />} />
            </Routes>
        </>
    )
}
