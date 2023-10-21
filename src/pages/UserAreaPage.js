import React, { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import {
    Header,
    Logo,
    SearchSection, SearchBar, SearchButton,
    UserSection,
    ThumbnailMessageBox, WelcomeMessage, CartThumbnail, AmountInCart,
    LoginForm, EmailInput, PasswordInput,
    LogoutButton, UserAreaButton,
    ButtonsBox, LoginButton, SignupButton,
    Navbar, NavButton,
    UserAreaMain,
    Footer, Socials, SocialMediaIcon, FooterButton, FooterText, Body, UserCommandsSection, ChangeUserInfoForm, NewInfoInput, UserCommandButton, NewProductForm, NewProductInput, NewProductDescriptionInput, UserCommandHeader
} from "../components/styled-components"
import { ProductCardCart } from "../components/cartpage-only/ProductCardCart"
import { AstroRocksContext } from "../contexts/AstroRocksContext"

export const UserAreaPage = () => {
    const context = useContext(AstroRocksContext)
    const navigate = useNavigate()
    const [newEmail, setNewEmail] = useState()
    const [confirmNewEmail, setConfirmNewEmail] = useState()
    const [newPassword, setNewPassword] = useState()
    const [confirmNewPassword, setConfirmNewPassword] = useState()
    const [userUserWants, setUserUserWants] = useState("nothing")
    const [productName, setProductName] = useState()
    const [productImgUrl, setProductImgUrl] = useState()
    const [productDescription, setProductDescription] = useState()
    const [productPrice, setProductPrice] = useState()
    const [productAmountInStock, setProductAmountInStock] = useState()

    function onChangeNewEmail(e) {
        setNewEmail(e.target.value)
    }
    function onChangeConfirmNewEmail(e) {
        setConfirmNewEmail(e.target.value)
    }
    function onChangeNewPassword(e) {
        setNewPassword(e.target.value)
    }
    function onChangeConfirmNewPassword(e) {
        setConfirmNewPassword(e.target.value)
    }
    function onChangeProductName(e) {
        setProductName(e.target.value)
    }
    function onChangeProductImgUrl(e) {
        setProductImgUrl(e.target.value)
    }
    function onChangeProductDescription(e) {
        setProductDescription(e.target.value)
    }
    function onChangeProductPrice(e) {
        setProductPrice(e.target.value)
    }
    function onChangeProductAmountInStock(e) {
        setProductAmountInStock(e.target.value)
    }
    function checkIfNewEmailMatch(
        newEmail, confirmNewEmail
    ) {
        const emailsChecksOut = newEmail === confirmNewEmail
        return emailsChecksOut
    }
    function checkIfNewPasswordMatch(
        newPassword, confirmNewPassword
    ) {
        const passwordsChecksOut = newPassword === confirmNewPassword
        return passwordsChecksOut
    }
    const changeUserEmail = async (e) => {
        const body = { newEmail }
        e.preventDefault()
        try {
            if (checkIfNewEmailMatch(newEmail, confirmNewEmail)) {
                const response = await axios.post(
                    'https://astrorocks-back-end.onrender.com/users/changeemail',
                    body,
                    {
                        headers: { Authorization: userToken }
                    }
                )
                console.log(response)
            }
            else { console.log("Por favor, verifique se o novo e-mail foi inserido corretamente.") }
        }
        catch (error) {
            console.log(error.response)
        }
    }
    const changeUserPassword = async (e) => {
        const body = { userToken, newPassword }
        e.preventDefault()
        try {
            if (checkIfNewPasswordMatch(newPassword, confirmNewPassword)) {
                const response = await axios.post(
                    'https://astrorocks-back-end.onrender.com/users/changepassword',
                    body,
                    {
                        headers: { Authorization: userToken }
                    }
                )
                console.log(response)
            }
            else { console.log("Por favor, confirme sua nova senha.") }
        }
        catch (error) {
            console.log(error.response)
        }
    }
    let {
        userToken, setUserToken,
        AstroRocksLogo, UserIcon, CartIcon,
        userEmail, setUserEmail, userPassword, setUserPassword,
        onChangeUserEmail, onChangeUserPassword,
        loginUser, logUserOut,
        products,
        productsInUsersCart, setProductsInUsersCart,
        productsAmountInUsersCart,
        calculateProductsAmountInCart,
        welcomeMessage, setWelcomeMessage,
        goToHomePage, goToSignupPage, goToCartPage, goToAboutPage, goToAttributionsPage, goToUserArea,
        LinkedInIcon, GitHubIcon
    } = context
    const registerNewProduct = async (e) => {
        e.preventDefault()
        const body = {
            name: productName,
            imgUrl: productImgUrl,
            description: productDescription,
            price: productPrice,
            amountInStock: productAmountInStock
        }
        try {
            const response = await axios.post(
                'https://astrorocks-back-end.onrender.com/products/registernewproduct',
                body, {
                headers: { Authorization: userToken }
            }
            )
            console.log(response)
        }
        catch (error) {
            console.log(error.response)
        }
    }
    function renderizeUserSection(userToken) {
        if (userToken) {
            return (
                <UserSection>
                    <ThumbnailMessageBox>
                        <CartThumbnail src={CartIcon} onClick={() => goToCartPage(navigate)} />
                        <AmountInCart>{productsAmountInUsersCart}</AmountInCart>
                        <WelcomeMessage>{welcomeMessage}</WelcomeMessage>
                    </ThumbnailMessageBox>
                    <ButtonsBox>
                        <UserAreaButton onClick={() => { goToUserArea() }}>Área do usuário</UserAreaButton>
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
                        <AmountInCart>{productsAmountInUsersCart}</AmountInCart>
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
    function renderizeUserCommandsSection(userUserWants) {
        if (userUserWants === "nothing") {
            return (
                <UserCommandsSection>
                    <a onClick={() => setUserUserWants("to-change-email")}>
                        <UserCommandHeader key="to-change-email">Quero mudar de e-mail</UserCommandHeader>
                    </a>
                    <a onClick={() => setUserUserWants("to-change-password")}>
                        <UserCommandHeader key="to-change-password">Quero mudar de senha</UserCommandHeader>
                    </a>
                    <a onClick={() => setUserUserWants("to-register-product")}>
                        <UserCommandHeader key="to-register-product">Quero registrar novo produto</UserCommandHeader>
                    </a>
                </UserCommandsSection>
            )
        }
        if (userUserWants === "to-change-email") {
            return (
                <UserCommandsSection>
                    <ChangeUserInfoForm key="newemail">
                        Novo e-mail: <NewInfoInput
                            type="text"
                            value={newEmail}
                            onChange={onChangeNewEmail}
                            placeholder="Digite aqui seu novo e-mail" />
                        Confirme seu novo e-mail: <NewInfoInput
                            type="text"
                            value={confirmNewEmail}
                            onChange={onChangeConfirmNewEmail}
                            placeholder="Confirme seu novo e-mail" />
                        <UserCommandButton type="submit" onClick={(e) => changeUserEmail(e)}>
                            Mudar e-mail
                        </UserCommandButton>
                        <UserCommandButton onClick={() => setUserUserWants("nothing")}>
                            Voltar
                        </UserCommandButton>
                    </ChangeUserInfoForm>
                </UserCommandsSection>
            )
        }
        if (userUserWants === "to-change-password") {
            return (
                <UserCommandsSection>
                    <ChangeUserInfoForm key="newpassword">
                        Nova senha: <NewInfoInput
                            type="password"
                            value={newPassword}
                            onChange={onChangeNewPassword}
                            placeholder="Digite aqui sua nova senha" />
                        Confirme sua nova senha: <NewInfoInput
                            type="password"
                            value={confirmNewPassword}
                            onChange={onChangeConfirmNewPassword}
                            placeholder="Confirme sua nova senha" />
                        <UserCommandButton type="submit" onClick={(e) => changeUserPassword(e)}>
                            Mudar senha
                        </UserCommandButton>
                        <UserCommandButton onClick={() => setUserUserWants("nothing")}>
                            Voltar
                        </UserCommandButton>
                    </ChangeUserInfoForm>
                </UserCommandsSection>
            )
        }
        if (userUserWants === "to-register-product") {
            return (
                <UserCommandsSection>
                    <NewProductForm>
                        Nome:<NewProductInput
                            placeholder="Nome do produto"
                            value={productName}
                            onChange={(e) => onChangeProductName(e)}
                        />
                        Link da imagem: <NewProductInput
                            placeholder="Url da imagem"
                            value={productImgUrl}
                            onChange={(e) => onChangeProductImgUrl(e)}
                        />
                        Descrição:<NewProductDescriptionInput
                            placeholder="Descrição do produto"
                            value={productDescription}
                            onChange={(e) => onChangeProductDescription(e)}
                        />
                        Preço: <NewProductInput
                            placeholder="Ex.: 299.99"
                            value={productPrice}
                            onChange={(e) => onChangeProductPrice(e)}
                        />
                        Quantidade disponível: <NewProductInput
                            placeholder="Ex.: 5"
                            value={productAmountInStock}
                            onChange={(e) => onChangeProductAmountInStock(e)} />
                        <UserCommandButton
                            type="submit"
                            onClick={(e) => registerNewProduct(e)}
                        >
                            Registrar
                        </UserCommandButton>
                        <UserCommandButton
                            onClick={() => setUserUserWants("nothing")}
                        >
                            Voltar
                        </UserCommandButton>
                    </NewProductForm>
                </UserCommandsSection>
            )
        }
    }
    useEffect(() => { renderizeUserSection(userToken) }, [userToken])
    useEffect(() => { renderizeUserCommandsSection(userUserWants) }, [userUserWants])
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
            <UserAreaMain>
                {renderizeUserCommandsSection(userUserWants)}
            </UserAreaMain>
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
