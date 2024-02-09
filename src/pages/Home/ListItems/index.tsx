import { Item } from './Item'
import { List, ListContainer } from './styles'

import { coffees } from '../../../../data.json'

export function ListItems() {
    return (
        <ListContainer>
            <h1>Nossos cafés</h1>
            <List>
                {coffees.map((coffee) => (
                    <Item coffee={coffee} key={coffee.id} />
                ))}
            </List>
        </ListContainer>
    )
}
