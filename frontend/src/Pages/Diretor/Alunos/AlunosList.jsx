import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FullContainer, Table, Headers, Title, FilterContainer, Filter } from '../Diretor.style';
import { useEffect, useState } from 'react';
import { FaFilter } from "react-icons/fa";
import CheckboxFilter from '../../../Components/CheckboxFilter';
import TableItemAluno from '../../../Components/TableItemAluno';

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
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch('/data/alunos.json')
            .then(res => res.json())
            .then(data => setAlunos(data))
    }, [])

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

    console.log(search)

    return (
        <FullContainer>

            <Title>Controle de alunos</Title>

            <FilterContainer>

                <div className='filterItem' onClick={() => setOpenFilter(!openFilter)} >
                    <FaFilter/>
                </div>

                <input className='search' type="text" placeholder="🔍 Procure pela matrícula ou nome" onChange={(e) => setSearch(e.target.value)} />

                <div className="filterItem" onClick={() => navigate('/diretor/alunos/novo-aluno')}>
                    <span className='add'>+ NOVO ALUNO</span>
                </div>

                <Filter opened={openFilter}>
                    <div className='filterHeader'>
                        <CheckboxFilter
                            label="Turma"
                            options={['Nenhum', '1º', '2º', '3º', '4º', '5º', '6º', '7º', '8º', '9º', '1º EM', '2º EM', '3º EM']}
                            selected={filters.turma}
                            onChange={(value) => handleCheckboxChange("turma", value)}
                        />
                    </div>
                    <div className='filterHeader'>
                        <CheckboxFilter
                            label="Status"
                            options={['Matriculado', 'Pendente']}
                            selected={filters.status}
                            onChange={(value) => handleCheckboxChange("status", value)}
                        />
                    </div>
                    <div className='filterHeader' onClick={() => setOpenFilter(false)} style={{cursor: 'pointer', paddingRight: '15px'}}>
                        X
                    </div>
                </Filter>

            </FilterContainer>

            <div style={{width: '100%', height: 'auto', overflow: 'auto'}}>
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
                    {alunosFiltrados.map(aluno => (
                        <TableItemAluno
                            matricula={aluno.matricula}
                            nome={aluno.nome}
                            turma={aluno.turma}
                            status={aluno.status}
                            onClick={() => navigate(`/diretor/alunos/${aluno.matricula}`)}
                        />
                    ))}
                </tbody>
            </Table>
            </div>

        </FullContainer>
    )
}