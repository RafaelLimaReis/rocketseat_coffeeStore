import { produce } from 'immer'
import { ActionTypes } from './actions'
import { OrderInfo } from '../../pages/Cart'

export interface InterfaceCoffee {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
    quantity: number
}

export interface OrderCart extends OrderInfo {
    id: number
    items: InterfaceCoffee[]
}

interface InterfaceCartState {
    cart: InterfaceCoffee[]
    orders: OrderCart | null
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
        case ActionTypes.CHECKOUT: {
            const newOrder = {
                id: new Date().getTime(),
                items: state.cart,
                ...action.payload.data,
            }
            return produce(state, (draft) => {
                draft.orders = newOrder
                draft.cart = []
            })
        }
        default:
            return state
    }
}
