import { useNavigate } from "react-router-dom";
import { useContext } from "react";
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
    AboutDescriptionSection, AboutDescriptionTitle, AboutDescriptionText,
    Footer, Socials, SocialMediaIcon, FooterButton, FooterText, AboutMain
} from "../components/styled-components";

export const AboutPage = () => {
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
            <AboutMain>
                <AboutDescriptionSection>
                    <AboutDescriptionTitle>
                        Sobre o AstroRocks:
                    </AboutDescriptionTitle>
                    <AboutDescriptionText>
                        O AstroRocks é um projeto que se iniciou no bootcamp Web Full Stack na Labenu, durante o módulo front-end com foco na biblioteca React.<br />
                        Trata-se de um e-commerce fantasia, onde aerólitos e meteoritos são vendidos pelo AstroDev.<br />
                        Por ser um projeto que, eu, desenvolvedor, considerei relevante e divertido, decidi continuar trabalhando nele para torná-lo um projeto full stack.<br />
                        O projeto ainda não está concluído, mas espero que, ainda assim, possa lhe propor uma boa experiência. <br />
                        Você pode encontrar mais sobre mim no  <a href="https://www.linkedin.com/in/adriano-uge-668a43149/" target="_blank">LinkedIn</a>  e no  <a href="https://github.com/adrianouge/" target="_blank">GitHub</a>. Os links também constam no canto direito do roda-pé.
                        <br />
                        <br />
                        Até mais!
                    </AboutDescriptionText>
                </AboutDescriptionSection>
            </AboutMain>
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