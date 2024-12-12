// src/components/NavBar.js
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #ddd' }}>
            <div>
                <h1>Mi E-Commerce</h1>
            </div>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <a href="#category1">Categoría 1</a>
                <a href="#category2">Categoría 2</a>
                <a href="#category3">Categoría 3</a>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;
