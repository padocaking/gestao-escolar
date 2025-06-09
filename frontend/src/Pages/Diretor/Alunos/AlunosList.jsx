import styled from 'styled-components';
import TableRowItem from '../../../Components/TableRowItem'
import { useNavigate } from 'react-router-dom';
import { Table, Headers, Title } from '../Diretor.style';
import { useEffect, useState } from 'react';
import { FaFilter } from "react-icons/fa";
import CheckboxFilter from '../../../Components/CheckboxFilter';
import TableItemAluno from '../../../Components/TableItemAluno';

const FilterContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bluish-gray);
    margin-bottom: -35px;
    border-radius: 5px 5px 0 0;
    user-select: none;

    div {
        &.filterItem {
            height: 100%;
            padding: 15px;
            cursor: pointer;
        }
    }

    span {
        letter-spacing: 0px;
        font-size: 15px;
        font-weight: 500;
        cursor: pointer;

        &.add:hover {
            letter-spacing: 1px;
        }
    }

    h3 {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        letter-spacing: 2px;
        font-weight: 500;
    }
`

const Filter = styled.div`
    position: absolute;
    background-color: white;
    border-radius: 5px 5px 0 0;
    top: 10px;
    left: 45px;
    display: flex;
    gap: 20px;
    padding: ${props => props.opened ? '15px' : '0px 15px'};
    max-height: ${props => props.opened ? '300px' : '0px'};
    opacity: ${props => props.opened ? '100%' : '0%'};
    overflow: hidden;
    box-shadow: 0 0 10px 0px #00000026;
    border-bottom: 2px solid var(--main-one);
    z-index: 9999;
`

export default function AlunosList () {

    const navigate = useNavigate()

    const [alunos, setAlunos] = useState([])
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [filters, setFilters] = useState({
        nome: [],
        turma: [],
        status: []
    });
    const [openFilter, setOpenFilter] = useState(false)

    useEffect(() => {
        fetch('/data/alunos.json')
            .then(res => res.json())
            .then(data => setAlunos(data))
    }, [])

    console.log(alunos)

    const sortBy = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        const sorted = [...alunos].sort((a, b) => {
            const aVal = a[key]?.toString().toLowerCase();
            const bVal = b[key]?.toString().toLowerCase();

            if (aVal < bVal) return direction === 'asc' ? -1 : 1;
            if (aVal > bVal) return direction === 'asc' ? 1 : -1;
            return 0;
        });

        setSortConfig({ key, direction });
        setAlunos(sorted);
    }

    const handleCheckboxChange = (category, value) => {
        setFilters(prev => {
            const alreadyChecked = prev[category].includes(value);
            return {
            ...prev,
            [category]: alreadyChecked
                ? prev[category].filter(v => v !== value)
                : [...prev[category], value]
            }
        })
    }

    const alunosFiltrados = alunos.filter(aluno => {
        const matchNome = filters.nome.length === 0 || filters.nome.includes(String(aluno.nome));
        const matchTurma = filters.turma.length === 0 || filters.turma.includes(String(aluno.turma));
        const matchStatus = filters.status.length === 0 || filters.status.includes(String(aluno.status));
        return matchNome && matchTurma && matchStatus;
    })

    const renderHeader = (label, key) => (
        <Headers onClick={() => sortBy(key)} style={{ cursor: 'pointer' }}>
            {label}
            <div style={{position: 'absolute', top: '15px', left: '15px'}}>{sortConfig.key === key ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}</div>
        </Headers>
    )

    return (
        <>

            <Title>Controle de alunos</Title>

            <FilterContainer>
                <div className='filterItem' onClick={() => setOpenFilter(!openFilter)} >
                    <FaFilter/>
                </div>
                <h3>ALUNOS</h3>
                <div className="filterItem" onClick={() => navigate('/diretor/turmas/novo-aluno')}>
                    <span className='add'>+ NOVO ALUNO</span>
                </div>
                <Filter opened={openFilter}>
                    <div className=''>
                        <CheckboxFilter
                            label="Turma"
                            options={['Nenhum', '1º', '2º', '3º', '4º', '5º', '6º', '7º', '8º', '9º', '1º EM', '2º EM', '3º EM']}
                            selected={filters.turma}
                            onChange={(value) => handleCheckboxChange("turma", value)}
                        />
                    </div>
                    <div className=''>
                        <CheckboxFilter
                            label="Status"
                            options={['matriculado', 'pendente']}
                            selected={filters.status}
                            onChange={(value) => handleCheckboxChange("status", value)}
                        />
                    </div>
                    <div onClick={() => setOpenFilter(false)} style={{cursor: 'pointer'}}>
                        X
                    </div>
                </Filter>
            </FilterContainer>

            <Table>
                <thead>
                    <tr>
                        {renderHeader("Matrícula", "matricula")}
                        {renderHeader("Nome", "nome")}
                        {renderHeader("Turma", "turma")}
                        {renderHeader("Status", "status")}
                        <Headers>...</Headers>
                    </tr>
                </thead>
                <tbody>
                    {alunosFiltrados.map(alunuo => (
                        <TableItemAluno
                            matricula={alunuo.matricula}
                            nome={alunuo.nome}
                            turma={alunuo.turma}
                            status={alunuo.status}
                        />
                    ))}
                </tbody>
            </Table>

        </>
    )
}