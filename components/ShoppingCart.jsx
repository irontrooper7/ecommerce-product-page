import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { FaTrashCan } from "react-icons/fa6";

export default function ShoppingCart({ hasProduct }) {
    const [shoppingCart, setShoppingCart] = useState(false)
    return (
        <>
            <div className="shopping-cart">
                <div className="icon cart">
                    <BsCart3 onClick={() => setShoppingCart(!shoppingCart)} />
                </div>
                {hasProduct && <div className="tag">3</div>}
                <div className={`card ${shoppingCart ? 'is-active' : ''}` }>
                    <header className="card-header">
                        <p className="card-header-title">
                            Cart
                        </p>
                    </header>
                    <div className="card-content">
                        {hasProduct ?
                            <div className="columns is-align-items-center m-0">
                                <div className="column is-2 p-0">
                                    <img src="/assets/image-product-1-thumbnail.jpg" alt="" />
                                </div>
                                <div className="column is-9">
                                    <p>Fall Limited Edition Sneakers</p>
                                    <p>$125.00 x 3 <b>$375.00</b></p>
                                </div>
                                <div className="column is-1 p-0">
                                    <div className="icon is-small m-0">
                                        <FaTrashCan />
                                    </div>
                                </div>
                            </div> :
                            <div className="content has-text-centered">
                                <p><b>Your cart is empty.</b></p>
                            </div>
                        }
                    </div>
                    {hasProduct &&
                        <div className="card-footer">
                            <button className="button is-primary">
                                Checkout
                            </button>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}