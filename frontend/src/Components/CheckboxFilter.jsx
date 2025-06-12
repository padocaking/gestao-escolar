import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;

    span {
        font-size: 18px;
        color: var(--main-one);
        margin-bottom: 5px;
        border-bottom: 1px solid lightgray;
    }
`

export default function CheckboxFilter({ label, options, selected, onChange }) {
    return (
        <Container>
            <span>{label}</span>
            {options.map((option) => (
                <div key={option} style={{display: 'flex', gap: '5px', cursor: 'pointer'}}>
                    <input
                        style={{cursor: 'pointer'}}
                        type="checkbox"
                        onChange={() => onChange(option)}
                        checked={selected.includes(option)}
                        id={`${label}-${option}`}
                    />
                    <label style={{cursor: 'pointer'}} htmlFor={`${label}-${option}`}>{option}</label>
                </div>
            ))}
        </Container>
    );
}