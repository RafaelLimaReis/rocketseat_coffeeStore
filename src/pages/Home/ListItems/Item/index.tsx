import { ShoppingCart } from 'phosphor-react'
import { InputQuantity } from '../../../../components/Form/InputQuantity'
import { FooterContainer, ItemContainer, Tags } from './styles'

export interface InterfaceCoffee {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
}

interface InterfaceItemProps {
    coffee: InterfaceCoffee
}

export function Item({ coffee }: InterfaceItemProps) {
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
                    <InputQuantity />
                    <button>
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                </div>
            </FooterContainer>
        </ItemContainer>
    )
}
