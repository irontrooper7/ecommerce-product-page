import { useState, useEffect } from 'react';
import ShoppingCart from './ShoppingCart';

export default function Header() {
	const [menuStatus, setMenuStatus] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', function () {
			if (menuStatus === true) {
				setMenuStatus(false)
			}
		});
	});

	return (
		<div className="header">
			<div className="container">
				<nav className="navbar" role="navigation" aria-label="main navigation">
					<div className="navbar-brand">
						<a role="button" className={`navbar-burger ${menuStatus ? 'is-active' : ''}`} onClick={() => setMenuStatus(!menuStatus)}>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</a>
						<a className="navbar-item" href="https://bulma.io">
							<img src="/assets/logo.svg" />
						</a>
					</div>
					<div id="navbarBasicExample" className={`navbar-menu ${menuStatus ? 'is-active' : ''}`}>
						<div className="navbar-start">
							<a className="navbar-item">Collections</a>
							<a className="navbar-item">Men</a>
							<a className="navbar-item">Women</a>
							<a className="navbar-item">About</a>
							<a className="navbar-item">Contact</a>
						</div>
					</div>
					<div className="navbar-user">
						<div className="navbar-item">
							<ShoppingCart />
						</div>
						<div className="navbar-item">
							<div className='avatar'>
								<img src="/assets/image-avatar.png" />
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>
	)
}