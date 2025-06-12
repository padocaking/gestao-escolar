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
import Financeiro from '../Pages/Financeiro/Financeiro';
import AlunosList from '../Pages/Diretor/Alunos/AlunosList';
import Boletim from '../Pages/Aluno/Boletim'
import AlunoAdd from '../Pages/Diretor/Alunos/AlunoAdd/AlunoAdd';
import ProfessoresList from '../Pages/Diretor/Professor/ProfessoresList';
import ProfessorAdd from '../Pages/Diretor/Professor/ProfessorAdd/ProfessorAdd';
import TurmaDetail from '../Pages/Diretor/Turmas/TurmaDetail/TurmaDetail';
import TurmaAddAluno from '../Pages/Diretor/Turmas/TurmaDetail/TurmaAddAluno';
import TurmaAddProfessor from '../Pages/Diretor/Turmas/TurmaDetail/TurmaAddProfessor';
import TurmaEdit from '../Pages/Diretor/Turmas/TurmaDetail/TurmaEdit';
import AlunoDetail from '../Pages/Diretor/Alunos/AlunoDetail/AlunoDetail';
import ProfessorDetail from '../Pages/Diretor/Professor/ProfessorDetail/ProfessorDetail';
import ProtectedRoute from '../Components/ProtectedRoute';
import Horarios from '../Pages/Aluno/Horarios';
import HorariosProfessor from '../Pages/Professor/Horarios';
import TurmasProfessorList from '../Pages/Professor/Turmas/TurmasProfessorList';
import TurmaDetailProf from '../Pages/Professor/Turmas/TurmaDetailProf';
import Chamada from '../Pages/Professor/Turmas/Chamada';
import Lancamento from '../Pages/Professor/Turmas/Lancamento';


const Container = styled.div`

`

const Page = styled.div`
    padding-top: ${props => props.showHeader ? 'var(--header-height)' : '0'};
    margin-left: ${props => props.showHeader ? 'var(--nav-width-opened)' : '0'};
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

                        <Route
                            element={<ProtectedRoute allowedRoles={['diretor']} />}
                        >

                            <Route path='/diretor/turmas' element={<TurmasList />} />
                            <Route path='/diretor/turmas/nova-turma' element={<TurmaAdd />} />
                            <Route path='/diretor/turmas/:id' element={<TurmaDetail />} />
                            <Route path='/diretor/turmas/:id/vincular-aluno' element={<TurmaAddAluno />} />
                            <Route path='/diretor/turmas/:id/vincular-professor' element={<TurmaAddProfessor />} />
                            <Route path='/diretor/turmas/:id/editar' element={<TurmaEdit />} />
                            <Route path='/diretor/alunos' element={<AlunosList />} />
                            <Route path='/diretor/alunos/novo-aluno' element={<AlunoAdd />} />
                            <Route path='/diretor/alunos/:matricula' element={<AlunoDetail />} />
                            <Route path='/diretor/professores' element={<ProfessoresList />} />
                            <Route path='/diretor/professores/novo-professor' element={<ProfessorAdd />} />
                            <Route path='/diretor/professores/:id' element={<ProfessorDetail />} />
                            <Route path='/diretor/requerimento' element={<RequerimentoDiretor />} />

                        </Route>

                        <Route path='/requerimento' element={<Requerimento />} />
                        {/* ROTAS REQUERIMENTO */}
                        {/* ROTAS ALUNO*/}

                        <Route
                            element={<ProtectedRoute allowedRoles={['aluno', 'diretor']} />}
                        >

                            <Route path='/boletim' element={<Boletim />} />
                            <Route path='/horarios' element={<Horarios />} />
                            <Route path='/financeiro' element={<Financeiro />} />

                        </Route>

                        <Route
                            element={<ProtectedRoute allowedRoles={['professor', 'diretor']} />}
                        >

                            <Route path='/professor/horarios' element={<HorariosProfessor />} />
                            <Route path='/turmas' element={<TurmasProfessorList />} />
                            <Route path='/turmas/:id' element={<TurmaDetailProf />} />
                            <Route path='/turmas/:id/chamada' element={<Chamada />} />
                            <Route path='/turmas/:id/lancamento-de-notas' element={<Lancamento />} />

                        </Route>

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