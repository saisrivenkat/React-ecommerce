/* eslint-disable no-lone-blocks */
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

export default function Cart({ cart, deleteitem, change, cost }) {
    return (
        <section className="container-fluid mt-3">
            <div className="row">
                <div className="col-lg-9">
                    <div class="card mb-3" style={{}}>
                        <h3 className="p-3">Shopping Cart</h3>
                        <hr className="m-0" />
                        {cart.map(item => {
                            return (
                                <div class="row g-0">
                                    <div class="col-md-3" style={{ textAlign: "center", padding: "15px" }}>
                                        <img src={item.img} alt="..." className="img-fluid " />
                                    </div>
                                    <div class="col-md-9">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between">
                                                <h5 class="card-title">{item.title} </h5>
                                                <span>Rs.<strong>{item.cost}</strong></span>
                                            </div>

                                            <span className="text-success">In Stock</span><br />
                                    Qty :<select className="form-select " style={{ width: "100px" }} onChange={(e) => change(e, item.id)} aria-label="Default select example">
                                                <option selected value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                            <div className="mt-3">

                                                <DeleteIcon style={{ color: "red", cursor: "pointer" }} onClick={() => deleteitem(item.id)} /><span className="text-danger">Delete</span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="container"></hr>
                                </div>

                            )
                        })}


                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="img">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="" />
                    </div>
                    <div className="card mt-3">
                        <div className="card-body">
                            <h5>Subtotal(<span>{cart.length} items</span>):Rs.<strong>{cost()}</strong> </h5>
                            <button className="btn btn-success w-100" style={{ borderRadius: "20px" }}>Procced to buy</button>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}
{/*{cart.map((item) => {
                                return (

                                    <div key={item.id}>
                                        {console.log(item.img)}
                                        <div class="row g-0">
                                            <div class="col-md-3 embed-responsive embed-responsive-16by9">
                                                <img src={item.img} alt="..." className="card-img-top img-fluid" height="auto" style={{ padding: "25px" }} />
                                            </div>
                                            <div class="col-md-9">
                                                <div class="card-body">
                                                    <div style={{ display: "flex" }}>
                                                        <h5 class="card-title" style={{ justifyContent: "end" }}>{item.title}</h5>
                                                    </div>

                                                    <span className="text-success">In stock</span>

                                                    <button className="btn btn-danger" onClick={() => deleteitem(item.id)}>Delete</button>
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
                        */}
