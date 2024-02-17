import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

interface InterfaceBoxContainerProps {
    gridcomponent: string
}

export const BoxContainer = styled.label<InterfaceBoxContainerProps>`
    grid-area: ${({ gridcomponent }) => gridcomponent};

    > div {
        display: flex;
        align-items: center;

        background: ${({ theme }) => theme.colors['base-input']};
        border-radius: 6px;
        border: 1px solid ${({ theme }) => theme.colors['base-button']};

        &[data-state='focused'] {
            border-color: ${({ theme }) => theme.colors['yellow-dark']};
        }
        &[data-state='notFocused'] {
            border-color: ${({ theme }) => theme.colors['base-button']};
        }

        input {
            ${mixins.fonts.textS};

            color: ${({ theme }) => theme.colors['base-label']};
            padding: 0.75rem;
            width: 100%;
            background: transparent;
            border: none;
            outline: none;
        }

        span {
            ${mixins.fonts.textS};

            color: ${({ theme }) => theme.colors['base-label']};
            font-style: italic;

            padding-right: 0.75rem;
        }
    }
`
