// Header.js
import React from 'react';
import './Header.css'; // Make sure you have this CSS file in your project

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          {/* You would replace 'DONUTS' with an img tag for the logo */}
          <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Donuts" />
        </div>
        <div className="menu-li</a>nks">
          <a href="/menu"><img src={`${process.env.PUBLIC_URL}/menu.svg`} alt="Menu" /></a>
          <a href="/order"><img src={`${process.env.PUBLIC_URL}/order.svg`} alt="Order" /></a>
        </div>
        <div className="cart">
          <button className="search-btn"><img src={`${process.env.PUBLIC_URL}/search.svg`} alt="Search" /></button>
          {/* Replace '0' with dynamic cart counter value */}
          <span className="cart-counter">0</span>
          <button className="cart-btn"><img src={`${process.env.PUBLIC_URL}/cart.svg`} alt="Cart" /></button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
