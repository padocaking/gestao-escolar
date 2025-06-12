import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    text-align: center;

    div {

        &.back {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            left: 0;
            user-select: none;
            color: var(--black);
            font-weight: 600;
            font-size: 25px;
        }

        &.head-container {
            h1 {
                font-size: 50px;
            }

            span {
                font-size: 22px;
                font-weight: 600;
                
                &.periodo {
                    color: var(--main-one);
                }
            }
        }

        &.card-container {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
        }
    }
`