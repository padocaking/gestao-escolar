import styled from 'styled-components'
import Button from '../Components/Button'
import Input from '../Components/Input'
import RightBG from '../Images/right-bg.png'
import LeftBG from '../Images/left-bg.png'

const Container = styled.div`
    height: 100vh;
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
`

const LoginContainer = styled.main`
    background-color: var(--white);
    padding: 3rem;
    margin: 20px;
    border-radius: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 750px;
    z-index: 1;
`

const Logo = styled.picture`
    font-size: 72px;
    font-weight: 800;
    padding-bottom: 1rem;
    width: 80%;
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
    return (
        <Container className='center'>

            <Background className='left' src={LeftBG} alt='background' />
            <Background className='right' src={RightBG} alt='background' />

            <LoginContainer>

                <Logo className='center'>
                    <img src='' alt='LOGO' />
                </Logo>

                <Form>

                    <Input
                        name="matrícula"
                        type="text"
                    />

                    <Input
                        name="senha"
                        type="password"
                    />

                    <br />

                    <Button>Entrar</Button>

                </Form>

            </LoginContainer>

        </Container>
    )
}