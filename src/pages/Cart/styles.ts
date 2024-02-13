import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CartConteiner = styled.section`
    ${mixins.limitContainer}
    display: flex;

    margin-top: 2.5rem;
    gap: 2rem;

    h2 {
        ${mixins.fonts.titleXS};
        color: ${(props) => props.theme.colors['base-subtitle']};
    }
`

export const AddressContainer = styled.div`
    flex: 1;
`

export const ProductsContainer = styled.div`
    max-width: 28rem;

    > div {
        margin-top: 0.9375rem;
        padding: 2.5rem;
        border-radius: 6px 44px 6px 44px;
        background-color: ${(props) => props.theme.colors['base-card']};
    }

    a {
        display: block;
        width: 100%;
        background-color: ${(props) => props.theme.colors.yellow};
        border-radius: 6px;
        margin-top: 1.5rem;
        padding: 0.75rem;
        text-align: center;
        text-decoration: none;

        color: ${(props) => props.theme.colors.white};
        ${mixins.fonts.buttonG};
    }
`

export const Product = styled.div`
    display: flex;
    gap: 1.25rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;

    border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};

    img {
        max-width: 4rem;
    }

    div {
        ${mixins.fonts.textM};
        color: ${(props) => props.theme.colors['base-subtitle']};
        flex: 1;
    }

    div > div {
        display: flex;
        gap: 0.5rem;
    }

    > span {
        margin-left: 1.875rem;
        ${mixins.fonts.textM};
        font-weight: bold;
    }
`

export const ButtonRemove = styled.button`
    ${mixins.fonts.buttonM};
    color: ${(props) => props.theme.colors['base-text']};
    background-color: ${(props) => props.theme.colors['base-button']};

    display: flex;
    gap: 0.25rem;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.40652rem;
    border-radius: 6px;

    svg {
        color: ${(props) => props.theme.colors.purple};
    }
`

export const ContainerResume = styled.div`
    div {
        display: flex;
        justify-content: space-between;

        margin-bottom: 0.75rem;

        span {
            color: ${(props) => props.theme.colors['base-text']};
        }

        span:first-child {
            ${mixins.fonts.textS};
        }

        span:last-child {
            ${mixins.fonts.textM};
        }

        &:last-child {
            span {
                color: ${(props) => props.theme.colors['base-subtitle']};
            }

            span {
                ${mixins.fonts.textL};
                font-weight: bold;
            }
        }
    }
`
