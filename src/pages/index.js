import Head from "next/head";
import Header from "../../components/Header";
import Product from "../../components/Product";
import Gallery from "../../components/Gallery";

import { product } from "@/api/product";

export default function Home() {
	return (
		<>
			<Head>
				<title>{`${product.brand} | ${product.name}`}</title>
				<meta name="description" content={product.description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<main>
				<Header />
				<section className="hero is-fullheight">
					<div className="hero-body">
						<div className="container">
							<div className="columns is-align-items-center">
								<div className="column">
									<Gallery data={product.images} />
								</div>
								<div className="column">
									<Product data={product} />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}