import { Minus, Plus } from 'phosphor-react'
import { ContainerButton } from './styles'

interface InterfaceInputQuantityProps {
    onIncrementQuantity: () => void
    onDecrementQuantity: () => void
    quantity: number
}

export function InputQuantity({
    onDecrementQuantity,
    onIncrementQuantity,
    quantity,
}: InterfaceInputQuantityProps) {
    return (
        <ContainerButton>
            <button onClick={onDecrementQuantity}>
                <Minus size={14} />
            </button>
            <span>{quantity}</span>
            <button onClick={onIncrementQuantity}>
                <Plus size={14} />
            </button>
        </ContainerButton>
    )
}
