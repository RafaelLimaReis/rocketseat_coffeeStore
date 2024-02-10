import { produce } from 'immer'
import { InterfaceCoffee } from '../../pages/Home/ListItems/Item'
import { ActionTypes } from './actions'

interface InterfaceCartState {
    cart: InterfaceCoffee[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CartReducer(state: InterfaceCartState, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_ITEM: {
            const findItem = state.cart.findIndex((item) => {
                return item.id === action.payload.newItem.id
            })

            if (findItem < 0) {
                return produce(state, (draft) => {
                    draft.cart.push({ ...action.payload.newItem })
                })
            } else {
                return produce(state, (draft) => {
                    draft.cart[findItem].quantity += action.payload.newItem.quantity
                })
            }
            return state
        }
    }
    return state
}
