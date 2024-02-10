import { InterfaceCoffee } from '../../pages/Home/ListItems/Item'

export enum ActionTypes {
    ADD_NEW_ITEM = 'ADD_NEW_ITEM',
}

export function addNewItem(newItem: InterfaceCoffee) {
    return {
        type: ActionTypes.ADD_NEW_ITEM,
        payload: {
            newItem,
        },
    }
}
