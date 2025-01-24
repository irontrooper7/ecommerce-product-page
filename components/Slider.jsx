import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function Slider({ children, data, currentSlide, state }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	return (
		<div className={`slider ${state == true ? 'is-active' : ''}`}>
			<div className="images-container">
				{children}
				<div className="columns is-flex-wrap-wrap">
					<div className="column is-12">
						{data &&
							<>
								<Swiper
									initialSlide={currentSlide}
									spaceBetween={10}
									navigation={true}
									modules={[FreeMode, Navigation, Thumbs]}
									thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
								>
									{data?.map((item, index) => (
										<SwiperSlide key={index}>
											<img className="main-image" src={`/assets/${item}.jpg`} alt="Product Image" />
										</SwiperSlide>
									))}
								</Swiper>
								<Swiper
									className='thumbsSwiper'
									onSwiper={setThumbsSwiper}
									spaceBetween={10}
									slidesPerView={4}
									freeMode={true}
									watchSlidesProgress={true}
									modules={[FreeMode, Navigation, Thumbs]}
								>
									{data?.map((item, index) => (
										<SwiperSlide key={index}>
											<img className="main-image" src={`/assets/${item}.jpg`} alt="Product Image" />
										</SwiperSlide>
									))}
								</Swiper>
							</>
						}
					</div>
				</div>
			</div>
		</div>
	)
}