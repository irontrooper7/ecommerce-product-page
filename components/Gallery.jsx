import SliderSingle from "./Slider";
import { useState, useEffect, useRef } from "react";
import Thumbnail from "./Thumbnail";

export default function Gallery({ data }) {
	const ref = useRef(null);
	const [windowSize, setWindowSize] = useState({width: 1360, height: 800});
	const [currentImage, setCurrentImage] = useState(0)

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('resize', handleResize);
			handleResize();
		}
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	function handleResize() {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	}
	
	function handlerClick(index) {
		setCurrentImage(index)		
		if(windowSize.width >= 1024) {
			ref.current.classList.add("is-active");
		}
	}

	return (
		<div className="gallery">
			<SliderSingle ref={ref} data={data} windowSize={windowSize.width} initialSlide={currentImage}/>
			<div className="images-container">
				{windowSize.width >= 1024 ?
					<div className="columns is-flex-wrap-wrap">
						<div className="column is-12">
							<img className="main-image" src={`/assets/${data[currentImage]}.jpg`} alt="Product Image" />
						</div>
						{data?.map((item, index) => (
							<div className="column is-3" key={index} onClick={() => handlerClick(index)}>
								<Thumbnail src={`/assets/${item}.jpg`}/>
							</div>
						))}
					</div>
					: ''
				}

			</div>
		</div>
	)
}