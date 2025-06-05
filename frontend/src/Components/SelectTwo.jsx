import styled from 'styled-components';

const SelectContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
        font-size: 20px;
        font-weight: 600;
        color: var(--main-two);
        text-transform: uppercase;
    }

    select {
        position: relative;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        font-size: 15px;
        background-color: var(--white);
        color: var(--main-three);
        border: none;
        padding: 15px;
        box-shadow: 0 0 1px 0px var(--second),
                    0 0 1px 0px var(--second);
    }

    &:after {
        content: '⏷';
        position: absolute;
        right: 12px;
        top: 25%;
        pointer-events: none;
        color: #555;
    }
`

export default function SelectTwo ({ name, error, children, handleChange, value, notReq }) {
    return (
        <SelectContainer>
            <select value={value} name={name} id={name} onChange={handleChange} required={!notReq}>
                {children}
            </select>
            <span>{error}</span>
        </SelectContainer>
    )
}