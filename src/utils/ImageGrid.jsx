import { HiX } from "react-icons/hi"; // Close icon
import PropTypes from "prop-types"; // Import PropTypes

const ImageSlider = ({
	isOpen,
	images,
	currentIndex,
	onIndexChange,
	onClose,
}) => {
	if (!isOpen) return null; // If the modal is not open, return nothing

	const nextImage = () => {
		const nextIndex =
			currentIndex === images.length - 1 ? 0 : currentIndex + 1;
		onIndexChange(nextIndex); // Update the index without closing the modal
	};

	const prevImage = () => {
		const prevIndex =
			currentIndex === 0 ? images.length - 1 : currentIndex - 1;
		onIndexChange(prevIndex); // Update the index without closing the modal
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-40">
			<div className="relative w-full max-w-4xl">
				{/* Close Button */}
				<button
					onClick={onClose} // Only this button triggers onClose
					className="absolute top-4 right-4 text-white text-2xl z-50"
				>
					<HiX />
				</button>

				{/* Image and Slider Controls */}
				<div className="relative">
					<img
						src={images[currentIndex].image}
						alt={images[currentIndex].title}
						className="w-full h-auto max-h-[80vh] object-contain"
					/>

					{/* Navigation arrows */}
					<button
						onClick={prevImage} // Navigate to the previous image
						className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl"
					>
						&lt;
					</button>
					<button
						onClick={nextImage} // Navigate to the next image
						className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl"
					>
						&gt;
					</button>
				</div>
			</div>
		</div>
	);
};

// Prop validation for ImageSlider
ImageSlider.propTypes = {
	isOpen: PropTypes.bool.isRequired, // The modal visibility state
	images: PropTypes.arrayOf(
		PropTypes.shape({
			image: PropTypes.string.isRequired, // Image URL
			title: PropTypes.string.isRequired, // Title for the image
		}).isRequired
	).isRequired,
	currentIndex: PropTypes.number.isRequired, // Current image index in the slider
	onIndexChange: PropTypes.func.isRequired, // Function to change the index
	onClose: PropTypes.func.isRequired, // Function to close the modal
};

export default ImageSlider;
