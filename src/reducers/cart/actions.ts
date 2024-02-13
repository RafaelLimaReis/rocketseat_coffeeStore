import { InterfaceCoffee } from './reducer'

export enum ActionTypes {
    ADD_NEW_ITEM = 'ADD_NEW_ITEM',
    DECREMENT_ITEM = 'DECREMENT_ITEM',
    INCREMENT_ITEM = 'INCREMENT_ITEM',
    DELETE_ITEM = 'DELETE_ITEM',
}

export function addNewItem(newItem: InterfaceCoffee) {
    return {
        type: ActionTypes.ADD_NEW_ITEM,
        payload: {
            newItem,
        },
    }
}

export function incrementItem(id: string) {
    return {
        type: ActionTypes.INCREMENT_ITEM,
        payload: {
            id,
        },
    }
}

export function decrementItem(id: string) {
    return {
        type: ActionTypes.DECREMENT_ITEM,
        payload: {
            id,
        },
    }
}

export function deleteItem(id: string) {
    return {
        type: ActionTypes.DELETE_ITEM,
        payload: { id },
    }
}
