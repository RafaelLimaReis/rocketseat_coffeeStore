import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const ContainerButton = styled.div`
    background-color: ${(props) => props.theme.colors['base-button']};
    display: flex;
    align-items: center;
    gap: 0.25rem;
    text-align: center;
    border-radius: 6px;

    padding: 0.5rem;

    button {
        background-color: transparent;
        height: 14px;
    }

    span {
        ${mixins.fonts.textM}
        color: ${(props) => props.theme.colors['base-title']};
        height: 1.0625rem;
    }
`
