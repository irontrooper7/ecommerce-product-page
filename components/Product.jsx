import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { ImPlus, ImMinus } from "react-icons/im";

export default function Product({ data }) {
	const [productAmount, setProductAmount] = useState(0);
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
						<h3>${data.price * data.discount_percent / 100}.00 <span>{data.discount_percent}%</span></h3>
						<h6 className="price">${data.price}.00</h6>
					</>
					:
					<h3>${data.price}.00</h3>
				}
			</div>
			<div className="product_checkout">
				<div className="product_amount">
					<button disabled={productAmount <= 0 ? true : false} onClick={() => setProductAmount(productAmount - 1)}><span className="icon" ><ImMinus /></span></button>
					<span>{productAmount}</span>
					<button><span className="icon" onClick={() => setProductAmount(productAmount + 1)}><ImPlus /></span></button>
				</div>
				<button className="button is-primary">
					<span className="icon is-large m-0"><BsCart3 /></span> Add to cart
				</button>
			</div>
		</div>
	)
}