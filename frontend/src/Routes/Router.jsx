import styled from 'styled-components';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import Header from '../Components/Header';
import Nagivation from '../Components/Navigation';

const Container = styled.div`

`

const Page = styled.div`
    padding-top: ${props => props.showHeader ? 'var(--header-height)' : '0'};
    margin-left: ${props => props.showHeader ? 'var(--nav-width-opened)' : '0'};
`

function AppRoutes () {
    const location = useLocation()
    const showHeader = location.pathname != '/login'

    return (
        <Container>
            {showHeader && <Header />}
            {showHeader && <Nagivation texto="teste" />}
            <Page showHeader={showHeader}>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/' element={<Dashboard />} />
                </Routes>
            </Page>
        </Container>
    )
}

export default function Router () {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}