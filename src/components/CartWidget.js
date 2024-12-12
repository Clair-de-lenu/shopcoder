// src/components/CartWidget.js
import React from 'react';

const CartWidget = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <i className="fas fa-shopping-cart"></i>
            <span>3</span>
        </div>
    );
};

export default CartWidget;
