import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { FaTrashCan } from "react-icons/fa6";

export default function ShoppingCart({ product }) {
	const [shoppingCart, setShoppingCart] = useState(false)
	return (
		<>
			<div className="shopping-cart">
				<div className="icon cart" onClick={() => setShoppingCart(!shoppingCart)}>
					<BsCart3 />
					{product && <div className="tag"><p>{product.quantity}</p></div>}
				</div>
				<div className={`card ${shoppingCart ? 'is-active' : ''}`}>
					<header className="card-header">
						<p className="card-header-title">Cart</p>
					</header>
					<div className="card-content">
						{product ?
							<div className="columns is-mobile is-flex-wrap-wrap is-align-items-center is-gapless">
								<div className="column is-2">
									<img src="/assets/image-product-1-thumbnail.jpg" alt="" />
								</div>
								<div className="column is-9">
									{product && <p>{product.name} <br />${product.price * product.discount_percent / 100}.00 x {product.quantity} <b>${product.price * product.discount_percent / 100 * product.quantity}.00</b></p> }
								</div>
								<div className="column is-1">
									<div className="icon">
										<FaTrashCan />
									</div>
								</div>
								<div className="column is-12">
									<button className="button is-primary">Checkout</button>
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