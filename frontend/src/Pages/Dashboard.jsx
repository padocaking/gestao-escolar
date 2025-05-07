import styled from 'styled-components'

const Container = styled.div`
    background: var(--background);
    min-height: var(--main-height);
`

export default function Dashboard () {
    return (
        <Container>
            Dashboard
        </Container>
    )
}