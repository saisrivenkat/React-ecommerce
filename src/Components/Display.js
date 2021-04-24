import React from 'react'

function Display({ id, i_name, cost, img, deleteitem, qty, change }) {
    return (
        <>
            <div class="col-md-5 col-lg-3 col-xl-3 mb-3">
                <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                    <img class="img-fluid w-100 p-2"
                        src={img} alt="Sample" height="188.33" />

                </div>
            </div>
            <div class="col-md-7 col-lg-9 col-xl-9">
                <div>
                    <div class="d-flex justify-content-between">
                        <div>
                            <h5>{i_name}</h5>
                            <p class="mb-3 text-muted text-uppercase small">qty: {qty}</p>
                        </div>
                        <div>
                            <select value={qty} onChange={(e) => change(e, id)}>
                                <option selected value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <a href="!" type="button" class="card-link-secondary small text-uppercase mr-3" onClick={() => deleteitem(id)}><i class="fa fa-trash"></i>Remove item </a>
                    </div>
                    <p class="mb-0"><span><strong>Rs.{cost}</strong></span></p>
                </div>
            </div>
            <hr className="mb-4" />

        </>
    )
}

export default Display
