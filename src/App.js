import { HomePage } from "./pages/HomePage";
import { CartPage } from "./pages/CartPage";
import AstroRocksLogo from "./image/AstroRocksLogoNovo.png";
import UserIcon from "./image/userIcon.png";
import CartIcon from "./image/cartIcon.png"
import FacebookIcon from "./image/facebook.png"
import InstagramIcon from "./image/instagram.png"
import GitHubIcon from "./image/github-mark.png"
import LinkedInIcon from "./image/linkedin.png"
import MeteoritoDeFerro from "./image/MeteoritoDeFerro.png";
import EsferaDeGibeao from "./image/EsferaDeGibeao.png";
import FatiaDeImilac from "./image/FatiaDeImilac.png";
import { GlobalStyle } from "./globalStyles";
import { useState } from "react";
import { AstroRocksContext } from "./contexts/AstroRocksContext";
import { AstroRocksRouter } from "./Router/AstroRocksRouter";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  goToHomePage,
  goToSignupPage,
  goToAboutPage,
  goToCartPage,
  goToAttributionsPage
} from "./Router/RouterCoordinator";

function App() {

  // const [products, setProducts] = useState([])
  const [amountToBuy, setAmountToBuy] = useState([0, 0, 0])
  const [productsInUsersCart, setProductsInUsersCart] = useState([])
  const [filterValue, setFilterValue] = useState("")
  const [welcomeMessage, setWelcomeMessage] = useState("Bem vindo, visitante.")
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [userToken, setUserToken] = useState("")
  const [productsAmountInUsersCart, setProductsAmountInUsersCart] = useState(0)

  const onChangeUserEmail = (e) => {
    setUserEmail(e.target.value)
  }
  const onChangeUserPassword = (e) => {
    setUserPassword(e.target.value)
  }
  const loginUser = async (e) => {
    const body = { userEmail, userPassword }

    try {
      const response = await axios.get('', body)
      console.log(response)
      setWelcomeMessage(`Bem vindo, ${response.data}`)
    }

    catch (error) {
      console.log(error.response)
    }
  }

  // const getProducts = async() => {

  //   try {
  //     const response = await axios.get('',
  //       {})
  //     console.log(response.data)
  //     setProducts(response)
  //   }
  //   catch (error) {
  //     console.log(error.response)
  //   }
  // }

  let products = [
    {
      id: 0,
      imageUrl: MeteoritoDeFerro,
      name: "Meteorito de ferro",
      description: "É de ferro! Do espaço!",
      price: 150.00
    },
    {
      id: 1,
      imageUrl: FatiaDeImilac,
      name: "Fatia de Imilac",
      description: "Uma das maiores fatias de meteorito do mundo! Ouvi falar que vocês gostam de meteoritos, então eu trouxe esse meteorito que tem meteoritos dentro dele.",
      price: 500000.00
    },
    {
      id: 2,
      imageUrl: EsferaDeGibeao,
      name: "Esfera de Gibeão",
      description: `Esfera formada do coração do meteorito Gibeão. Não é a Estrela da Morte. Juro, eu chequei!`,
      price: 3000.00
    }
  ]

  // let addToCart = async(e) => {
  //   let productToBeAdded = {}

  //   const getProductByName = async() => {
  //     try {
  //       const response = axios.get('', {})
  //       console.log(response.data)
  //       productToBeAdded = response
  //     }
  //     catch(error) {
  //       console.log(error.response)
  //     }
  //   }
  //   getProductByName

  //   const putProductInUserCart = async() => {
  //     try {
  //       const response = await axios.get('', productToBeAdded)
  //       console.log(response)
  //     }
  //     catch (error) {
  //       console.log(error.response)
  //     }
  //   }
  //   putProductInUserCart
  // }

  function calculateProductsAmountInCart(productsInUsersCart) {
    let howMuchProductsInCart = 0
    if (productsInUsersCart.length > 0) {
      for (let i in productsInUsersCart) {
        const amountToAdd = productsInUsersCart[i].amountInCart
        console.log(amountToAdd)
        howMuchProductsInCart = howMuchProductsInCart + amountToAdd
      }
    }
    console.log(howMuchProductsInCart)
    setProductsAmountInUsersCart(howMuchProductsInCart)
  }

  const context = {
    AstroRocksLogo: AstroRocksLogo,
    UserIcon: UserIcon,
    CartIcon: CartIcon,

    products: products,

    productsInUsersCart: productsInUsersCart,
    setProductsInUsersCart: setProductsInUsersCart,
    productsAmountInUsersCart: productsAmountInUsersCart,
    setProductsAmountInUsersCart: setProductsAmountInUsersCart,
    calculateProductsAmountInCart: calculateProductsAmountInCart,
    
    userEmail: userEmail,
    setUserEmail: setUserEmail,
    onChangeUserEmail: onChangeUserEmail,
    userPassword: userPassword,
    setUserPassword: setUserPassword,
    onChangeUserPassword: onChangeUserPassword,
    loginUser: loginUser,
    userToken: userToken,
    setUserToken: setUserToken,

    welcomeMessage: welcomeMessage,
    setWelcomeMessage: setWelcomeMessage,

    goToHomePage: goToHomePage,
    goToSignupPage: goToSignupPage,
    goToCartPage: goToCartPage,
    goToAboutPage: goToAboutPage,
    goToAttributionsPage: goToAttributionsPage,

    LinkedInIcon: LinkedInIcon,
    GitHubIcon: GitHubIcon,
    FacebookIcon: FacebookIcon,
    InstagramIcon: InstagramIcon
  }

  return (
    <>
      <GlobalStyle />
      <AstroRocksContext.Provider value={context} >
        <AstroRocksRouter />
      </AstroRocksContext.Provider>
    </>
  );
}

export default App;