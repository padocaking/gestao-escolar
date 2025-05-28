import styled from 'styled-components';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import Header from '../Components/Header';
import Nagivation from '../Components/Navigation';
import useNavStore from '../Service/useNavStore';
import TurmasList from '../Pages/Diretor/Turmas/TurmasList';
import TurmaAdd from '../Pages/Diretor/Turmas/TurmasAdd/TurmaAdd';
import TurmaEstudante from '../Pages/Diretor/Turmas/TurmaEstudante';
import TurmaProfessor from '../Pages/Diretor/Turmas/TurmaProfessor';
import Footer from '../Components/Footer';
import Boletim from '../Pages/Aluno/Boletim';


const Container = styled.div`

`

const Page = styled.div`
    padding-top: ${props => props.showHeader ? 'var(--header-height)' : '0'};
    margin-left: ${props => props.showHeader ? (props.navOpened ? 'var(--nav-width-opened)' : 'var(--nav-width-closed)') : '0'};
    background: var(--background);
    min-height: 100vh;

    .notLogin {
        padding: 3% 5%;
    }
`

const Content = styled.div`
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
                        <Route path='diretor/turmas' element={<TurmasList />} />
                        <Route path='diretor/turmas/nova-turma' element={<TurmaAdd />} />
                        <Route path='diretor/turmas/vincular-estudante' element={<TurmaEstudante />} />
                        <Route path='diretor/turmas/vincular-professor' element={<TurmaProfessor />} />
                        {/* ROTAS ALUNO */}
                        <Route path='/boletim' element={<Boletim />} />
                    </Routes>
                </Content>
            </Page>
            {showHeader && <Footer/>}
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