import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const ItemContainer = styled.div`
    min-width: 16rem;
    min-height: 19.375rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 6px 36px 6px 36px;
    padding: 0 1.25rem 1.25rem 1.25rem;

    background-color: ${(props) => props.theme.colors['base-card']};

    img {
        margin-top: -1.25rem;
        margin-bottom: 0.75rem;
    }

    h2 {
        ${mixins.fonts.titleS};
        color: ${(props) => props.theme.colors['base-subtitle']};

        margin-bottom: 0.5rem;
    }

    p {
        ${mixins.fonts.textS};
        text-align: center;
        color: ${(props) => props.theme.colors['base-label']};

        margin-bottom: 2.0625rem;
    }
`

export const Tags = styled.div`
    display: flex;
    gap: 0.25rem;

    margin-bottom: 1rem;

    span {
        ${mixins.fonts.tag}
        color: ${(props) => props.theme.colors['yellow-dark']};
        background-color: ${(props) => props.theme.colors['yellow-light']};
        border-radius: 100px;
        padding: 0.25rem 0.5rem;
    }
`

export const FooterContainer = styled.div`
    display: flex;
    gap: 1.4375rem;
    align-items: center;

    > span {
        ${mixins.fonts.titleM};
        color: ${(props) => props.theme.colors['base-text']};

        small {
            ${mixins.fonts.textS};
        }
    }

    > div {
        display: flex;
        gap: 0.5rem;

        > button {
            display: flex;
            padding: 0.5rem;
            background-color: ${(props) => props.theme.colors['purple-dark']};
            border-radius: 6px;

            transition: background-color 0.3s;

            svg {
                fill: ${(props) => props.theme.colors.white};
            }

            &:hover {
                background-color: ${(props) => props.theme.colors.purple};
            }
        }
    }
`
