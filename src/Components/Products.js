/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-lone-blocks */
import React from 'react'
import "./Products.css"
import Home_cards from './Home_cards.js'

export default function Products({ products, addcart, cart }) {
    return (
        <div className="main_page">
            <div className="banner">
                <img className="banner_img" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Mega-Summer-Appliances-Carnival---hero_V1_1500x600v2._CB670290629_.jpg" alt="" />
            </div>
            <div className="row container-fluid">
                <div className="col-lg-3">
                    <Home_cards
                        title="Choclates , Sweets and More"
                        img="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
                        link="/choclates" />
                </div>
                <div className="col-lg-3">
                    <div class="card" style={{ width: "312.25px" }}>
                        <Home_cards
                            title="Kitchen and dinning"
                            img="https://static.toiimg.com/photo/76432196.cms"
                            link="/kitchen" />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div class="card" style={{ width: "312.25px" }}>
                        <Home_cards
                            title="Laptops and Phones"
                            img="https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge_wm_brb/public/field/image/2021/01/hp-spectre-x360-14-hero3.jpg"
                            link="/phones" />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div class="card" style={{ width: "312.25px" }}>
                        <Home_cards
                            title="Everyday essential"
                            img="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_4._SY116_CB431329535_.jpg"
                            link="/everyday-essentials" />
                    </div>
                </div>



            </div>

        </div>
    );
}
{/*<p>cartlength is :{cart.length}</p>
            {products.map(product => {
                return (
                    <div>
                        <span>{product.title}</span>
                        <button onClick={() => addcart(product.id)}>Add to cart</button>
                    </div>
                )

            })}*/}