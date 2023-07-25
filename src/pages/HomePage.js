import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
    Header,
    Logo,
    SearchSection, SearchBar, SearchButton,
    UserSection,
    ThumbnailMessageBox, WelcomeMessage,
    CartThumbnail, AmountInCart,
    LoginForm, EmailInput, PasswordInput,
    ButtonsBox, LoginButton, SignupButton,
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
        products,
        productsInUsersCart, setProductsInUsersCart,
        productsAmountInUsersCart, setProductsAmountInUsersCart,
        calculateProductsAmountInCart,
        welcomeMessage, setWelcomeMessage,
        goToHomePage, goToSignupPage, goToCartPage, goToAboutPage, goToAttributionsPage,
        LinkedInIcon, FacebookIcon, InstagramIcon, GitHubIcon
    } = context

    const [filterValue, setFilterValue] = useState("")
    // let addProductToCart = async (e) => {
    //     let productId = e.target.id
    //     let productToBeAdded = {}

    //     const getProductById = async () => {
    //         try {
    //             const response = axios.get('', productId)
    //             console.log(response.data)
    //             productToBeAdded = response
    //         }
    //         catch (error) {
    //             console.log(error.response)
    //         }
    //     }

    //     getProductById

    //     const putProductInUserCart = async () => {
    //         try {
    //             const response = await axios.get('', productToBeAdded)
    //             console.log(response)
    //         }
    //         catch (error) {
    //             console.log(error.response)
    //         }
    //     }

    //     putProductInUserCart
    // }

    const addProductToCart = (e) => {
        const [productToBeAdded] = products.filter(
            (product) => {
                return product.id === Number(e.target.id)
            })
        let newProductsInUsersCart = []
        let isProductInCart = false

        if (productsInUsersCart.length > 0) {
            for (let i in productsInUsersCart) {
                if (productsInUsersCart[i].id === Number(e.target.id)) {
                    console.log(typeof productsInUsersCart[i].id, typeof e.target.id)
                    const newAmountInCart = productsInUsersCart[i].amountInCart += 1
                    const newTotalPrice = (productsInUsersCart[i].price * newAmountInCart)
                    isProductInCart = true
                    newProductsInUsersCart = productsInUsersCart
                    newProductsInUsersCart.splice(
                        Number(i),
                        1,
                        { ...productToBeAdded, amountInCart: newAmountInCart, totalPrice: newTotalPrice })
                    console.log(newProductsInUsersCart, newTotalPrice, typeof newTotalPrice)
                }
            }
            if (isProductInCart === false) {
                newProductsInUsersCart.push(...productsInUsersCart, { ...productToBeAdded, amountInCart: 1, totalPrice: productToBeAdded.price * 1 })
            }
        }
        else {
            newProductsInUsersCart.push({ ...productToBeAdded, amountInCart: 1, totalPrice: productToBeAdded.price * 1 })
        }
        console.log(newProductsInUsersCart)
        setProductsInUsersCart(newProductsInUsersCart)
        calculateProductsAmountInCart(productsInUsersCart)
    }

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

    const renderizeProducts = products.map((product) => {
        const indexOfProduct = products.indexOf(product)
        return (<ProductCardBuy
            key={indexOfProduct}
            id={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            description={product.description}
            price={product.price}
            addProductToCart={addProductToCart}
        />)
    })

    useEffect(() => { calculateProductsAmountInCart(productsInUsersCart) }, [productsInUsersCart])
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
                        <AmountInCart>{productsAmountInUsersCart}</AmountInCart>
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
                            <LoginButton
                                type="submit"
                                onClick={loginUser}
                            >
                                Login
                            </LoginButton>
                            <SignupButton
                                name="signup"
                                onClick={() => goToSignupPage(navigate)}
                            >
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
            <MainNavigation>
                {/* <select id="filter" name="filter" onChange={onChangeFilter}>
                    <option value="nome">Nome</option>
                    <option value="preço">Preço</option>
                </select> */}
            </MainNavigation>
            <ProductsSectionBuy>
                {renderizeProducts}
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
        </>
    )
}