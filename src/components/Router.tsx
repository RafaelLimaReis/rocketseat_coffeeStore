import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Cart } from '../pages/Cart'
import { Success } from '../pages/Success'
import { DefaultLayout } from '../layouts/DefaultLayout'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/carrinho" element={<Cart />} />
                <Route path="/sucesso" element={<Success />} />
            </Route>
        </Routes>
    )
}
