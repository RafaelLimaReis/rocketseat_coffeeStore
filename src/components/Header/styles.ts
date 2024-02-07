import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HeaderContainer = styled.header`
    ${mixins.limitContainer}

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 0;

    nav {
        a {
            display: flex;
            align-items: center;
            justify-content: center;

            position: relative;

            width: 2.375rem;
            height: 2.375rem;
            background-color: ${(props) => props.theme.colors['yellow-light']};
            color: ${(props) => props.theme.colors['yellow-dark']};
            border-radius: 8px;

            span {
                ${mixins.fonts.textS};
                font-weight: bold;
                background-color: ${(props) => props.theme.colors['yellow-dark']};
                color: ${(props) => props.theme.colors.white};

                display: flex;
                align-items: center;
                justify-content: center;

                position: absolute;
                top: -9px;
                right: -9px;
                min-width: 1.25rem;
                height: 1.25rem;
                border-radius: 50%;
                padding: 0.125rem;
            }
        }
    }

    @media (max-width: 1160px) {
        padding-left: 1rem;
        padding-right: 1rem;
    }
`
