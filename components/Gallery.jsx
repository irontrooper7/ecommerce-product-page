import { useState, useEffect, useRef } from "react";
import SliderSingle from "./Slider";
import Thumbnail from "./Thumbnail";

export default function Gallery({ data }) {
	const sliderRef = useRef(null);
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});
	const [currentImage, setCurrentImage] = useState(0)

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		
		handleResize();

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	
	function handleThumbnailClick(index) {
		setCurrentImage(index);
	}

	function handleMainImageClick() {
		if (windowSize.width >= 1024 && sliderRef.current) {
			sliderRef.current.showAndGoTo(currentImage);
		}
	}

	return (
		<div className="gallery">
			<SliderSingle ref={sliderRef} data={data} windowSize={windowSize.width} initialSlide={currentImage} />
			<div className="images-container">
				{windowSize.width >= 1024 ?
					<div className="columns is-flex-wrap-wrap">
						<div className="column is-12" onClick={handleMainImageClick} style={{ cursor: 'pointer' }}>
							<img className="main-image" src={`/assets/${data[currentImage]}.jpg`} alt="Product Image" />
						</div>
						{data?.map((item, index) => (
							<div className="column is-3" key={index} onClick={() => handleThumbnailClick(index)}>
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