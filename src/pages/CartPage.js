import React, { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
    Header,
    Logo,
    UserSection,
    ThumbnailMessageBox, WelcomeMessage, CartThumbnail,
    LoginForm, EmailInput, PasswordInput,
    ButtonsBox, LoginButton, SignupButton,
    Navbar, NavButton,
    SearchSection, SearchBar, SearchButton,
    ProductsSectionCart,
    Footer, Socials, SocialMediaIcon, FooterButton, FooterText, MainNavigation, TotalCartPrice, TotalPriceAndBuyButtonSection, PurchaseButton
} from "../components/styled-components"
import { ProductCardCart } from "../components/cartpage-only/ProductCardCart"
import { AstroRocksContext } from "../contexts/AstroRocksContext"

export const CartPage = () => {
    const context = useContext(AstroRocksContext)
    const navigate = useNavigate()
    let {
        userToken, setUserToken,
        AstroRocksLogo, UserIcon, CartIcon,
        userEmail, setUserEmail, userPassword, setUserPassword,
        onChangeUserEmail, onChangeUserPassword,
        loginUser,
        products,
        productsInUsersCart, setProductsInUsersCart,
        welcomeMessage, setWelcomeMessage,
        goToHomePage, goToSignupPage, goToCartPage, goToAboutPage, goToAttributionsPage,
        LinkedInIcon, FacebookIcon, InstagramIcon, GitHubIcon
    } = context

    console.log(productsInUsersCart)
    const [cartTotalPrice, setCartTotalPrice] = useState(0)

    function deleteProductFromCart(e) {
        let productToDeleteIndex = Number
        for (let i in productsInUsersCart) {
            if (productsInUsersCart[i].id === Number(e.target.id)) {
                productToDeleteIndex = i
            }
        }
        let newProductsInUsersCart = productsInUsersCart
        newProductsInUsersCart.splice(productToDeleteIndex, 0)
        console.log(newProductsInUsersCart)
        setProductsInUsersCart(newProductsInUsersCart)
    }

    function minusOneProduct(e) {
        let newProductsInUsersCart = []
        for (let i in productsInUsersCart) {
            if (productsInUsersCart[i].id === Number(e.target.id)) {
                if (productsInUsersCart[i].amountInCart === 1) {
                    deleteProductFromCart(e)
                }
                else {
                    const newAmountInCart = productsInUsersCart[i].amountInCart -= 1
                    const newTotalPrice = newAmountInCart * productsInUsersCart[i].price
                    newProductsInUsersCart.push(
                        {
                            ...productsInUsersCart[i],
                            amountInCart: newAmountInCart,
                            totalPrice: newTotalPrice
                        })
                }
            }
            else {
                newProductsInUsersCart.push(productsInUsersCart[i])
            }
        }
        console.log(newProductsInUsersCart)
        setProductsInUsersCart(newProductsInUsersCart)
    }

    function plusOneProduct(e) {
        let newProductsInUsersCart = []
        for (let i in productsInUsersCart) {
            if (productsInUsersCart[i].id === Number(e.target.id)) {
                const newAmountInCart = productsInUsersCart[i].amountInCart += 1
                const newTotalPrice = newAmountInCart * productsInUsersCart[i].price
                newProductsInUsersCart.push(
                    {
                        ...productsInUsersCart[i],
                        amountInCart: newAmountInCart,
                        totalPrice: newTotalPrice
                    })
            }
            else {
                newProductsInUsersCart.push(productsInUsersCart[i])
            }
        }
        console.log(newProductsInUsersCart)
        setProductsInUsersCart(newProductsInUsersCart)
    }

    const renderizeCart = productsInUsersCart.map((cartProduct) => {
        let totalPrice = cartProduct.price * cartProduct.amountInCart
        return <ProductCardCart
            key={productsInUsersCart.indexOf(cartProduct)}
            imageUrl={cartProduct.imageUrl}
            name={cartProduct.name}
            price={cartProduct.price}
            id={cartProduct.id}
            minusOneProduct={minusOneProduct}
            amountInCart={cartProduct.amountInCart}
            plusOneProduct={plusOneProduct}
            totalPrice={totalPrice}
        />
    })

    function calculateCartTotalPrice(productsInUsersCart) {
        let newCartTotalPrice = 0
        if (productsInUsersCart.length > 0) {
            for (let i in productsInUsersCart) {
                newCartTotalPrice = newCartTotalPrice + productsInUsersCart[i].totalPrice
                console.log(newCartTotalPrice)
            }
        }
        setCartTotalPrice(newCartTotalPrice)
    }

    useEffect(() => { calculateCartTotalPrice(productsInUsersCart) }, [productsInUsersCart])

    return (
        <>
            <Header>
                <Logo src={AstroRocksLogo} alt="logo" onClick={() => goToHomePage(navigate)} />
                <SearchSection>
                    <SearchBar type="text" placeholder="Produto a ser pesquisado" />
                    <SearchButton>Pesquisar</SearchButton>
                </SearchSection>
                <UserSection>
                    <ThumbnailMessageBox>
                        <CartThumbnail src={CartIcon} onClick={() => goToCartPage(navigate)} />
                        <WelcomeMessage>{welcomeMessage}</WelcomeMessage>
                    </ThumbnailMessageBox>
                    <LoginForm name="login">
                        <EmailInput
                            type="text"
                            name="login-email"
                            placeholder="E-mail do usuário"
                            value={userEmail}
                            onChange={onChangeUserEmail}
                        />
                        <PasswordInput
                            type="password"
                            name="login-senha"
                            placeholder="Senha"
                            value={userPassword}
                            onChange={onChangeUserPassword}
                        />
                        <ButtonsBox>
                            <LoginButton type="submit" onClick={loginUser}>
                                Login
                            </LoginButton>
                            <SignupButton name="signup" onClick={() => goToSignupPage(navigate)}>
                                Cadastre-se
                            </SignupButton>
                        </ButtonsBox>
                    </LoginForm>
                </UserSection>
            </Header>
            <Navbar>
                <NavButton onClick={() => goToHomePage(navigate)}>Home</NavButton>
                <NavButton onClick={() => goToAboutPage(navigate)}>Sobre</NavButton>
            </Navbar>
            <ProductsSectionCart>
                {/* <MainNavigation /> */}
                {productsInUsersCart.length === 0 ? <p>Nenhum produto foi adicionado ao carrinho.</p> : renderizeCart}
                <TotalPriceAndBuyButtonSection>
                    <TotalCartPrice>
                        Total no carrinho: R${cartTotalPrice}
                    </TotalCartPrice>
                    <PurchaseButton>
                        Finalizar compra
                    </PurchaseButton>
                </TotalPriceAndBuyButtonSection>
            </ProductsSectionCart>
            <Footer>
                <FooterButton onClick={() => goToAboutPage(navigate)}>Sobre</FooterButton>
                <FooterButton onClick={() => goToAttributionsPage(navigate)}>Atribuições</FooterButton>
                <Socials>
                    <FooterText>Encontre-me em:</FooterText>
                    <a href="https://www.linkedin.com/in/adriano-uge-668a43149/" target="_blank">
                        <SocialMediaIcon src={LinkedInIcon} alt="Ícone LinkedIn" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100013635730492" target="_blank">
                        <SocialMediaIcon src={FacebookIcon} alt="Ícone Facebook" />
                    </a>
                    <a href="https://www.instagram.com/adrianomikio/" target="_blank">
                        <SocialMediaIcon src={InstagramIcon} alt="Ícone Instagram" />
                    </a>
                    <a href="https://github.com/adrianouge/" target="_blank">
                        <SocialMediaIcon src={GitHubIcon} alt="Ícone GitHub" />
                    </a>
                </Socials>
            </Footer>
        </>
    )
}