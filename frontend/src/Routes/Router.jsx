import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import Header from '../Components/Header';

function AppRoutes () {
    const location = useLocation()
    const showHeader = location.pathname === '/login'

    return (
        <>
        {!showHeader && <Header />}
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Dashboard />} />
        </Routes>
        </>
    )
}

export default function Router () {
    return (
        <>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
        </>
    )
}