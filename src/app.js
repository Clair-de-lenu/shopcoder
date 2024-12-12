// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
    return (
        <div>
            <NavBar />
            <ItemListContainer greeting="¡Bienvenidos a mi tienda!" />
        </div>
    );
}

export default App;

import '@fortawesome/fontawesome-free/css/all.min.css';
