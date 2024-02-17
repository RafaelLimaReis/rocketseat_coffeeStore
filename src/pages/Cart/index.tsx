import { useContext } from 'react'
import { z } from 'zod'
import {
    AddressContainer,
    AddressForm,
    ButtonRemove,
    CardContainer,
    CartConteiner,
    ContainerResume,
    Product,
    ProductsContainer,
} from './styles'
import { CartContext } from '../../contexts/CartContext'
import { InputQuantity } from '../../components/Form/InputQuantity'
import { Bank, CreditCard, CurrencyDollar, MapPin, Money, Trash } from 'phosphor-react'
import { InputText } from '../../components/Form/InputText'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputRadio } from '../../components/Form/InputRadio'
import { useNavigate } from 'react-router-dom'

type TypeFormInputs = {
    cep: number
    street: string
    number: string
    fullAddress: string
    neighborhood: string
    city: string
    state: string
    paymentMethod: 'credit' | 'debit' | 'cash'
}

const newOrder = z.object({
    cep: z.number({ invalid_type_error: 'Informe o CEP' }),
    street: z.string().min(1, 'Informe a rua'),
    number: z.string().min(1, 'Informe o número'),
    fullAddress: z.string(),
    neighborhood: z.string().min(1, 'Informe o bairro'),
    city: z.string().min(1, 'Informe a cidade'),
    state: z.string().min(1, 'Informe a UF'),
    paymentMethod: z.enum(['credit', 'debit', 'cash'], {
        invalid_type_error: 'Informe um método de pagamento',
    }),
})

export type OrderInfo = z.infer<typeof newOrder>

export function Cart() {
    const { cart, decrementItemContext, incrementItemContext, deleteItemContext, checkoutContext } =
        useContext(CartContext)

    const totalPriceProducts = cart.reduce((acc, item) => (acc = item.price * item.quantity), 0)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<TypeFormInputs>({
        resolver: zodResolver(newOrder),
    })

    function decrementQuantity(id: string) {
        decrementItemContext(id)
    }

    function incrementQuantity(id: string) {
        incrementItemContext(id)
    }

    function handlerRemoveItem(id: string) {
        deleteItemContext(id)
    }

    const selectedPaymentMethod = watch('paymentMethod')
    const navigate = useNavigate()

    const handleOrderCheckout: SubmitHandler<TypeFormInputs> = (data) => {
        if (cart.length === 0) {
            return alert('É preciso ter pelo menos um item no carrinho')
        }

        checkoutContext(data)
        return navigate('/sucesso')
    }

    return (
        <CartConteiner>
            <AddressContainer>
                <h2>Complete seu pedido</h2>
                <CardContainer>
                    <div>
                        <MapPin size={22} />
                        <h3>
                            Endereço de Entrega
                            <small>Informe o endereço onde deseja receber seu pedido</small>
                        </h3>
                    </div>
                    <AddressForm id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
                        <InputText
                            error={errors.cep}
                            placeholder="CEP"
                            {...register('cep', { valueAsNumber: true })}
                        />
                        <InputText
                            error={errors.street}
                            placeholder="Rua"
                            {...register('street')}
                        />
                        <InputText
                            error={errors.number}
                            placeholder="Número"
                            {...register('number')}
                        />
                        <InputText
                            error={errors.fullAddress}
                            placeholder="Complemento"
                            optional
                            {...register('fullAddress')}
                        />
                        <InputText
                            error={errors.neighborhood}
                            placeholder="Bairro"
                            {...register('neighborhood')}
                        />
                        <InputText error={errors.city} placeholder="Cidade" {...register('city')} />
                        <InputText
                            maxLength={2}
                            error={errors.state}
                            placeholder="UF"
                            {...register('state')}
                        />
                    </AddressForm>
                </CardContainer>

                <CardContainer>
                    <div>
                        <CurrencyDollar size={22} />
                        <h3>
                            Pagamento
                            <small>
                                O pagamento é feito na entrega. Escolha a forma que deseja pagar
                            </small>
                        </h3>
                    </div>
                    <div>
                        <InputRadio
                            isSelected={selectedPaymentMethod === 'credit'}
                            {...register('paymentMethod')}
                            value="credit"
                        >
                            <CreditCard size={16} />
                            <span>Cartão de crédito</span>
                        </InputRadio>
                        <InputRadio
                            isSelected={selectedPaymentMethod === 'debit'}
                            {...register('paymentMethod')}
                            value="debit"
                        >
                            <Bank size={16} />
                            <span>Cartão de crédito</span>
                        </InputRadio>
                        <InputRadio
                            isSelected={selectedPaymentMethod === 'cash'}
                            {...register('paymentMethod')}
                            value="cash"
                        >
                            <Money size={16} />
                            <span>Cartão de crédito</span>
                        </InputRadio>
                    </div>
                    {errors.paymentMethod ? (
                        <label role="alert">{errors.paymentMethod.message}</label>
                    ) : null}
                </CardContainer>
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
                    <button type="submit" form="order">
                        CONFIRMAR PEDIDO
                    </button>
                </div>
            </ProductsContainer>
        </CartConteiner>
    )
}
