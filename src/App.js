import { HomePage } from "./pages/HomePage";
import { CartPage } from "./pages/CartPage";
import MeteoritoDeFerro from "./image/MeteoritoDeFerro.png";
import EsferaDeGibeao from "./image/EsferaDeGibeao.png";
import FatiaDeImilac from "./image/FatiaDeImilac.png";
import { GlobalStyle } from "./globalStyles";
import { useState } from "react";
import { AstroRocksContext } from "./contexts/AstroRocksContext";


function App() {

  const [amountToBuy, setAmountToBuy] = useState([0, 0, 0])
  const [amountInCart, setAmountInCart] = useState([0, 0, 0])
  const [productsAddedToCart, setProductsAddedToCart] = useState([])
  const [filterValue, setFilterValue] = useState("")

  function onChangeInput(e) {

    let index = Number(e.target.id)
    let newValue = Number(e.target.value)
    let newAmountToBuy = []

    function pushNewValues() {
      for (let i in amountToBuy) {
        if (Number(i) === index) { newAmountToBuy.push(newValue) }
        else { newAmountToBuy.push(amountToBuy[i]) }
      }
    }
    pushNewValues(amountToBuy)

    console.log(newAmountToBuy)
    setAmountToBuy(newAmountToBuy)
  }

  function onChangeFilter(e) {
    setFilterValue(e.target.value)
  }

  let products = [
    {
      id: 0,
      imageUrl: MeteoritoDeFerro,
      name: "Meteorito de ferro",
      description: "É de ferro! Do espaço.",
      price: 150.00,
      amountToBuy: amountToBuy[0],
      setAmountToBuy: setAmountToBuy,
      onChangeInput: onChangeInput,
      amountInCart: amountInCart[0],
      setAmountInCart: setAmountInCart
    },
    {
      id: 1,
      imageUrl: FatiaDeImilac,
      name: "Fatia de Imilac",
      description: "Uma das maiores fatias de meteorito do mundo! Ouvi falar que vocês gostam de meteoritos, então eu trouxe esse meteorito que tem meteoritos dentro dele.",
      price: 500000.00,
      amountToBuy: amountToBuy[1],
      setAmountToBuy: setAmountToBuy,
      onChangeInput: onChangeInput,
      amountInCart: amountInCart[1],
      setAmountInCart: setAmountInCart,
    },
    {
      id: 2,
      imageUrl: EsferaDeGibeao,
      name: "Esfera de Gibeão",
      description: `Esfera formada do coração do meteorito Gibeão. Não é a Estrela da Morte. Juro, eu chequei!`,
      price: 3000.00,
      amountToBuy: amountToBuy[2],
      setAmountToBuy: setAmountToBuy,
      onChangeInput: onChangeInput,
      amountInCart: amountInCart[2],
      setAmountInCart: setAmountInCart
    }
  ]

  let addToCart = (e) => {
    const index = Number(e.target.id)

    //Função e constantes pra guardar produtos no carrinho
    let productToBeAdded = products[index];

    let newProductsAddedToCart = [...productsAddedToCart];

    function isProductInCart(productsAddedToCart) {

      for (let i of productsAddedToCart) {

        if (i.id === productToBeAdded.id) { return true }
      }
    }

    if (isProductInCart(productsAddedToCart) !== true) {
      newProductsAddedToCart.push(productToBeAdded);
      setProductsAddedToCart(newProductsAddedToCart);
    }

    //Função e constantes para mudar quantidade dos produtos em cada carrinho
    let newAmountInCart = []
    function pushNewAmountInCart(amountInCart) {
      for (let i in amountInCart) {
        let numberI = Number(i)

        if (numberI === index) {
          newAmountInCart.push(Number(amountToBuy[numberI]))
          console.log(amountToBuy[numberI])
          console.log(typeof amountToBuy[numberI])
        }
        else { newAmountInCart.push(Number(amountInCart[numberI])) }
      }
    }
    pushNewAmountInCart(amountInCart)
    console.log(newAmountInCart)
    setAmountInCart(newAmountInCart)
    console.log(amountInCart)
  }

  const context = {
    products: products,

    productsAddedToCart: productsAddedToCart,
    setProductsAddedToCart: setProductsAddedToCart,

    amountInCart: amountInCart,
    setAmountInCart: setAmountInCart
  }


  return (
    <>
      <GlobalStyle />
      <AstroRocksContext.Provider value={context} >
        <HomePage
          addToCart={addToCart}
          onChangeInput={onChangeInput}
          onChangeFilter={onChangeFilter}
        />
        {/* <CartPage productsAddedToCart={productsAddedToCart} /> */}
      </AstroRocksContext.Provider>
    </>
  );
}

export default App;