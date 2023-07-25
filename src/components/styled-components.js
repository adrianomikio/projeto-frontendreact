import styled from "styled-components";

export const Header = styled.header`
width: 1356px;
height: 178px;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items : center;
background: rgb(0, 0, 37);
`

export const Logo = styled.img`
height: 110px;
display: flex;
align-self: center;
justify-self: left;
`

export const SearchSection = styled.div`
justify-self: center;
align-self: center;
display: flex;
flex-direction: row;
justify-content: center;
gap: 10px;
width: 751px;
background: rgb(0, 0, 37);
`

export const SearchBar = styled.input`
justify-self: flex-start;
height: 26px;
width: 464px;
border: 0;
`

export const SearchButton = styled.button`
height: 26px;
width: 110px;
justify-self: flex-end;
border: 0;
`

export const UserSection = styled.section`
display: flex;
flex-direction: column;
height: 110px;
width: 178px;
align-self: center;
justify-self: flex-end;
`

export const ThumbnailMessageBox = styled.div`
display: flex;
flex-direction: row;
gap: 6px;
margin: 4px 0 4px 0;
`

export const WelcomeMessage = styled.p`
margin: 0 0 4px 4px;
font-size: 16px;
align-self: flex-end;
`

export const CartThumbnail = styled.img`
margin: 0 0 4px 0;
height: 26px;
align-self: center;
justify-self: left;
`

export const AmountInCart = styled.p`
display: flex;
justify-content: center;
align-items: center;
height: 26px;
width: 26px;
border-radius: 16px;
background: rgb(157, 157, 97);
color: rgb(255, 255, 255);
font-size: 16px;
margin: -10px 0 0 -16px;
`

export const LoginForm = styled.form`
display: flex;
flex-direction: column;
`

export const EmailInput = styled.input`
display: flex;
margin-bottom: 6px;
border: 0px;
`

export const PasswordInput = styled.input`
display: flex;
margin-bottom: 6px;
border: 0px;
`

export const ButtonsBox = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
`

export const LoginButton = styled.button`
display: flex;
justify-content: center;
width: 68px;
border: 0px;
`

export const SignupButton = styled.button`
display: flex;
justify-content: center;
width: 110px;
border: 0px;
`

export const Navbar = styled.nav`
width: 1356px;
height: 42px;
display: flex;
flex-direction: row;
align-items: center;
background: rgb(0, 37, 37);
`

export const NavButton = styled.button`
font-family: Helvetica;
font-size: 16px;
font-weight: bold;
color: rgb(255, 255, 218);
background: rgb(0, 37, 37);
border: 0px;
align-items: center;
justify-content: center;
margin-left: 110px;
`

export const ProductsSection = styled.section`
width: 1356px;
display: flex;
flex-direction: row;
gap: 16px;
`

export const MainNavigation = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: right;
height: 42px;
width: 1356px;
`

export const MainProductsFound = styled.p`
`

export const Footer = styled.footer`
margin-top: 42px;
height: 110px;
display: flex;
flex-direction: row;
background-color: rgb(0, 0, 37);
align-self: flex-end;
`

export const FooterButton = styled.button`
font-family: Helvetica;
font-size: 16px;
font-weight: bold;
color: rgb(255, 255, 218);
background: rgb(0, 0, 37);
border: 0px;
display: flex;
align-items: flex-start;
justify-content: center;
margin: 16px 0 0 68px;
`

export const FooterText = styled.p`
display: flex;
align-self: flex-end;
`

export const Socials = styled.div`
display: flex;
flex-direction: row;
align-self: flex-end;
align-items: center;
margin: 0 0 0 838px;
`

export const SocialMediaIcon = styled.img`
margin: 0 0 6px 4px;
height: 26px;
`

// Components for HomePage

export const ProductsSectionBuy = styled.section`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 1356px;
`

export const ProductInfoSection = styled.div`
display: flex;
flex-direction: column;
margin-left: 68px;
width: 287px;
padding: 1rem;
border-radius: 16px;
align-items: center;
background: rgb(0,0,37);
`

