import { ShoppingCart } from 'phosphor-react'
import { InputQuantity } from '../../../../components/Form/InputQuantity'
import { FooterContainer, ItemContainer, Tags } from './styles'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

export interface InterfaceCoffee {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
    quantity?: number
}

interface InterfaceItemProps {
    coffee: InterfaceCoffee
}

export function Item({ coffee }: InterfaceItemProps) {
    const { addNewItemContext } = useContext(CartContext)
    const [quantity, setQuantity] = useState(1)

    function handleAddItemCart() {
        addNewItemContext({ ...coffee, quantity })
    }

    function incrementQuantity() {
        setQuantity((state) => state + 1)
    }

    function decrementQuantity() {
        setQuantity((state) => state - 1)
    }

    return (
        <ItemContainer>
            <img src={coffee.image} alt="" />
            <Tags>
                {coffee.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                ))}
            </Tags>
            <h2>{coffee.title}</h2>
            <p>{coffee.description}</p>

            <FooterContainer>
                <span>
                    <small> R$ </small>
                    {coffee.price.toLocaleString('pt-BR', {
                        style: 'decimal',
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}
                </span>
                <div>
                    <InputQuantity
                        onIncrementQuantity={incrementQuantity}
                        onDecrementQuantity={decrementQuantity}
                        quantity={quantity}
                    />
                    <button onClick={handleAddItemCart}>
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                </div>
            </FooterContainer>
        </ItemContainer>
    )
}
