import { ReactNode, createContext } from 'react'

interface InterfaceCartContextProviderProps {
    children: ReactNode
}

interface InterfaceCartContextType {}

export const CartContext = createContext({} as InterfaceCartContextType)

export function CartContextProvider({ children }: InterfaceCartContextProviderProps) {
    return <CartContext.Provider value={[]}>{children}</CartContext.Provider>
}
