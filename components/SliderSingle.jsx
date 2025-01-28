import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function SliderSingle({ data }) {
	return (
		<div className='slider'>
			{data &&
				<Swiper
					slidesPerView={1}
					spaceBetween={0}
					navigation={true}
					modules={[ Navigation ]}
				>
					{data?.map((item, index) => (
						<SwiperSlide key={index}>
							<img className="main-image" src={`/assets/${item}.jpg`} alt="Product Image" />
						</SwiperSlide>
					))}
				</Swiper>
			}
		</div>
	)
}