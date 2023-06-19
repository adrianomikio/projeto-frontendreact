import styled from "styled-components";

export const Header = styled.header`
width: 1356px;
height: 136px;
display: flex;
flex-direction: row;
align-items : center;
background: rgb(0, 0, 37);
`

export const Logo = styled.img`
height: 120px;
align-self: center;
justify-self: left;
margin-left: 32px;
`

export const UserSection = styled.section`
width: 160px;
align-self: center;
justify-self: right;
display: flex;
flex-direction: column;
justify-items: left;
`

export const Navbar = styled.nav`
width: 1366px;
height: 32px;
display: flex;
flex-direction: row;
align-items: center;
gap: 32px;
`

export const ProductsSection = styled.section`
width: 1366px;
gap: 32px;
display: flex;
flex-direction: row;
justify-content: space-evenly;
margin-left: 32px;
`

export const MainNavigation = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: right;
width: 1300px;
padding: 0.5rem 2rem 0.5rem 2rem;
`

export const Footer = styled.footer`
height: 80px;
display: flex;
flex-direction: row;`

// Components for HomePage

export const ProductsSectionBuy = styled.section`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 32px;
width: 1356px;
`

export const ProductInfoSection = styled.div`
display: flex;
flex-direction: column;
width: 240px;
border-radius: 16px;
gap: 1rem;
padding: 1rem;
justify-items: left;
background: rgb(0,0,37);
`

export const ProductImage = styled.img`
align-self: center;
justify-self: center;
height: 160px;`

export const ProductDescription = styled.section`
align-self: center;
justify-self: center;
display: flex;
flex-direction: column;
justify-content: left;
color: rgb(222, 222, 157);
margin: 16px;`

export const ProductBuyButton = styled.button`
align-self: center;
justify-self: center;
height: 2rem;
width: 80px;
align-items: center;
justify-content: center;
flex-wrap: wrap;
margin-top: 16px;
border-radius: 16px;`

// Components for CartPage

export const ProductsCartCard = styled.div`
display: flex;
flex-direction: `

export const ProductDeleteButton = styled.button`
align-self: center;
justify-self: right;
height: 2rem;
width: 80px;
align-items: center;
justify-content: center;
flex-wrap: wrap;
border-radius: 16px;`