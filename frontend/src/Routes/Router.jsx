import styled from 'styled-components';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import Header from '../Components/Header';
import Nagivation from '../Components/Navigation';
import useNavStore from '../Service/useNavStore';
import TurmasList from '../Pages/Diretor/Turmas/TurmasList';
import TurmaAdd from '../Pages/Diretor/Turmas/TurmasAdd/TurmaAdd';
import Footer from '../Components/Footer';
import Requerimento from '../Pages/Requerimento/Requerimento';
import RequerimentoDiretor from '../Pages/Requerimento/RequerimentoDiretor';
import AlunosList from '../Pages/Diretor/Alunos/AlunosList';


const Container = styled.div`

`

const Page = styled.div`
    padding-top: ${props => props.showHeader ? 'var(--header-height)' : '0'};
    margin-left: var(--nav-width-opened);
    background: #ffffff;
    min-height: 100vh;

    .notLogin {
        padding: 3% 5%;
    }

    @media (max-width: 900px) {
        margin-left: 0;
    }
`

const Content = styled.div`
    min-height: calc(100vh - 2 * var(--footer-height));
`

function AppRoutes () {
    const location = useLocation()
    const showHeader = location.pathname !== '/login'
    const { navOpened } = useNavStore()

    return (
        <Container>
            {showHeader && <Header />}
            {showHeader && <Nagivation />}
            <Page showHeader={showHeader} navOpened={navOpened} >
                <Content className={showHeader ? 'notLogin' : ''}>
                    <Routes>
                        <Route path='/login' element={<Login />} />
                        <Route path='/' element={<Dashboard />} />
                        {/* ROTAS DIRETOR */}
                        <Route path='/diretor/turmas' element={<TurmasList />} />
                        <Route path='/diretor/turmas/nova-turma' element={<TurmaAdd />} />
                        <Route path='/diretor/alunos' element={<AlunosList />} />
                        {/* ROTAS REQUERIMENTO */}
                        <Route path='/requerimento' element={<Requerimento />} />
                        <Route path='/diretor/requerimento' element={<RequerimentoDiretor />} />
                    </Routes>
                </Content>
                {showHeader && <Footer/>}
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