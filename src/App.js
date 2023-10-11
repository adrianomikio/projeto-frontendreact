import AstroRocksLogo from "./image/AstroRocksLogoNovo.png";
import UserIcon from "./image/userIcon.png";
import CartIcon from "./image/cartIcon.png"
import FacebookIcon from "./image/facebook.png"
import InstagramIcon from "./image/instagram.png"
import GitHubIcon from "./image/github-mark.png"
import LinkedInIcon from "./image/linkedin.png"
import { GlobalStyle } from "./globalStyles";
import { useState } from "react";
import { AstroRocksContext } from "./contexts/AstroRocksContext";
import { AstroRocksRouter } from "./Router/AstroRocksRouter";
import axios from "axios";
import {
  goToHomePage,
  goToSignupPage,
  goToAboutPage,
  goToCartPage,
  goToUserArea,
  goToAttributionsPage
} from "./Router/RouterCoordinator";
import { useEffect } from "react";

function App() {
  const [products, setProducts] = useState([])
  const [productsInUsersCart, setProductsInUsersCart] = useState([])
  const [filterValue, setFilterValue] = useState("")
  const [welcomeMessage, setWelcomeMessage] = useState("Bem vindo, visitante.")
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [userToken, setUserToken] = useState("")
  const [productsAmountInUsersCart, setProductsAmountInUsersCart] = useState(0)
  const onChangeUserEmail = (e) => {
    setUserEmail(e.target.value)
    console.log(typeof userEmail)
  }
  const onChangeUserPassword = (e) => {
    setUserPassword(e.target.value)
  }
  const loginUser = async (e) => {
    e.preventDefault()
    const body = {
      email: userEmail,
      password: userPassword
    }
    try {
      const response = await axios.post(
        'https://astrorocks-back-end.onrender.com/users/login',
        body
      )
      console.log(response)
      if (response.data.userToken) {
        setUserToken(response.data.userToken)
        setWelcomeMessage(`${response.data.message}`)
      }
    }
    catch (error) {
      console.log(error.response)
    }
  }
  const logUserOut = (e) => {
    setUserToken()
    setWelcomeMessage("Bem vindo, visitante.")
  }
  async function getProducts() {
    try {
      const response = await axios.get('https://astrorocks-back-end.onrender.com/products/',
        {})
      setProducts(response.data.allProducts)
    }
    catch (error) {
      console.log(error.response)
    }
  }
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
    logUserOut: logUserOut,
    userToken: userToken,
    setUserToken: setUserToken,
    welcomeMessage: welcomeMessage,
    setWelcomeMessage: setWelcomeMessage,
    goToHomePage: goToHomePage,
    goToSignupPage: goToSignupPage,
    goToUserArea: goToUserArea,
    goToCartPage: goToCartPage,
    goToAboutPage: goToAboutPage,
    goToAttributionsPage: goToAttributionsPage,
    LinkedInIcon: LinkedInIcon,
    GitHubIcon: GitHubIcon,
    FacebookIcon: FacebookIcon,
    InstagramIcon: InstagramIcon
  }
  useEffect(() => { getProducts() }, [])
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