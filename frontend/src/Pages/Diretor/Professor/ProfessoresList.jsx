import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FullContainer, Table, Headers, Title, FilterContainer } from '../Diretor.style';
import { useEffect, useState } from 'react';
import TableItemProfessor from '../../../Components/TableItemProfessor';

export default function ProfessoresList () {

    const navigate = useNavigate()

    const [professores, setProfessores] = useState([])
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch('/data/professores.json')
            .then(res => res.json())
            .then(data => setProfessores(data))
    }, [])

    const sortBy = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        const sorted = [...professores].sort((a, b) => {
            const aVal = a[key]?.toString().toLowerCase();
            const bVal = b[key]?.toString().toLowerCase();

            if (aVal < bVal) return direction === 'asc' ? -1 : 1;
            if (aVal > bVal) return direction === 'asc' ? 1 : -1;
            return 0;
        });

        setSortConfig({ key, direction });
        setProfessores(sorted);
    }

    const renderHeader = (label, key) => (
        <Headers onClick={() => sortBy(key)} style={{ cursor: 'pointer' }}>
            {label}
            <div style={{position: 'absolute', top: '15px', left: '15px'}}>{sortConfig.key === key ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}</div>
        </Headers>
    )

    return (
        <FullContainer>

            <Title>Controle de professores</Title>

            <FilterContainer style={{flexDirection: 'row-reverse'}}>

                <input className='search' type="text" placeholder="🔍 Procure pela matrícula ou nome" onChange={(e) => setSearch(e.target.value)} />

                <div className="filterItem" onClick={() => navigate('/diretor/professores/novo-professor')}>
                    <span className='add'>+ NOVO PROFESSOR</span>
                </div>

            </FilterContainer>

            <div style={{width: '100%', height: 'auto', overflow: 'auto'}}>
            <Table>
                <thead>
                    <tr>
                        {renderHeader("ID", "id")}
                        {renderHeader("Nome", "nome")}
                        {renderHeader("Salario", "salario")}
                        <Headers>...</Headers>
                    </tr>
                </thead>
                <tbody>
                    {professores.map(professor => (
                        <TableItemProfessor
                            id={professor.id}
                            nome={professor.nome}
                            salario={professor.salario}
                        />
                    ))}
                </tbody>
            </Table>
            </div>

        </FullContainer>
    )
}