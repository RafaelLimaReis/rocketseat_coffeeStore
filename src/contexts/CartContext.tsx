import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { CartReducer, InterfaceCoffee } from '../reducers/cart/reducer'
import {
    addNewItem,
    decrementItem,
    incrementItem,
    deleteItem,
    checkout,
} from '../reducers/cart/actions'
import { OrderInfo } from '../pages/Cart'

interface InterfaceCartContextProviderProps {
    children: ReactNode
}

interface InterfaceCartContextType {
    cart: InterfaceCoffee[]
    orders: OrderInfo | null
    addNewItemContext: (data: InterfaceCoffee) => void
    decrementItemContext: (id: string) => void
    incrementItemContext: (id: string) => void
    deleteItemContext: (id: string) => void
    checkoutContext: (data: OrderInfo) => void
}

export const CartContext = createContext({} as InterfaceCartContextType)

export function CartContextProvider({ children }: InterfaceCartContextProviderProps) {
    const [cartState, dispatch] = useReducer(
        CartReducer,
        {
            cart: [],
            orders: null,
        },
        (cartState) => {
            const stateCartStorage = localStorage.getItem('@coffee-delivery:cart-state-1.1.0')

            if (stateCartStorage) {
                return JSON.parse(stateCartStorage)
            }

            return cartState
        },
    )

    const { cart, orders } = cartState

    useEffect(() => {
        if (cartState) {
            const stateJSON = JSON.stringify(cartState)
            localStorage.setItem('@coffee-delivery:cart-state-1.1.0', stateJSON)
        }
    }, [cartState])

    function addNewItemContext(data: InterfaceCoffee) {
        dispatch(addNewItem(data))
    }

    function incrementItemContext(id: string) {
        dispatch(incrementItem(id))
    }

    function decrementItemContext(id: string) {
        dispatch(decrementItem(id))
    }

    function deleteItemContext(id: string) {
        dispatch(deleteItem(id))
    }

    function checkoutContext(data: OrderInfo) {
        dispatch(checkout(data))
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                orders,
                addNewItemContext,
                incrementItemContext,
                decrementItemContext,
                deleteItemContext,
                checkoutContext,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
