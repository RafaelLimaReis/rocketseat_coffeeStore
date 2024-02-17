import { ReactNode, createContext, useReducer } from 'react'
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
    addNewItemContext: (data: InterfaceCoffee) => void
    decrementItemContext: (id: string) => void
    incrementItemContext: (id: string) => void
    deleteItemContext: (id: string) => void
    checkoutContext: (data: OrderInfo) => void
}

export const CartContext = createContext({} as InterfaceCartContextType)

export function CartContextProvider({ children }: InterfaceCartContextProviderProps) {
    const [cartState, dispatch] = useReducer(CartReducer, {
        cart: [],
        orders: null,
    })

    const { cart } = cartState

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
