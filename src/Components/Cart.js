import React from 'react'

export default function Cart({ cart, deleteitem }) {
   
    return (
        <>
            {cart.map((item, index) => {
                return (
                    <div>
                        <span>{item.title}</span>
                        <button onClick={()=>deleteitem(item.id)}>Delete</button>
                    </div>

                )
            })}
        </>
    );
}
