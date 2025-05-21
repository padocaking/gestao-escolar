import styled from 'styled-components';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import Header from '../Components/Header';
import Nagivation from '../Components/Navigation';
import useNavStore from '../Service/useNavStore';
import Footer from '../Components/Footer';

const Container = styled.div`

`

const Page = styled.div`
    padding-top: ${props => props.showHeader ? 'var(--header-height)' : '0'};
    margin-left: ${props => props.showHeader ? (props.navOpened ? 'var(--nav-width-opened)' : 'var(--nav-width-closed)') : '0'};
`

function AppRoutes () {
    const location = useLocation()
    const showHeader = location.pathname != '/login'
    const { navOpened } = useNavStore()

    return (
        <Container>
            {showHeader && <Header />}
            {showHeader && <Nagivation />}
            {showHeader && <Footer/>}
            <Page showHeader={showHeader} navOpened={navOpened} >
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