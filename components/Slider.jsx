import { forwardRef, useState } from 'react';
import { ImCross } from "react-icons/im";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Thumbnail from './Thumbnail';


const Slider = forwardRef(function Slider({ data, windowSize, initialSlide }, ref) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	function hideSlider() {
		if (windowSize >= 1024) {
			ref.current.classList.remove("is-active");
		}
	}
	return (
		<div ref={ref} className={`slider ${windowSize < 1024 ? 'is-mobile' : ''}`}>
			<div className="slider-cont">
				{windowSize >= 1024 && <div className="icon is-small" onClick={() => hideSlider()}><ImCross /></div>}
				{data &&
					<>
						<Swiper
							initialSlide={initialSlide}
							slidesPerView={1}
							spaceBetween={20}
							navigation={true}
							loop={data.length > 4 ? true : false}
							modules={[FreeMode, Navigation, Thumbs]}
							thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
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
								loop={data.length > 4 ? true : false}
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


// export default function Slider({ data, desktop, ref }) {
// 	const [thumbsSwiper, setThumbsSwiper] = useState(null);

// 	function hideSlider() {
// 		console.log(data);
// 		if(desktop >= 1024) {
// 			ref.current.classList.remove("is-active");
// 		}
// 	}
// 	return (
// 		<div ref={ref} className={`slider ${desktop === false ? 'is-mobile' : ''}`}>
// 			<div className="slider-cont">
// 				{desktop && <div className="icon is-small" onClick={() => hideSlider()}><ImCross /></div>}
// 				{data &&
// 					<>
// 						<Swiper
// 							// initialSlide={currentSlide}
// 							slidesPerView={1}
// 							spaceBetween={20}
// 							navigation={true}
// 							loop={true}
// 							modules={[FreeMode, Navigation, Thumbs]}
// 							thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
// 						>
// 							{data?.map((item, index) => (
// 								<SwiperSlide key={index}>
// 									<img className="main-image" src={`/assets/${item}.jpg`} alt="Product Image" />
// 								</SwiperSlide>
// 							))}
// 						</Swiper>
// 						{desktop &&
// 							<Swiper
// 								className='thumbsSwiper'
// 								// initialSlide={currentSlide}
// 								onSwiper={setThumbsSwiper}
// 								spaceBetween={30}
// 								slidesPerView={4}
// 								freeMode={true}
// 								loop={data >= 4 ? true : false}
// 								watchSlidesProgress={true}
// 								modules={[FreeMode, Navigation, Thumbs]}
// 							>
// 								{data?.map((item, index) => (
// 									<SwiperSlide key={index}>
// 										<img className="main-image" src={`/assets/${item}.jpg`} alt="Product Image" />
// 									</SwiperSlide>
// 								))}
// 							</Swiper>
// 						}
// 					</>
// 				}
// 			</div>
// 		</div>
// 	)
// }