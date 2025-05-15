import styled from 'styled-components';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import Header from '../Components/Header';
import Nagivation from '../Components/Navigation';
import useNavStore from '../Service/useNavStore';
import Turmas from '../Pages/Diretor/Turmas';
import Professores from '../Pages/Diretor/Professores';
import Alunos from '../Pages/Diretor/Alunos';

const Container = styled.div`

`

const Page = styled.div`
    padding-top: ${props => props.showHeader ? 'var(--header-height)' : '0'};
    margin-left: ${props => props.showHeader ? (props.navOpened ? 'var(--nav-width-opened)' : 'var(--nav-width-closed)') : '0'};
    background: var(--background);
    min-height: 100vh;
`

const Content = styled.div`
    padding: 3% 5%;
`

function AppRoutes () {
    const location = useLocation()
    const showHeader = location.pathname != '/login'
    const { navOpened } = useNavStore()

    return (
        <Container>
            {showHeader && <Header />}
            {showHeader && <Nagivation />}
            <Page showHeader={showHeader} navOpened={navOpened} >
                <Content>
                    <Routes>
                        <Route path='/login' element={<Login />} />
                        <Route path='/' element={<Dashboard />} />
                        {/* ROTAS DIRETOR */}
                        <Route path='/turmas' element={<Turmas />} />
                        <Route path='/professores' element={<Professores />} />
                        <Route path='/alunos' element={<Alunos />} />
                    </Routes>
                </Content>
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