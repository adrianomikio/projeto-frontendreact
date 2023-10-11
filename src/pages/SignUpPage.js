import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AstroRocksContext } from "../contexts/AstroRocksContext";
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
    Footer, Socials, SocialMediaIcon, FooterButton, FooterText, SignUpMain, SignUpForm, SignUpInput, SignUpSubmitButton
} from "../components/styled-components";
import axios from "axios";

export const SignUpPage = () => {
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
        productsAmountInUsersCart,
        calculateProductsAmountInCart,
        welcomeMessage, setWelcomeMessage,
        goToHomePage, goToSignupPage, goToCartPage, goToAboutPage, goToAttributionsPage,
        LinkedInIcon, FacebookIcon, InstagramIcon, GitHubIcon
    } = context

    const [userNameSignUp, setUserNameSignUp] = useState("")
    const [userEmailSignUp, setUserEmailSignUp] = useState("")
    const [userPasswordSignUp, setUserPasswordSignUp] = useState("")
    const [repeatUserPassword, setRepeatUserPassword] = useState("")

    const onChangeNameSignUp = (e) => {
        setUserNameSignUp(e.target.value)
    }
    const onChangeEmailSignUp = (e) => {
        setUserEmailSignUp(e.target.value)
    }
    const onChangePasswordSignUp = (e) => {
        setUserPasswordSignUp(e.target.value)
    }
    const onChangeRepeatPasswordSignUp = (e) => {
        setRepeatUserPassword(e.target.value)
    }
    function checkIfSignUpPasswordMatch(
        userPasswordSignUp, repeatUserPassword
    ) {
        const passwordsChecksOut = userPasswordSignUp === repeatUserPassword
        return passwordsChecksOut
    }
    const signUserUp = async (e) => {
        e.preventDefault()
        const body = {
            name: userNameSignUp,
            email: userEmailSignUp,
            password: userPasswordSignUp
        }
        try {
            if (checkIfSignUpPasswordMatch(userPasswordSignUp, repeatUserPassword)) {
                const response = await axios.post(
                    'https://astrorocks-back-end.onrender.com/users/signup',
                    body
                )
                console.log(response)
                setUserToken(response.data.userToken)
            }
            else { console.log("Senhas inseridas não são idênticas.") }
        }
        catch (error) {
            console.log(error.response)
        }
    }
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
                <NavButton
                    onClick={
                        () => goToHomePage(navigate)
                    }
                >
                    Home
                </NavButton>
                <NavButton
                    onClick={
                        () => goToAboutPage(navigate)
                    }
                >
                    Sobre
                </NavButton>
            </Navbar>
            <SignUpMain>
                <SignUpForm>
                    Nome:<SignUpInput
                        type="text"
                        placeholder="Seu nome"
                        value={userNameSignUp}
                        onChange={onChangeNameSignUp}
                    />
                    Email: <SignUpInput
                        type="text"
                        placeholder="e-mail@dominio.com"
                        value={userEmailSignUp}
                        onChange={onChangeEmailSignUp}
                    />
                    Senha: <SignUpInput
                        type="password"
                        placeholder="Sua senha"
                        value={userPasswordSignUp}
                        onChange={onChangePasswordSignUp}
                    />
                    Repita sua senha: <SignUpInput
                        type="password"
                        placeholder="Repita sua senha"
                        value={repeatUserPassword}
                        onChange={onChangeRepeatPasswordSignUp}
                    />
                    <SignUpSubmitButton
                        type="submit"
                        onClick={signUserUp}>
                        Cadastrar
                    </SignUpSubmitButton>
                </SignUpForm>
            </SignUpMain>
            <Footer>
                <FooterButton
                    onClick={
                        () => goToAboutPage(navigate)
                    }>
                    Sobre
                </FooterButton>
                <FooterButton
                    onClick={
                        () => goToAttributionsPage(navigate)
                    }>
                    Atribuições
                </FooterButton>
                <Socials>
                    <FooterText>
                        Encontre-me em:
                    </FooterText>
                    <a
                        href="https://www.linkedin.com/in/adriano-uge-668a43149/"
                        target="_blank"
                    >
                        <SocialMediaIcon
                            src={LinkedInIcon}
                            alt="Ícone LinkedIn"
                        />
                    </a>
                    <a
                        href="https://github.com/adrianouge/"
                        target="_blank"
                    >
                        <SocialMediaIcon
                            src={GitHubIcon}
                            alt="Ícone GitHub"
                        />
                    </a>
                </Socials>
            </Footer>
        </>
    )
}