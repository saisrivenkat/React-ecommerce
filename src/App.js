import React, { useState, useEffect } from 'react'
import Products from './Components/Products'
import Cart from './Components/Cart'
function App() {
  const [products, setproducts] = useState([
    {
      id: 1,
      title: "Sunflower oil",
      cost: 180,
    },
    {
      id: 2,
      title: "iphone",
      cost: 100,
    },
    {
      id: 3,
      title: "mango pickle",
      cost: 120
    }
  ])
  const [cart, setcart] = useState([])

  useEffect(() => {
    cartcost()
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

  return (
    <div className="App">
      <h1>E-Commerce</h1>
      <Products products={products} addcart={(id) => addcart(id)} />
      <Cart cart={cart} products ={products} deleteitem={deleteitem} setcart={setcart} cost={cartcost} change ={handlechange} />

    </div>
  );
}

export default App;
