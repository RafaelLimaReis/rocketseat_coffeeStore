import { Container, ContainerDelivery, ContainerDetail } from './styles'

import carImg from '../../assets/images/delivery.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Success() {
    const { orders } = useContext(CartContext)
    const paymentMethods = {
        credit: 'Cartão de crédito',
        debit: 'Cartão de débito',
        cash: 'Dinheiro',
        undefined: '',
    }

    return (
        <Container>
            <>
                <h1>Uhu! Pedido confirmado</h1>
                <h2>Agora é só aguardar que logo o café chegará até você</h2>
            </>
            <ContainerDelivery>
                <ContainerDetail>
                    <div>
                        <p>
                            <MapPin weight="fill" />
                            <span>
                                Entrega em{' '}
                                <b>
                                    {orders?.street}, {orders?.number}
                                </b>
                                <br />
                                {orders?.neighborhood} - {orders?.city}, {orders?.state}
                            </span>
                        </p>
                        <p>
                            <Timer weight="fill" />
                            <span>
                                Previsao de entrega <br />
                                <b>20 min - 30 min</b>
                            </span>
                        </p>
                        {orders?.paymentMethod !== undefined ? (
                            <p>
                                <CurrencyDollar weight="fill" />
                                <span>
                                    Pagamento na entrega <br />
                                    <b>{paymentMethods[orders.paymentMethod]}</b>
                                </span>
                            </p>
                        ) : null}
                    </div>
                </ContainerDetail>
                <img src={carImg} alt="" />
            </ContainerDelivery>
        </Container>
    )
}
