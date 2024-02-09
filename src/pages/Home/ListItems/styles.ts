import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const ListContainer = styled.section`
    ${mixins.limitContainer}
    margin-top: 2rem;

    h1 {
        ${mixins.fonts.titleL}
        color: ${(props) => props.theme.colors['base-subtitle']};

        margin-bottom: 3.375rem;
    }

    @media (max-width: 1160px) {
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

export const List = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 2.5rem;
    grid-column-gap: 2rem;

    height: 20px;
    width: 100%;

    @media (max-width: 1210px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 870px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 580px) {
        grid-template-columns: 1fr;
    }
`
