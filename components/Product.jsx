import { useState } from "react";
import { useCart } from "../context/CartContext";
import { BsCart3 } from "react-icons/bs";
import { ImPlus, ImMinus } from "react-icons/im";

export default function Product({ data }) {
	const { addToCart } = useCart();
	const [quantity, setQuantity] = useState(0);
	let discountPrice = data.price * data.discount_percent / 100
	let productPrice = data.price - discountPrice
	const product = {
		name: data.name,
		image: data.images[0],
		price: productPrice,
		quantity: quantity
	}
	
	const handleAddToCart = () => {
		addToCart(product);
		setQuantity(0)
	};

	return (
		<div className="product">
			<div className="product-info">
				<h6>{data.brand}</h6>
				<h1>{data.name}</h1>
				<p>{data.description}</p>
			</div>
			<div className="product-price">
				{data.discount ?
					<>
						<h3>${productPrice}.00 <span>{data.discount_percent}%</span></h3>
						<h6 className="price">${data.price}.00</h6>
					</>
					:
					<h3>${data.price}.00</h3>
				}
			</div>
			<div className="product_checkout">
				<div className="product_amount">
					<button disabled={quantity <= 0 ? true : false} onClick={() => setQuantity(quantity - 1)}><ImMinus /></button>
					<span>{quantity}</span>
					<button onClick={() => setQuantity(quantity + 1)}><ImPlus /></button>
				</div>
				<button disabled={quantity <= 0 ? true : false} className="button is-primary" onClick={handleAddToCart}>
					<span className="icon is-large m-0"><BsCart3 /></span> Add to cart
				</button>
			</div>
		</div>
	)
}