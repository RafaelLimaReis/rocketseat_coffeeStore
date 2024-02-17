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

    @media (max-width: 865px) {
        flex-direction: column-reverse;
    }
`

export const AddressContainer = styled.div`
    flex: 1;
`

export const AddressForm = styled.form`
    display: grid;
    grid-template-areas:
        'cep . .'
        'street street street'
        'number fullAddress fullAddress'
        'neighborhood city state';
    grid-template-columns: 200px 1fr 60px;
    grid-gap: 16px 12px;

    @media (max-width: 990px) {
        grid-template-areas:
            'cep . .'
            'street street street'
            'number . .'
            'fullAddress fullAddress fullAddress'
            'neighborhood neighborhood neighborhood'
            'city state state';
    }

    @media (max-width: 865px) {
        grid-template-columns: 1fr;
        grid-template-areas:
            'cep'
            'street'
            'number'
            'fullAddress'
            'neighborhood'
            'city'
            'state';
    }
`

export const CardContainer = styled.div`
    margin-top: 0.9375rem;
    padding: 2.5rem;
    background: ${(props) => props.theme.colors['base-card']};
    border-radius: 6px;

    > div {
        display: flex;
        gap: 0.5rem;

        @media (max-width: 1122px) {
            flex-direction: column;
        }

        > svg {
            color: ${(props) => props.theme.colors['yellow-dark']};
        }

        h3 {
            ${mixins.fonts.textM};
            color: ${(props) => props.theme.colors['base-subtitle']};

            margin-bottom: 2rem;

            small {
                display: block;
                ${mixins.fonts.textS};
                color: ${(props) => props.theme.colors['base-text']};
            }
        }
    }
    &:last-child {
        div > svg {
            color: ${(props) => props.theme.colors.purple};
        }
    }

    label[role='alert'] {
        ${mixins.fonts.textXS};
        font-weight: normal;
        color: red;

        display: block;
        margin-top: 0.25rem;
    }
`

export const ProductsContainer = styled.div`
    max-width: 28rem;

    > div {
        margin-top: 0.9375rem;
        padding: 2.5rem;
        border-radius: 6px 44px 6px 44px;
        background-color: ${(props) => props.theme.colors['base-card']};
    }

    button[type='submit'] {
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

    @media (max-width: 768px) {
        > div {
            padding: 1.5rem;
        }
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

    @media (max-width: 465px) {
        img {
            display: none;
        }
    }

    @media (max-width: 768px) {
        gap: 1rem;
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
