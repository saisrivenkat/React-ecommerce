import React, { useState, useEffect } from 'react'
import Products from './Components/Products'
import Cart from './Components/Cart'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [products, setproducts] = useState([
    {
      id: 1,
      title: "Sunflower oil",
      cost: 180,
      category:"household"
    },
    {
      id: 2,
      title: "iphone",
      cost: 100,
      category:"phones"
    },
    {
      id: 3,
      title: "mango pickle",
      cost: 120,
      category:"household"
    }
  ])
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
    }
  }

  const deleteitem = (id) => {
    setcart(cart.filter(ul => ul.id !== id))
  }
  const cartcost = () => {
    let cost = cart.reduce(function (prev, cur) {
      return parseInt(prev + parseInt(cur.cost));
    }, 0);

    return cost
  }
  const handlechange = (e, id) => {
    console.log(e.target.value, id)
    const cartid = cart.findIndex(ul => ul.id === id)
    const iteminfo = { ...cart[cartid] }
    const productinfo = { ...products[cartid] }
    const p_cost = productinfo.cost
    iteminfo.qty = e.target.value
    iteminfo.cost = p_cost * iteminfo.qty
    const cartclone = [...cart]
    cartclone[cartid] = iteminfo
    setcart(cartclone)
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
      console.log(localcart)
      setcart(localcart)
    }
  }

  return (
    <Router>
      <div className="App" style={{backgroundColor: "#EAEDED"}}>
        <h1>E-Commerce</h1>
        <Switch>
          <Route exact path="/">
            <Products products={products} addcart={addcart} cart={cart} />
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
