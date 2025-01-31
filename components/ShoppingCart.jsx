import { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { FaTrashCan } from "react-icons/fa6";
import { useCart } from "../context/CartContext";

export default function ShoppingCart() {
	const [shoppingCart, setShoppingCart] = useState(false);
	const { cart, clearCart } = useCart();

	useEffect(() => {
		console.log(cart);
	}, [cart]);

	const handleClearToCart = () => {
		clearCart();
		setShoppingCart(false)
	};
	return (
		<>
			<div className="shopping-cart">
				<div className="icon cart" onClick={() => setShoppingCart(!shoppingCart)}>
					<BsCart3 />
					{cart.length > 0 && <div className="tag"><p>{cart[0].quantity}</p></div>}
				</div>
				<div className={`card ${shoppingCart ? 'is-active' : ''}`}>
					<header className="card-header">
						<p className="card-header-title">Cart</p>
					</header>
					<div className="card-content">
						{cart.length > 0 ?
							<div className="columns is-mobile is-flex-wrap-wrap is-align-items-center is-gapless">
								<div className="column is-2">
									<img src={`/assets/${cart[0].image}-thumbnail.jpg`} alt="" />
								</div>
								<div className="column is-9">
									{cart && <p>{cart[0].name} <br />${cart[0].price}.00 x {cart[0].quantity} <b>${cart[0].price * cart[0].quantity}.00</b></p>}
								</div>
								<div className="column is-1" >
									<div className="icon" onClick={handleClearToCart}>
										<FaTrashCan />
									</div>
								</div>
								<div className="column is-12">
									<button onClick={handleClearToCart} className="button is-primary">Checkout</button>
								</div>
							</div> :
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