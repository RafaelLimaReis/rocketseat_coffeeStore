import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const Container = styled.label`
    ${mixins.fonts.buttonM};
    transition: all 0.2s;
    text-transform: uppercase;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    background-color: ${({ theme }) => theme.colors['base-button']};
    border: 1px solid transparent;

    padding: 1rem;
    border-radius: 6px;

    &:hover {
        background-color: ${({ theme }) => theme.colors['base-hover']};
    }

    &[data-state='true'] {
        background-color: ${({ theme }) => theme.colors['purple-light']};
        border: 1px solid ${({ theme }) => theme.colors.purple};
    }

    svg {
        color: ${({ theme }) => theme.colors.purple};
    }

    input {
        display: none;
    }
`
