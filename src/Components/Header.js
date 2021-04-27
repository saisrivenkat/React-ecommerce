import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = ({cart}) => {
    return (
        <header>
            <div className="logo">
                <a href="/">
                    <img className="img_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />

                </a>

            </div>
            <div className="search_box">
                <input className="input_search" type="text" />
                <SearchIcon className="search_icon" />
            </div>
            <div className="nav_items">
                <div className="item item-1">
                    <span className="line1">Hello Guest</span>

                    <span className="line2">Sign in</span>
                </div>
                <div className="item item-2">
                    <span className="line1">Returns and </span>
                    <span className="line1">Orders</span>

                </div>
                <div className="item item-3">
                    <a href="/cart" style={{textDecoration:"none",color:"white"}}>
                        <span><ShoppingCartIcon /><span>{cart.length}</span></span>
                    </a>

                </div>

            </div>
        </header>
    );
}
export default Header