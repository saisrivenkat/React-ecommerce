import React, { useState, useEffect } from 'react'
import Products from './Components/Products'
import Items from './Components/items.json'
import Cart from './Components/Cart'
import Choclates from './Components/Choclates'
import Kitchen from './Components/Kitchen'
import Phones from './Components/Phones'
import Everyday from './Components/Everyday'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header'
import "./App.css"

function App() {
  const [products] = useState(Items)
  const [cart, setcart] = useState([])

  useEffect(() => {
    getlocalstorage()

  }, [])
  useEffect(() => {
    cartcost()
    savelocalstorage()
  }, [cart])


  const addcart = (id) => {
    const productid = products.findIndex(ul => ul.id === id)
    console.log(productid)
    if (cart.some(item => item.id === id)) {
      console.log("hii bitch")
    }
    else {
      const productinfo = { ...products[productid], qty: 1 }
      setcart([...cart, productinfo])
      return 'disabled'
    }
  }
  const cartcost = () => {
    let cost = cart.reduce(function (prev, cur) {
      return parseInt(prev + parseInt(cur.cost));
    }, 0);

    return cost
  }

  const deleteitem = (id) => {
    setcart(cart.filter(ul => ul.id !== id))
  }




  const handlechange = (e, id) => {
    const cartid = cart.findIndex(ul => ul.id === id)
    const iteminfo = { ...cart[cartid] }
    const p_id = products.find(ul => ul.id === iteminfo.id)
    const p_index = products.findIndex(ul => ul.id === p_id.id)
    const productinfo = { ...products[p_index] }
    const p_cost = productinfo.cost
    iteminfo.qty = e.target.value
    iteminfo.cost = p_cost * iteminfo.qty
    const cartclone = [...cart]
    cartclone[cartid] = iteminfo
    setcart(cartclone)
    console.log(iteminfo.img)
  }
  //save local
  const savelocalstorage = () => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  const getlocalstorage = () => {
    if (localStorage.getItem('cart') === null) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
    else {
      let localcart = JSON.parse(localStorage.getItem('cart'))

      setcart(localcart)
    }
  }

  return (
    <Router>
      <div className="App" style={{ backgroundColor: "#EAEDED" }}>
        <Header cart={cart} />
        <Switch>
          <Route exact path="/">
            {console.log(products)}
            <Products products={products} addcart={addcart} cart={cart} />
          </Route>
          <Route path="/choclates">
            <Choclates products={products} addcart={addcart} cart={cart} />
          </Route>
          <Route path="/phones">
            <Phones products={products} addcart={addcart} cart={cart} />
          </Route>
          <Route path="/kitchen">
            <Kitchen products={products} addcart={addcart} cart={cart} />
          </Route>
          <Route path="/everyday-essentials">
            <Everyday products={products} addcart={addcart} cart={cart} />
          </Route>
          <Route path="/cart">
            <Cart cart={cart} products={products} deleteitem={deleteitem} setcart={setcart} cost={cartcost} change={handlechange} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
