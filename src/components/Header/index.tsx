import { NavLink } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'

import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'

export function Header() {
    const { cart } = useContext(CartContext)

    return (
        <HeaderContainer>
            <NavLink to="/" title="Home">
                <img src={logo} alt="" />
            </NavLink>
            <nav>
                {/* //TODO pensar em algo para exibir endereco */}
                <NavLink to={cart.length > 0 ? '/carrinho' : '/'} title="Carrinho">
                    <ShoppingCart size={22} weight="fill" />
                    {cart.length > 0 && (
                        <span>
                            {cart.reduce((acumulator, item) => {
                                return acumulator + (item.quantity || 0)
                            }, 0)}
                        </span>
                    )}
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}
