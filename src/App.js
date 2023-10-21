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
  const [usersCart, setUsersCart] = useState([])
  const onChangeUserEmail = (e) => {
    setUserEmail(e.target.value)
    console.log(typeof userEmail)
  }
  const onChangeUserPassword = (e) => {
    setUserPassword(e.target.value)
  }
  async function getUsersCart(userToken) {
    try {
      if (userToken) {
        const response = await axios.get(
          'https://astrorocks-back-end.onrender.com/carts/',
          {
            headers: { Authorization: userToken }
          })
        console.log(response)
        if (response.data.userCart) {
          const newUsersCart = []
          newUsersCart.push(response.data.userCart)
          setUsersCart(newUsersCart)
          console.log(usersCart)
        }
      }
    }
    catch (error) {
      console.log(error.response)
    }
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
        console.log(typeof usersCart)
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
  const context = {
    AstroRocksLogo: AstroRocksLogo,
    UserIcon: UserIcon,
    CartIcon: CartIcon,
    products: products,
    setProducts: setProducts,
    usersCart: usersCart,
    setUsersCart: setUsersCart,
    getUsersCart: getUsersCart,
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