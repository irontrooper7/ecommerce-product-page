import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (productToAdd) => {
		setCart((prevCart) => {
			const existingProductIndex = prevCart.findIndex(
				(item) => item.name === productToAdd.name
			);

			if (existingProductIndex !== -1) {
				const updatedCart = [...prevCart];
				updatedCart[existingProductIndex].quantity += productToAdd.quantity;
				return updatedCart;
			} else {
				return [...prevCart, { ...productToAdd }];
			}
		});
	};

	const removeFromCart = (productName) => {
		setCart((prevCart) => prevCart.filter((item) => item.name !== productName));
	};
	const clearCart = () => {
		setCart([]);
	};

	useEffect(() => {
		console.log(cart);
	}, [cart]);

	return (
		<CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);