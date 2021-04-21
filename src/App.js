import React, { useState } from 'react'
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
      cost: 120000,
    },
    {
      id: 3,
      title: "mango pickle",
      cost: 120
    }
  ])
  const [cart, setcart] = useState([])

  const addcart = (id) => {
    const productid = products.findIndex(ul => ul.id === id)
    const productinfo = { ...products[productid] }
    setcart([...cart, productinfo])

  }
  const deleteitem = (id) => {
    setcart(cart.filter(ul => ul.id !== id))
  }

  return (
    <div className="App">
      <h1>E-Commerce</h1>
      <Products products={products} addcart={(id) => addcart(id)} />
      <Cart cart={cart} deleteitem={deleteitem} />

    </div>
  );
}

export default App;
