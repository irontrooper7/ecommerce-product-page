import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { FaTrashCan } from "react-icons/fa6";
import { useCart } from "../context/CartContext";

export default function ShoppingCart() {
	const [shoppingCart, setShoppingCart] = useState(false);
	const { cart, clearCart, removeFromCart } = useCart();

	const handleCheckout = () => {
		console.log("Procesando pago...");
		clearCart();
	};

	const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

	return (
		<>
			<div className="shopping-cart">
				<div className="icon cart" onClick={() => setShoppingCart(!shoppingCart)}>
					<BsCart3 />
					{totalQuantity > 0 && <div className="tag"><p>{totalQuantity}</p></div>}
				</div>
				<div className={`card ${shoppingCart ? 'is-active' : ''}`}>
					<header className="card-header">
						<p className="card-header-title">Cart</p>
					</header>
					<div className="card-content">
						{cart.length > 0 ?
							<>
								{cart.map((item) => (
									<div className="columns is-mobile is-flex-wrap-wrap is-align-items-center is-gapless" key={item.name}>
										<div className="column is-2">
											<img src={`/assets/${item.image}-thumbnail.jpg`} alt={item.name} />
										</div>
										<div className="column is-9">
											<p>{item.name} <br />${item.price.toFixed(2)} x {item.quantity} <b>${(item.price * item.quantity).toFixed(2)}</b></p>
										</div>
										<div className="column is-1" >
											<div className="icon" onClick={() => removeFromCart(item.name)}>
												<FaTrashCan />
											</div>
										</div>
									</div>
								))}
								<div className="column is-12 mt-4">
									<button onClick={handleCheckout} className="button is-primary is-fullwidth">Checkout</button>
								</div>
							</>
							:
							<div className="empty-content has-text-centered">
								<p><b>Your cart is empty.</b></p>
							</div>
						}
					</div>
				</div>
			</div>
		</>
	)
}