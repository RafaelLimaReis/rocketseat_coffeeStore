import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface InterfaceCoffee {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
    quantity: number
}

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
        }
        case ActionTypes.INCREMENT_ITEM: {
            return produce(state, (draft) => {
                const product = draft.cart.find((item) => item.id === action.payload.id)

                if (product?.id) {
                    product.quantity += 1
                }
            })
        }
        case ActionTypes.DECREMENT_ITEM: {
            return produce(state, (draft) => {
                const product = draft.cart.find((item) => item.id === action.payload.id)

                if (product?.id && product.quantity > 1) {
                    product.quantity -= 1
                }
            })
        }
        case ActionTypes.DELETE_ITEM: {
            return produce(state, (draft) => {
                const productIndex = draft.cart.findIndex((item) => item.id === action.payload.id)

                if (productIndex < 0) return

                draft.cart.splice(productIndex, 1)
            })
        }
        default:
            return state
    }
}
