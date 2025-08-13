import { forwardRef, useState, useImperativeHandle, useRef } from 'react';
import { ImCross } from "react-icons/im";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Thumbnail from './Thumbnail';

const Slider = forwardRef(function Slider({ data, windowSize, initialSlide }, ref) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const swiperRef = useRef(null);
	const sliderContainerRef = useRef(null);

	useImperativeHandle(ref, () => ({
		showAndGoTo: (index) => {
			if (sliderContainerRef.current) {
				sliderContainerRef.current.classList.add("is-active");
			}
			if (swiperRef.current) {
				// Usamos slideToLoop porque el loop está activado
				swiperRef.current.slideToLoop(index, 0); // El 0 evita la animación de deslizamiento
			}
		}
	}));

	function hideSlider() {
		if (windowSize >= 1024) {
			sliderContainerRef.current.classList.remove("is-active");
		}
	}
	return (
		<div ref={sliderContainerRef} className={`slider ${windowSize < 1024 ? 'is-mobile' : ''}`}>
			<div className="slider-cont">
				{windowSize >= 1024 && <div className="icon is-small" onClick={() => hideSlider()}><ImCross /></div>}
				{data &&
					<>
						<Swiper
							onSwiper={(swiper) => { swiperRef.current = swiper; }}
							initialSlide={initialSlide}
							slidesPerView={1}
							spaceBetween={20}
							navigation={true}
							loop={data.length > 4 ? true : false}
							modules={[FreeMode, Navigation, Thumbs]}
							thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed && windowSize >= 1024 ? thumbsSwiper : null }}
						>
							{data?.map((item, index) => (
								<SwiperSlide key={index}>
									<img className="main-image" src={`/assets/${item}.jpg`} alt="Product Image" />
								</SwiperSlide>
							))}
						</Swiper>
						{windowSize >= 1024 &&
							<Swiper
								className='thumbsSwiper'
								onSwiper={setThumbsSwiper}
								spaceBetween={25}
								slidesPerView={4}
								freeMode={true}
								watchSlidesProgress={true}
								modules={[FreeMode, Navigation, Thumbs]}
							>
								{data?.map((item, index) => (
									<SwiperSlide key={index}>
										<Thumbnail src={`/assets/${item}.jpg`} />
									</SwiperSlide>
								))}
							</Swiper>
						}
					</>
				}
			</div>
		</div>
	)
});

export default Slider