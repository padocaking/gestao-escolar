import styled from 'styled-components';

const InputContainer = styled.div`
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

    input {
        font-size: 15px;
        color: var(--main-three);
        border: none;
        border-radius: 3px;
        padding: 15px;
        box-shadow: 0 1px 2px 0px var(--second),
                    0 0 2px 0px var(--second);
    }
`

export default function Input ({ name, type, value, register, error }) {
    return (
        <InputContainer>
            <label>{name}</label>
            <input {...register} type={type} placeholder={name} value={value}/>
            <span>{error}</span>
        </InputContainer>
    )
}