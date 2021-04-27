import React from 'react'

const Phone =({products,addcart}) =>{
    return(
        <div className="container">
            <h3 style={{ padding: "20px" }}>Kitchen</h3>
            <div className="row">
                {products.filter(item => {

                    if (item.category === "household") {
                        return item
                    }
                }).map(item => {
                    return (
                        <div class="card" style={{ width: "18rem", marginLeft: "20px" }}>
                            <img src={item.img} class="card-img-top img-fluid" alt="..." style={{ padding: "25px", maxHeight: "262px" }} />
                            <div class="card-body">
                                <h5 class="card-title">{item.title}</h5>
                                <p>Hershys</p>
                                <span><small>Rs.</small><strong>{item.cost}</strong></span><br></br>
                                <button onClick={() => addcart(item.id)} className="btn btn-primary p-2 w-100 mt-3" >Add to cart</button>
                            </div>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}
export default Phone;