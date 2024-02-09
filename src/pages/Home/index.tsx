import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { BenefitsContainer, InfoContainer, SectionContainer } from './styles'

import coffeeImg from '../../assets/images/coffee.svg'
import { ListItems } from './ListItems'

export function Home() {
    return (
        <>
            <SectionContainer>
                <InfoContainer>
                    <div>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <small>
                            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                        </small>
                        <BenefitsContainer>
                            <div>
                                <ShoppingCart size={16} weight="fill" />
                                <span>Compra simples e segura</span>
                            </div>
                            <div>
                                <Package size={16} weight="fill" />
                                <span>Embalagem mantém o café intacto</span>
                            </div>
                            <div>
                                <Timer size={16} weight="fill" />
                                <span>Entrega rápida e rastreada</span>
                            </div>
                            <div>
                                <Coffee size={16} weight="fill" />
                                <span>O café chega fresquinho até você</span>
                            </div>
                        </BenefitsContainer>
                    </div>
                    <img
                        src={coffeeImg}
                        alt="Café do coffee delivery com varios grãos de café em volta"
                    />
                </InfoContainer>
            </SectionContainer>
            <ListItems />
        </>
    )
}
