import styled from 'styled-components';

const SelectContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
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
        border-radius: 3px;
        padding: 15px;
        box-shadow: 0 1px 2px 0px var(--second),
                    0 0 2px 0px var(--second);
        min-width: 200px;
    }

    &:after {
        content: '⏷';
        position: absolute;
        right: 12px;
        top: 51%;
        pointer-events: none;
        color: #555;
    }
`

export default function Select ({ name, register, error, children }) {

    return (
        <SelectContainer>
            <label>{name}</label>
            <select name={name} id={name} {...register}>
                {children}
            </select>
            <span>{error}</span>
        </SelectContainer>
    )
}