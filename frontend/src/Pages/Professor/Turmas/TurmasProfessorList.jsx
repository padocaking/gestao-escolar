import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TableItemTurma from '../../../Components/TableItemTurma';
import { FullContainer, Table, Headers, Title, FilterContainer, Filter } from '../../Diretor/Diretor.style';
import { useEffect, useState } from 'react';
import { FaFilter } from "react-icons/fa";
import CheckboxFilter from '../../../Components/CheckboxFilter';
import TableItemTurmaProf from '../../../Components/TableItemTurmaProf';

export default function TurmasProfessorList () {

    const navigate = useNavigate()

    const [turmas, setTurmas] = useState([
        {
            id: 1,
            ano: 2025,
            classe: "1º",
            turma: "a",
            periodo: "manhã",
            professores_id: [],
            alunos_id: [],
            status: "aberto"
        },
        {
            id: 2,
            ano: 2025,
            classe: "1º",
            turma: "b",
            periodo: "manhã",
            professores_id: [],
            alunos_id: [],
            status: "aberto"
        },
        {
            id: 3,
            ano: 2025,
            classe: "2º",
            turma: "a",
            periodo: "manhã",
            professores_id: [],
            alunos_id: [],
            status: "aberto"
        },
    ])
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [filters, setFilters] = useState({
        ano: [],
        classe: [],
        escolaridade: [],
        status: []
    });
    const [openFilter, setOpenFilter] = useState(false)

    const sortBy = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        const sorted = [...turmas].sort((a, b) => {
            const aVal = a[key]?.toString().toLowerCase();
            const bVal = b[key]?.toString().toLowerCase();

            if (aVal < bVal) return direction === 'asc' ? -1 : 1;
            if (aVal > bVal) return direction === 'asc' ? 1 : -1;
            return 0;
        });

        setSortConfig({ key, direction });
        setTurmas(sorted);
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

    const turmasFiltradas = turmas.filter(turma => {
        const matchAno = filters.ano.length === 0 || filters.ano.includes(String(turma.ano));
        const matchClasse = filters.classe.length === 0 || filters.classe.includes(String(turma.classe));
        const matchStatus = filters.status.length === 0 || filters.status.includes(String(turma.status));
        return matchAno && matchClasse && matchStatus;
    })

    const renderHeader = (label, key) => (
        <Headers onClick={() => sortBy(key)} style={{ cursor: 'pointer' }}>
            {label}
            <div style={{position: 'absolute', top: '15px', left: '15px'}}>{sortConfig.key === key ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}</div>
        </Headers>
    )

    return (
        <FullContainer>

            <Title>Controle de turmas</Title>

            <FilterContainer>
                <div className='filterItem' onClick={() => setOpenFilter(!openFilter)} >
                    <FaFilter/>
                </div>
                <h3>TURMAS</h3>
                <Filter opened={openFilter}>
                    <div className='filterHeader'>
                        <CheckboxFilter
                            label="Classe"
                            options={['1º', '2º', '3º', '4º', '5º', '6º', '7º', '8º', '9º', '1º EM', '2º EM', '3º EM']}
                            selected={filters.classe}
                            onChange={(value) => handleCheckboxChange("classe", value)}
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
                        {renderHeader("Ano", "ano")}
                        {renderHeader("Classe", "classe")}
                        {renderHeader("Turma", "turma")}
                        {renderHeader("Período", "periodo")}
                    </tr>
                </thead>
                    <tbody>
                        {turmasFiltradas.map(turma => (
                            <TableItemTurmaProf
                                ano={turma.ano}
                                classe={turma.classe}
                                turma={turma.turma}
                                periodo={turma.periodo}
                                onClick={() => navigate(`/turmas/${turma.id}`)}
                            />
                        ))}
                    </tbody>
            </Table>
            </div>

        </FullContainer>
    )
}