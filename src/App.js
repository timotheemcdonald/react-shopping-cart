import React, { useState, createContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import ProductContext from '../src/contexts/ProductContext.js'
import CartContext from '../src/contexts/CartContext'


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		console.log('add item test')
		// const newItem = item;
		setCart([...cart, item]);
		console.log(item, 'new item to be added')
		console.log(cart, 'item should be in cart')
		// add the given item to the cart
	};

	const removeItem = item => {
		console.log('remove item rest')
		setCart(cart.filter(cartItem => cartItem.id !== item))
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{addItem, products}}>
				<CartContext.Provider value={{cart, removeItem}}>
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
