import { ReactNode, createContext, useReducer } from 'react'
import { InterfaceCoffee } from '../pages/Home/ListItems/Item'
import { CartReducer } from '../reducers/cart/reducer'
import { addNewItem } from '../reducers/cart/actions'

interface InterfaceCartContextProviderProps {
    children: ReactNode
}

interface InterfaceCartContextType {
    cart: InterfaceCoffee[]
    addNewItemContext: (data: InterfaceCoffee) => void
}

export const CartContext = createContext({} as InterfaceCartContextType)

export function CartContextProvider({ children }: InterfaceCartContextProviderProps) {
    const [cartState, dispatch] = useReducer(CartReducer, {
        cart: [],
    })

    const { cart } = cartState

    function addNewItemContext(data: InterfaceCoffee) {
        dispatch(addNewItem(data))
    }

    return (
        <CartContext.Provider value={{ cart, addNewItemContext }}>{children}</CartContext.Provider>
    )
}
