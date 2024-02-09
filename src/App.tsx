import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Router } from './components/Router'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { CartContextProvider } from './contexts/CartContext'

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <BrowserRouter>
                <CartContextProvider>
                    <Router />
                </CartContextProvider>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
