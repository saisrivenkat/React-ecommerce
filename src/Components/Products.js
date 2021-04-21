import React from 'react'

export default function Products({ products, addcart }) {
    return (
        <>
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
