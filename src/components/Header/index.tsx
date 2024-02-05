import { NavLink } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'

import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <NavLink to="/" title="Home">
                <img src={logo} alt="" />
            </NavLink>
            <nav>
                {/* //TODO pensar em algo para exibir endereco */}
                <NavLink to="/carrinho" title="Carrinho">
                    <ShoppingCart size={22} weight="fill" />
                    {/* <span>1</span> */}
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}
