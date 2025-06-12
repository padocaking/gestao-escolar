import styled from 'styled-components'
import Button from '../Components/Button'
import Input from '../Components/Input'
import RightBG from '../Images/right-bg.png'
import LeftBG from '../Images/left-bg.png'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Service/AuthContext'

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background: var(--background);
    position: relative;
    overflow: hidden;
`

const Background = styled.img`
    position: absolute;
    height: 100%;
    z-index: 0;
    right: 0;

    &.right {
        right: 0;
    }

    &.left {
        left: 0;
    }

    @media (max-width: 700px) {
        display: none;
    }
`

const LoginContainer = styled.main`
    background-color: var(--white);
    padding: 3rem;
    margin: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 700px;
    z-index: 1;

    @media (max-width: 700px) {
        width: 100%;
        height: 100%;
        justify-content: center;
        margin: 0px;
        padding: 1.65rem;
        gap: 3.5rem;
    }
`

const Logo = styled.picture`
    letter-spacing: -3px;
    font-size: 72px;
    font-weight: 800;
    padding-bottom: 1rem;
    width: 70%;
    border-bottom: 1px solid #D9DBE9;

    img {
        padding: 1rem;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
`

export default function Login () {
    const navigate = useNavigate()
    const loginSchema = yup.object().shape({
        matricula: yup.string().required("Matrícula é obrigatório"),
        senha: yup.string().required("Senha é obrigatório")
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(loginSchema)
    })

    const { login, setNavUser } = useAuth()

    const onSubmit = async (data) => {
        if (data.matricula === '2025051234' && data.senha === '08032003') {
            login('aluno')
            setNavUser('aluno')
            navigate('/')
        } else if ((data.matricula === '2025071234' && data.senha === '08032003')) {
            login('professor')
            setNavUser('professor')
            navigate('/')
        }  else if ((data.matricula === '2025091234' && data.senha === '08032003')) {
            login('diretor')
            setNavUser('diretor')
            navigate('/')
        } else {
            alert("Matrícula ou senha inválidos")
        }
      };
      

    return (
        <Container className='center'>

            <Background className='left' src={LeftBG} alt='background' />
            <Background className='right' src={RightBG} alt='background' />

            <LoginContainer>

                <Logo className='center'>
                    <img src='' alt='LOGO' />
                </Logo>

                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Input
                        name="Matrícula"
                        type="text"
                        register={{...register("matricula")}}
                        error={errors.matricula?.message}
                    />

                    <Input
                        name="Senha"
                        type="password"
                        register={{...register("senha")}}
                        error={errors.senha?.message}
                    />

                    <br />

                    <Button>Entrar</Button>

                </Form>

            </LoginContainer>

        </Container>
    )
}

function app () {
    return (
        <div>
            <form>
                <h1>LOGO</h1>
                <div>
                    <label>MATRÍCULA</label>
                    <input placeholder='matricula' />
                </div>
            </form>
        </div>
    )
}