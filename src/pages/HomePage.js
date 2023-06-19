import React, { useState, useEffect, useContext } from "react"
import {
    Header, Logo, UserSection, Navbar,
    ProductsSection,
    Footer,
    MainNavigation
} from "../components/styled-components"
import {
    ProductsFilter,
    ProductCardBuy
} from "../components/homepage-only/ProductsCardBuy"
import { CartPage } from "./CartPage"
import AstroRocksLogo from "../image/AstroRocksLogoNovo.png"
import { AstroRocksContext } from "../contexts/AstroRocksContext"

export const HomePage = () => {

    const context = useContext(AstroRocksContext)
    let { products,
        amountToBuy, setAmountToBuy,
        productsAddedToCart,
        addToCart, onChangeInput, onChangeFilter } = context

    const renderizeProducts = products.map((product) => {
        return (<ProductCardBuy
            key={product.id}
            id={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            description={product.description}
            price={product.price}
            onChangeInput={onChangeInput}
            amountToBuy={amountToBuy}
            setAmountToBuy={setAmountToBuy}
            addToCart={addToCart}
        />)
    })

    return (
        <>
            <Header>
                <Logo src={AstroRocksLogo} alt="logo" />
                <UserSection />
            </Header>
            <Navbar>
                {/* <HomeButton>Home</HomeButton>
                <AboutButton>About</AboutButton> */}
            </Navbar>
            <MainNavigation>
                <select id="filter" name="filter" onChange={onChangeFilter}>
                    <option value="nome">Nome</option>
                    <option value="preço">Preço</option>
                </select>
            </MainNavigation>
            <ProductsSection>
                {renderizeProducts}
            </ProductsSection>
            <Footer />
        </>
    )
}
