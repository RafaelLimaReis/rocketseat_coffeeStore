import { useContext } from 'react'
import {
    AddressContainer,
    ButtonRemove,
    CartConteiner,
    ContainerResume,
    Product,
    ProductsContainer,
} from './styles'
import { CartContext } from '../../contexts/CartContext'
import { InputQuantity } from '../../components/Form/InputQuantity'
import { Trash } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Cart() {
    const { cart, decrementItemContext, incrementItemContext, deleteItemContext } =
        useContext(CartContext)

    const totalPriceProducts = cart.reduce((acc, item) => (acc = item.price * item.quantity), 0)

    function decrementQuantity(id: string) {
        decrementItemContext(id)
    }

    function incrementQuantity(id: string) {
        incrementItemContext(id)
    }

    function handlerRemoveItem(id: string) {
        deleteItemContext(id)
    }

    return (
        <CartConteiner>
            <AddressContainer>
                <h2>Complete seu pedido</h2>
            </AddressContainer>
            <ProductsContainer>
                <h2>Cafés selecionados</h2>
                <div>
                    {cart.map((product) => (
                        <Product key={product.id}>
                            <img src={product.image} alt="" />
                            <div>
                                {product.title}
                                <div>
                                    <InputQuantity
                                        onDecrementQuantity={() => decrementQuantity(product.id)}
                                        onIncrementQuantity={() => incrementQuantity(product.id)}
                                        quantity={product.quantity || 0}
                                    />
                                    <ButtonRemove onClick={() => handlerRemoveItem(product.id)}>
                                        <Trash size={16} />
                                        REMOVER
                                    </ButtonRemove>
                                </div>
                            </div>
                            <span>
                                R${' '}
                                {product.price.toLocaleString('pt-BR', {
                                    style: 'decimal',
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                            </span>
                        </Product>
                    ))}
                    <ContainerResume>
                        <div>
                            <span>Total de Itens</span>
                            <span>
                                R${' '}
                                {totalPriceProducts.toLocaleString('pt-BR', {
                                    style: 'decimal',
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                            </span>
                        </div>
                        <div>
                            <span>Entrega</span>
                            <span>R$ 3,50</span>
                        </div>
                        <div>
                            <span>Total</span>
                            <span>
                                R${' '}
                                {(totalPriceProducts + 3.5).toLocaleString('pt-BR', {
                                    style: 'decimal',
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                            </span>
                        </div>
                    </ContainerResume>
                    <NavLink to="/sucesso" title="Finalizar pedido">
                        CONFIRMAR PEDIDO
                    </NavLink>
                </div>
            </ProductsContainer>
        </CartConteiner>
    )
}
