import { ImCross } from "react-icons/im";
import SliderSingle from "./SliderSingle";

export default function Gallery({ data }) {
	return (
		<div className="gallery">
			<div className="images-container">
				<div className="columns is-flex-wrap-wrap">
					<SliderSingle data={data} />
				</div>
			</div>
		</div>
	)
}