import { Check, ShoppingCart } from 'phosphor-react'
import { InputQuantity } from '../../../../components/Form/InputQuantity'
import { FooterContainer, ItemContainer, Tags } from './styles'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

interface InterfaceCoffee {
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
    const [isAddToCart, setIsAddToCart] = useState(false)

    function handleAddItemCart() {
        addNewItemContext({ ...coffee, quantity })
        setQuantity(1)
        setIsAddToCart(true)
    }

    function incrementQuantity() {
        setQuantity((state) => state + 1)
    }

    function decrementQuantity() {
        if (quantity === 1) return

        setQuantity((state) => state - 1)
    }

    useEffect(() => {
        let timeout: number

        if (isAddToCart) {
            timeout = setTimeout(() => {
                setIsAddToCart(false)
            }, 1000)
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [isAddToCart])

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
                    <button disabled={isAddToCart} onClick={handleAddItemCart}>
                        {isAddToCart ? (
                            <Check size={22} weight="fill" />
                        ) : (
                            <ShoppingCart size={22} weight="fill" />
                        )}
                    </button>
                </div>
            </FooterContainer>
        </ItemContainer>
    )
}
