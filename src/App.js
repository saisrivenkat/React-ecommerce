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
    const productinfo = { ...products[productid],qty:1 }
    setcart([...cart, productinfo])

  }
  const deleteitem = (id) => {
    setcart(cart.filter(ul => ul.id !== id))
  }
  const cartcost = () => {
    let cost = cart.reduce(function (prev, cur) {
      return parseInt(prev + parseInt(cur.cost));
    }, 0);
    console.log(cost)
  }
  const qtychange =(e) =>{
   {/*} const itemid = cart.findIndex(ul=>ul.id === id)
    const item = {...cart[itemid]}
    item.qty = e.target.value
    const items =[...cart]
    items[itemid]=item
  setcart(items)*/}
  console.log(e)
    

  }
  return (
    <div className="App">
      <h1>E-Commerce</h1>
      <Products products={products} addcart={(id) => addcart(id)} />
      <Cart cart={cart} deleteitem={deleteitem} change={()=>qtychange()} cost={cartcost} />

    </div>
  );
}

export default App;
