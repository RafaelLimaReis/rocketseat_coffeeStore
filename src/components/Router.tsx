import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Cart } from '../pages/Cart'
import { Success } from '../pages/Success'

export function Router() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/sucesso" element={<Success />} />
        </Routes>
    )
}
