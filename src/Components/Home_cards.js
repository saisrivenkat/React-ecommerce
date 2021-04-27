import React from 'react'

const Cards = ({ title, img, link }) => {
    return (
        <div class="card" style={{ width: "312.25px" }}>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <img className="img-fluid w-100 p-3" src={img} alt="" style={{ height: "300px" }} />
                <span><a href={link}>See more</a></span>
            </div>
        </div>
    )
}
export default Cards;