import React from 'react'

export default function Cart({ cart, deleteitem, change, cost }) {
    return (
        <>
            <div>
                {cart.map((item) => {
                    return (
                        <div key={item.id}>
                            <span>{item.title}</span>
                            <button onClick={() => deleteitem(item.id)}>Delete</button>
                            <select value={item.qty} onChange={(e) => change(e, item.id)}>
                                <option selected value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <span>{item.cost}</span>
                        </div>
                    )
                })}
                <span>Cost is :-{cost()}</span>

            </div>
        </>
    );
}
