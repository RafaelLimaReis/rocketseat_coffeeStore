import { Minus, Plus } from 'phosphor-react'
import { ContainerButton } from './styles'

export function InputQuantity() {
    return (
        <ContainerButton>
            <button>
                <Minus size={14} />
            </button>
            <span>0</span>
            <button>
                <Plus size={14} />
            </button>
        </ContainerButton>
    )
}
