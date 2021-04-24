import React, { useState, useEffect } from 'react'
import Products from './Components/Products'
import Cart from './Components/Cart'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css"

function App() {
  const [products, setproducts] = useState([
    {
      id: 1,
      title: "Sunflower oil",
      cost: 180,
      category: "household",
      img: "https://storage.sg.content-cdn.io/cdn-cgi/image/width=600,height=600,quality=75,format=auto,fit=cover,g=top/in-resources/075ba640-9325-4e0e-8157-cdf49e2a8909/Images/ProductImages/Source/100038345.jpg"
    },
    {
      id: 2,
      title: "iphone",
      cost: 100,
      category: "phones",
      img: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg"
    },
    {
      id: 3,
      title: "mango pickle",
      cost: 120,
      category: "household",
      img: "https://www.bigbasket.com/media/uploads/p/xxl/40202784_3-dabur-hommade-mango-pickle.jpg"
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
