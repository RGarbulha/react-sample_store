import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Header from './components/Header/Header'
import Checkout from './components/Checkout/Checkout'

import "./App.css"

function App() {

  const [state, setState] = useState({
    cart: [],
    menuState: false
  })

  const menuHandler = () => {
    setState({ ...state, menuState: !state.menuState })
  }

  const closeMenu = () => {
    setState({ ...state, menuState: false })
  }
  const openMenu = () => {
    setState({ ...state, menuState: true })
  }

  const removeCartItem = (sku) => {
    console.log("Remove Cart Item")
  }

  const addToCart = (item) => {
    console.log(item)
    console.log("Add to Cart")
  }

  const clearCart = () => {
    console.log("Clear Cart")
  }

  const cartServices = {
    menuState: state.menuState,
    menuHandler: menuHandler,
    closeMenu: closeMenu,
    openMenu: openMenu,
    removeCartItem: removeCartItem,
    addToCart: addToCart,
    clearCart: clearCart
  }


  useEffect(() => {
  }, [])

  return (
    <div className="App">

      {/* <Header menuState={state.menuState} menuHandler={menuHandler} cart={state.menuState} /> */}
      <Header menuState={state.menuState} cart={cartServices} />

      <Switch>
        <Route exact path='/' render={() => (
          <Home cart={cartServices} />
        )} />
        <Route exact path='/checkout' render={() => (
          <Checkout cart={cartServices} />
        )} />
      </Switch>
    </div>
  );
}

export default App;
