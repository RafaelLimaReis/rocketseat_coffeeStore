import styled from 'styled-components'

import bgImage from '../../assets/images/coffee-bg.svg'
import { mixins } from '../../styles/mixins'

export const SectionContainer = styled.section`
    display: flex;
    height: 34rem;
    margin: 0 auto;

    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export const InfoContainer = styled.div`
    ${mixins.limitContainer}

    display: flex;
    gap: 3.5rem;
    align-items: center;
    justify-content: center;

    h1 {
        ${mixins.fonts.titleXL}
        margin-bottom: 1rem;
        color: ${(props) => props.theme.colors['base-title']};
    }

    small {
        ${mixins.fonts.textL};
        margin-bottom: 4.125rem;
        display: block;
        color: ${(props) => props.theme.colors['base-subtitle']};
    }

    @media (max-width: 1125px) {
        img {
            display: none;
        }
    }

    @media (max-width: 590px) {
        h1 {
            ${mixins.fonts.titleL}
        }

        small {
            ${mixins.fonts.textM};
        }
    }
`

export const BenefitsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-row-gap: 1.66rem;
    grid-column-gap: 2.5rem;

    div {
        ${mixins.fonts.textM};
        color: ${(props) => props.theme.colors['base-text']};
        display: flex;
        justify-content: start;
        gap: 0.75rem;
        align-items: center;

        &:nth-child(1) svg {
            background-color: ${(props) => props.theme.colors['yellow-dark']};
        }
        &:nth-child(2) svg {
            background-color: ${(props) => props.theme.colors['base-text']};
        }
        &:nth-child(3) svg {
            background-color: ${(props) => props.theme.colors.yellow};
        }
        &:nth-child(4) svg {
            background-color: ${(props) => props.theme.colors.purple};
        }
    }

    svg {
        color: ${(props) => props.theme.colors.white};
        width: 2rem;
        height: 2rem;
        padding: 0.5rem;
        border-radius: 50%;
    }

    @media (max-width: 590px) {
        grid-template-columns: 1fr;

        div {
            ${mixins.fonts.textS};
        }
    }
`
