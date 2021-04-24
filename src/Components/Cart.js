/* eslint-disable no-lone-blocks */
import React from 'react'
import Display from '../Components/Display'

export default function Cart({ cart, deleteitem, change, cost }) {


    return (
        <section className="container-fluid">
            <div className="row">
                <div className="col-lg-8">

                    <div class="card wish-list mb-3">
                        <div class="card-body p-4" >
                            <h5 class="mb-4">Cart (<span>{cart.length}</span> items)</h5>
                            <div class="row mb-4">
                                {cart.map((item) => {
                                    return (
                                        <Display
                                            id={item.id}
                                            i_name={item.title}
                                            cost={item.cost}
                                            img={item.img}
                                            deleteitem={deleteitem}
                                            change={change}
                                            qty={item.qty}


                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div class="card mb-3">
                        <div class="card-body">

                            <h5 class="mb-3">Total amount</h5>

                            <ul class="list-group list-group-flush">
                                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                    Total amount
              <span>Rs.{cost()}</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                    Shipping Charges
              <span>Rs . 0</span>
                                </li>
                                <li class="list-group-item   border-0 px-0 mb-3 ">

                                    <p className="text-end"><strong>Rs.{cost()}</strong></p>
                                </li>
                            </ul>

                            <button type="button" class="btn btn-primary btn-block waves-effect waves-light">go to checkout</button>

                        </div>
                    </div>

                </div>
            </div>

        </section >
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