export const ProductImage = styled.img`
align-self: center;
justify-self: center;
width: 177px;`

export const ProductInformation = styled.section`
align-self: center;
justify-self: center;
display: flex;
flex-direction: column;
justify-content: left;
color: rgb(222, 222, 157);
margin: 16px;`

export const ProductDescription = styled.p`
height: 110px;`

export const ProductBuyButton = styled.button`
align-self: center;
justify-self: center;
height: 42px;
width: 110px;
align-items: center;
justify-content: center;
flex-wrap: wrap;
margin-top: 16px;
border: 0px;
border-radius: 26px;`

// Components for CartPage

export const ProductsSectionCart = styled.section`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
width: 1356px;
`

export const ProductCartCardSection = styled.div`
display: flex;
flex-direction: row;
height: 177px;
width: 1215px;
background: rgb(0,0,37);
border-radius: 26px;
justify-content: space-around;
margin-top: 26px;
`

export const ProductImageCart = styled.img`
width: 110px;
margin: 0 0 0 68px;
align-self: center;
justify-self: flex-start;
`

export const ProductInformationCart = styled.p`
display: flex;
flex-direction: column;
font-size: 16px;
align-self: center;
margin: 0 0 0 42px;
`

export const ProductNameCart = styled.p`
align-self: center;
justify-self: flex-start;
font-weight: bold;
font-size: 16px;
`

export const ProductPriceCart = styled.p`
align-self: center;
`

export const ProductAmountSectionCart = styled.p`
display: flex;
flex-direction: row;
gap: 16px;
margin-left: 177px;
align-self: center;
justify-self: flex-end;
`

export const MinusProductButton = styled.button`
height: 26px;
width: 26px;
border: 0px;
border-radius: 16px;
align-self: center;
justify-self: flex-start;
`

export const ProductAmountCart = styled.p`
align-self: center;
justify-self: center;
`

export const PlusProductButton = styled.button`
height: 26px;
width: 26px;
border: 0px;
border-radius: 16px;
align-self: center;
justify-self: flex-end;
`

export const TotalPrice = styled.p`
align-self: center;
justify-self: flex-end;
margin: 0 42px 0 42px;
`

export const ProductDeleteButton = styled.button`
align-self: center;
justify-self: right;
height: 24px;
width: 68px;
align-items: center;
justify-content: center;
flex-wrap: wrap;
border: 0px;
border-radius: 16px;
color: white;
background: rgb(157, 60, 60);
`

export const TotalPriceAndBuyButtonSection = styled.div`
display: flex;
flex-direction: row;
margin-top: 26px;
height: 110px;
width: 1215px;
background: rgb(0,0,37);
border-radius: 42px;
`

export const TotalCartPrice = styled.p`
align-self: center;
margin: 0 0 0 110px;
`

export const PurchaseButton = styled.button`
align-self: center;
height: 68px;
width: 110px;
border: 0px;
border-radius: 10px;
background: rgb(0, 97, 0);
color: rgb(255, 255, 157);
font-size: 16px;
font-weight: bold;
margin: 0 0 0 751px;
`
export const AboutMain = styled.main`
display: flex;
justify-content: center;
`

export const AboutDescriptionSection = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
width: 752px;
padding: 26px 68px 26px 68px;
background: rgb(0, 0, 37);
margin: 26px 0 26px 0;
border-radius: 26px;
`

export const AboutDescriptionTitle = styled.h1`
font-size: 16px;
`

export const AboutDescriptionText = styled.p`
`

export const SignUpMain = styled.main`
display: flex;
flex-direction: column;
align-items: center;
margin: 42px 0;
`

export const SignUpForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: rgb(0, 0, 37);
border-radius: 26px;
width: 751px;
padding: 26px 68px;
gap: 4px 0;
`

export const SignUpInput = styled.input`
width: 287px;
border: 0px;
margin: 0 0 6px 0;
`

export const SignUpSubmitButton = styled.button`
margin: 16px 0 0 0;
padding: 4px 6px;
border: 0px;
width: 177px;
`