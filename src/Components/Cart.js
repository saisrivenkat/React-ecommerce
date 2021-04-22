import React from 'react'

export default function Cart({ cart, deleteitem, change }) {

    return (
        <>
            {cart.map((item, index) => {
                return (
                    <div>
                        <span>{item.title}</span>
                        <button onClick={() => deleteitem(item.id)}>Delete</button>
                        <select onChange={change}>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>

                )
            })}
        </>
    );
}
