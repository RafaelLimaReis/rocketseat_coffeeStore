import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
    ${mixins.limitContainer};
    margin-top: 5rem;

    h1 {
        ${mixins.fonts.titleL};
        color: ${({ theme }) => theme.colors['yellow-dark']};
    }

    h2 {
        ${mixins.fonts.textL};
        color: ${({ theme }) => theme.colors['base-subtitle']};

        margin-top: 0.25rem;
    }
`

export const ContainerDelivery = styled.div`
    display: flex;
    gap: 6.375rem;

    margin-top: 2.5rem;
`

export const ContainerDetail = styled.div`
    display: flex;
    border: 1px solid;
    border-radius: 6px 36px;
    width: 100%;

    border-color: transparent;
    background-origin: border-box;
    background-image: ${({ theme }) =>
        `linear-gradient(to bottom right, ${theme.colors.yellow}, ${theme.colors.purple})`};

    > div {
        padding: 2.5rem;
        border-radius: 6px 36px;
        background: white;
        display: flex;
        flex-direction: column;
        flex: 1;

        p {
            display: flex;
            align-items: center;
            gap: 1.33rem;
            margin-bottom: 2rem;

            svg {
                color: ${({ theme }) => theme.colors.white};
                padding: 0.5rem;
                border-radius: 100%;
                width: 2rem;
                height: 2rem;
            }

            &:nth-child(1) svg {
                background-color: ${({ theme }) => theme.colors.purple};
            }

            &:nth-child(2) svg {
                background-color: ${({ theme }) => theme.colors.yellow};
            }

            &:nth-child(3) svg {
                background-color: ${({ theme }) => theme.colors['yellow-dark']};
            }
        }
    }
`
