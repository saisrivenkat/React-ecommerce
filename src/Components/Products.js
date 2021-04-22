import React from 'react'

export default function Products({ products, addcart, cart }) {
    return (
        <>
            <p>cartlength is :{cart.length}</p>
            {products.map(product => {
                return (
                    <div>
                        <span>{product.title}</span>
                        <button onClick={() => addcart(product.id)}>Add to cart</button>
                    </div>
                )

            })}
        </>
    );
}
