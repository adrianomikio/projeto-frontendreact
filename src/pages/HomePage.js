import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
    Body,
    Header,
    Logo,
    SearchSection, SearchBar, SearchButton,
    UserSection,
    ThumbnailMessageBox, WelcomeMessage,
    CartThumbnail, AmountInCart,
    LoginForm, EmailInput, PasswordInput,
    ButtonsBox, LoginButton, SignupButton,
    LogoutButton, UserAreaButton,
    Navbar, NavButton,
    MainNavigation,
    ProductsSectionBuy,
    Footer, Socials, SocialMediaIcon, FooterButton, FooterText
} from "../components/styled-components";
import {
    ProductsFilter,
    ProductCardBuy
} from "../components/homepage-only/ProductsCardBuy";
import { AstroRocksContext } from "../contexts/AstroRocksContext";
import axios from "axios";

export const HomePage = () => {
    const navigate = useNavigate()
    const context = useContext(AstroRocksContext)
    let {
        userToken, setUserToken,
        AstroRocksLogo, UserIcon, CartIcon,
        userEmail, setUserEmail, userPassword, setUserPassword,
        onChangeUserEmail, onChangeUserPassword,
        loginUser,
        logUserOut,
        products, setProducts,
        usersCart, setUsersCart,
        getUsersCart,
        welcomeMessage, setWelcomeMessage,
        goToHomePage,
        goToSignupPage, goToUserArea, goToCartPage,
        goToAboutPage, goToAttributionsPage,
        LinkedInIcon, FacebookIcon, InstagramIcon, GitHubIcon
    } = context
    const [filterValue, setFilterValue] = useState("")

    async function addToCart(e) {
        try {
            if (userToken) {
                if (usersCart.length > 0) {
                    for (let i in usersCart) {
                        if (usersCart[i].product_id === e.target.id) {
                            const productAmount = Number(usersCart[i].product_amount)
                            const newAmount = productAmount + 1
                            const stringfiedNewAmount = newAmount.toString()
                            const productId = e.target.id.toString()
                            const body = {
                                productId: productId,
                                newProductAmount: stringfiedNewAmount
                            }
                            console.log(body)
                            const response = await axios.post(
                                'https://astrorocks-back-end.onrender.com/carts/updatecart/',
                                body,
                                {
                                    headers: {
                                        Authorization: userToken
                                    }
                                }
                            )
                            console.log(response)
                            getUsersCart(userToken)
                        }
                        else {
                            const productToBeAddedId = e.target.id
                            const amountOfProduct = '1'
                            const body = {
                                productId: productToBeAddedId,
                                productAmount: amountOfProduct
                            }
                            const response = await axios.post(
                                'https://astrorocks-back-end.onrender.com/carts/',
                                body,
                                {
                                    headers: {
                                        Authorization: userToken
                                    }
                                }
                            )
                            console.log(response)
                        }
                    }
                }
                else {
                    const productToBeAddedId = e.target.id
                    const amountOfProduct = '1'
                    const body = {
                        productId: productToBeAddedId,
                        productAmount: amountOfProduct
                    }
                    const response = await axios.post('https://astrorocks-back-end.onrender.com/carts/',
                        body,
                        {
                            headers: {
                                Authorization: userToken
                            }
                        })
                    console.log(response)
                    getUsersCart(userToken)
                }
            }
            else {
                const existingCartLocalStorage = localStorage.getItem('productsInCart')
                if (existingCartLocalStorage === null) {
                    const productToBeAddedId = e.target.id
                    const amountOfProduct = '1'
                    const productsInCart = [{
                        productId: productToBeAddedId,
                        productAmount: amountOfProduct
                    }]
                    const cartLocalStorage = JSON.stringify(productsInCart)
                    localStorage.setItem('productsInCart', cartLocalStorage)
                }
                else {
                    let existingCart = JSON.parse(existingCartLocalStorage)
                    for (let i in existingCart) {
                        if (existingCart[i].productId === e.target.id) {
                            const productExistingAmount = Number(existingCart[i].productAmount)
                            const newProductAmount = productExistingAmount + 1
                            const stringfiedNewProductAmount = newProductAmount.toString()
                            existingCart[i].productAmount = stringfiedNewProductAmount
                        }
                        else {
                            const newProductInCart = { productId: e.target.id, productAmount: '1' }
                            existingCart.push(newProductInCart)
                        }
                    }
                    let newProductsInUsersCartStringfied = JSON.stringify(existingCart)
                    localStorage.setItem('productsInCart', newProductsInUsersCartStringfied)
                }
            }
        }
        catch (error) {
            console.log(error.response)
        }
    }
    // const addProductToCart = (e) => {
    //     const [productToBeAdded] = products.filter(
    //         (product) => {
    //             return product.id === Number(e.target.id)
    //         })
    //     let newProductsInUsersCart = []
    //     let isProductInCart = false

    //     if (productsInUsersCart.length > 0) {
    //         for (let i in productsInUsersCart) {
    //             if (productsInUsersCart[i].id === Number(e.target.id)) {
    //                 console.log(typeof productsInUsersCart[i].id, typeof e.target.id)
    //                 const newAmountInCart = productsInUsersCart[i].amountInCart += 1
    //                 const newTotalPrice = (productsInUsersCart[i].price * newAmountInCart)
    //                 isProductInCart = true
    //                 newProductsInUsersCart = productsInUsersCart
    //                 newProductsInUsersCart.splice(
    //                     Number(i),
    //                     1,
    //                     { ...productToBeAdded, amountInCart: newAmountInCart, totalPrice: newTotalPrice })
    //                 console.log(newProductsInUsersCart, newTotalPrice, typeof newTotalPrice)
    //             }
    //         }
    //         if (isProductInCart === false) {
    //             newProductsInUsersCart.push(...productsInUsersCart, { ...productToBeAdded, amountInCart: 1, totalPrice: productToBeAdded.price * 1 })
    //         }
    //     }
    //     else {
    //         newProductsInUsersCart.push({ ...productToBeAdded, amountInCart: 1, totalPrice: productToBeAdded.price * 1 })
    //     }
    //     console.log(newProductsInUsersCart)
    //     setProductsInUsersCart(newProductsInUsersCart)
    //     calculateProductsAmountInCart(productsInUsersCart)
    // }

    // const renderizeProducts = products.map((product) => {
    //     // if(product === undefined) {
    //     //     return(
    //     //         <p>
    //     //             Produtos não encontrados.
    //     //         </p>
    //     //     )
    //     // // }
    //     // const newAmountToBuy = [...amountToBuy, 0]
    //     // setAmountToBuy(newAmountToBuy)
    //     const indexOfProduct = products.indexOf(product)
    //     console.log(amountToBuy[indexOfProduct])
    //     return (<ProductCardBuy
    //         key={indexOfProduct}
    //         id={product.id}
    //         imageUrl={product.imageUrl}
    //         name={product.name}
    //         description={product.description}
    //         price={product.price}
    //         inputId={product.id}
    //         amountToBuy={amountToBuy[indexOfProduct]}
    //         onChangeAmountToBuy={onChangeAmountToBuy}
    //         addProductToCart={addProductToCart}
    //     />)
    // })
    function renderizeProducts(products) {
        const renderedProducts = products.map((product) => {
            const indexOfProduct = products.indexOf(product)
            return (<ProductCardBuy
                key={indexOfProduct}
                id={product.id}
                imageUrl={product.img_url}
                name={product.name}
                description={product.description}
                price={product.price}
                addProductToCart={addToCart}
            />)
        })
        return renderedProducts
    }
    function renderizeUserSection(userToken) {
        if (userToken) {
            return (
                <UserSection>
                    <ThumbnailMessageBox>
                        <CartThumbnail src={CartIcon} onClick={() => goToCartPage(navigate)} />
                        <AmountInCart>0</AmountInCart>
                        <WelcomeMessage>{welcomeMessage}</WelcomeMessage>
                    </ThumbnailMessageBox>
                    <ButtonsBox>
                        <UserAreaButton onClick={() => { goToUserArea(navigate) }}>Área do usuário</UserAreaButton>
                        <LogoutButton onClick={() => logUserOut()}>Sair</LogoutButton>
                    </ButtonsBox>
                </UserSection>
            )
        }
        else {
            return (
                <UserSection>
                    <ThumbnailMessageBox>
                        <CartThumbnail src={CartIcon} onClick={() => goToCartPage(navigate)} />
                        <AmountInCart>0</AmountInCart>
                        <WelcomeMessage>{welcomeMessage}</WelcomeMessage>
                    </ThumbnailMessageBox>
                    <LoginForm name="login">
                        <EmailInput
                            type="text"
                            name="login-email"
                            placeholder="E-mail do usuário"
                            value={userEmail}
                            onChange={onChangeUserEmail} />
                        <PasswordInput
                            type="password"
                            name="login-senha"
                            placeholder="Senha"
                            value={userPassword}
                            onChange={onChangeUserPassword} />
                        <ButtonsBox>
                            <LoginButton
                                type="submit"
                                onClick={loginUser}>
                                Login
                            </LoginButton>
                            <SignupButton
                                name="signup"
                                onClick={() => goToSignupPage(navigate)}>
                                Cadastre-se
                            </SignupButton>
                        </ButtonsBox>
                    </LoginForm>
                </UserSection>
            )
        }
    }
    async function getProducts() {
        try {
            const response = await axios.get(
                'https://astrorocks-back-end.onrender.com/products/'
            )
            setProducts(response.data.allProducts)
        }
        catch (error) {
            console.log(error.response)
        }
    }
    useEffect(() => { getProducts() }, [])
    // useEffect(() => { calculateProductsAmountInCart(productsInUsersCart) }, [productsInUsersCart])
    useEffect(() => { getUsersCart(userToken) }, [userToken])
    useEffect(() => { renderizeUserSection(userToken) }, [userToken])
    useEffect(() => { renderizeProducts(products) }, [products])
    return (
        <Body>
            <Header>
                <Logo src={AstroRocksLogo} alt="logo" onClick={() => goToHomePage(navigate)} />
                <SearchSection>
                    <SearchBar type="text" placeholder="Produto a ser pesquisado" />
                    <SearchButton>Pesquisar</SearchButton>
                </SearchSection>
                {renderizeUserSection(userToken)}
            </Header>
            <Navbar>
                <NavButton onClick={() => goToHomePage(navigate)}>Home</NavButton>
                <NavButton onClick={() => goToAboutPage(navigate)}>Sobre</NavButton>
            </Navbar>
            <MainNavigation>
                {/* <select id="filter" name="filter" onChange={onChangeFilter}>
                    <option value="nome">Nome</option>
                    <option value="preço">Preço</option>
                </select> */}
            </MainNavigation>
            <ProductsSectionBuy>
                {renderizeProducts(products)}
            </ProductsSectionBuy>
            <Footer>
                <FooterButton onClick={() => goToAboutPage(navigate)}>Sobre</FooterButton>
                <FooterButton onClick={() => goToAttributionsPage(navigate)}>Atribuições</FooterButton>
                <Socials>
                    <FooterText>Encontre-me em:</FooterText>
                    <a href="https://www.linkedin.com/in/adriano-uge-668a43149/" target="_blank">
                        <SocialMediaIcon src={LinkedInIcon} alt="Ícone LinkedIn" />
                    </a>
                    <a href="https://github.com/adrianouge/" target="_blank">
                        <SocialMediaIcon src={GitHubIcon} alt="Ícone GitHub" />
                    </a>
                </Socials>
            </Footer>
        </Body>
    )
}