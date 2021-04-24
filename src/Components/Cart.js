/* eslint-disable no-lone-blocks */
import React from 'react'

export default function Cart({ cart, deleteitem, change, cost }) {
    return (
        <>

            <div className="container-fluid" style={{ padding: "10px" }}>
                <div className="row">
                    <div className="col-md-9">
                        <div class="card mb-3" style={{ maxWidth: "auto" }}>
                            {cart.map((item) => {
                                return (
                                    <div key={item.id}>
                                        <div class="row g-0">
                                            <div class="col-md-3 embed-responsive embed-responsive-16by9">
                                                <img src="https://assetscdn1.paytm.com/images/catalog/product/F/FA/FASFORTUNE-SUNFBIGB985832444062DD/1561508979210_5.jpg" alt="..." width="250px" style={{ padding: "25px" }} />
                                            </div>
                                            <div class="col-md-9">
                                                <div class="card-body">
                                                    <div style={{ display: "flex" }}>
                                                        <h5 class="card-title" style={{ justifyContent: "end" }}>{item.title}</h5>
                                                    </div>
                                                    <span>In stock</span>
                                                    <button onClick={() => deleteitem(item.id)}>Delete</button>

                                                    <select value={item.qty} onChange={(e) => change(e, item.id)}>
                                                        <option selected value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                    <span>{item.cost}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <hr style={{ margin: "0 30px" }} />
                                    </div>

                                )
                            })}


                        </div>

                    </div>
                    <div className="col-md-3 ">
                        <div class="card" style={{ width: "auto" }}>
                            <div class="card-body">
                                <h5 class="card-title" style={{ padding: "10px" }}>Sub Total ({cart.length}) : Rs.{cost()} </h5>


                                <center><button className="btn btn-primary " style={{ borderRadius: "20px", width: "100%" }}>Proceed to Buy</button></center>
                            </div>
                        </div>
                    </div>

                </div>


                <div>



                </div>
            </div>
            {/*}
            
            */}
        </>
    );
}
