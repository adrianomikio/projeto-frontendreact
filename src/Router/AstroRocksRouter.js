import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";

export const AstroRocksRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="" element={<HomePage />} />
                {/* <Route path="registrar" element={<SignupPage />} /> */}
                <Route path="carrinho" element={<CartPage />} />
                {/* <Route path="sobre" element={<AboutPage />} /> */}
                {/* <Route path="atribuicoes" element={<AttributionsPage/>}/> */}
            </Routes>
        </BrowserRouter>
    )
}