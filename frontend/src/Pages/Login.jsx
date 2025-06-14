import styled from 'styled-components'
import Button from '../Components/Button'
import Input from '../Components/Input'
import RightBG from '../Images/right-bg.png'
import LeftBG from '../Images/left-bg.png'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom';
import Logofull from '../Images/logofull.png';

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

    const onSubmit = async (data) => {
        try {
          const response = await fetch("http://localhost:3000/api/usuarios/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
      
          // Converte a resposta para JSON
          const result = await response.json();
      
          if (!response.ok) {
            throw new Error(result.erro || "Erro desconhecido");
          }
      
          console.log("Resposta do servidor:", result);
          if (result.token != null) {
            localStorage.setItem("token", result.token);
            localStorage.setItem("nome", result.nome);
            localStorage.setItem("tipo", result.tipo);

            navigate("/");
          }
        } catch (error) {
          console.error("Erro ao fazer login:", error.message);
        }
      };
      

    return (
        <Container className='center'>

            <Background className='left' src={LeftBG} alt='background' />
            <Background className='right' src={RightBG} alt='background' />

            <LoginContainer>

                <Logo className='center'>
                    <img src={Logofull} alt='LOGO' />
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