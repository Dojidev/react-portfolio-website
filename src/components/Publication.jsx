import { useState } from "react";
import { motion } from "motion/react";
import { PUBLICATION } from "../constants";
import ImageSlider from "../utils/ImageGrid.jsx"; // Import the reusable ImageSlider component

const Publication = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const openModal = (index) => {
		setCurrentImageIndex(index);
		setIsModalOpen(true); // Open the modal
	};

	const closeModal = () => {
		setIsModalOpen(false); // Close the modal
	};

	return (
		<div className="pb-4">
			<motion.h2
				whileInView={{ y: 0, opacity: 1 }}
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 0.5 }}
				className="my-20 text-center text-4xl"
			>
				Publication
			</motion.h2>

			{/* Image Grid */}
			<div className="flex flex-wrap justify-center gap-6 lg:gap-8 lg:flex-row">
				{PUBLICATION.map((item, index) => (
					<motion.article
						whileInView={{ x: 0, opacity: 1 }}
						initial={{ x: 100, opacity: 0 }}
						transition={{ duration: 0.5 }}
						key={index}
						className="relative flex flex-col items-center justify-center overflow-hidden rounded bg-white shadow-md w-60 h-60 lg:w-64 lg:h-64"
					>
						{/* Image */}
						<img
							src={item.image}
							alt={item.title}
							className="absolute inset-0 w-full h-full object-cover cursor-pointer "
							onClick={() => openModal(index)} // Open modal on image click
							// Open modal on image click
						/>
						{/* Title with background */}
						<div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-black bg-opacity-70">
							<h3 className="text-sm font-medium text-center">
								{item.title}
							</h3>
						</div>
					</motion.article>
				))}
			</div>

			{/* Modal for Image Slider */}
			<ImageSlider
				isOpen={isModalOpen}
				images={PUBLICATION}
				currentIndex={currentImageIndex}
				onClose={closeModal} // Close the modal only when the X button is clicked
				onIndexChange={setCurrentImageIndex} // Update the index when navigating images
			/>
		</div>
	);
};

export default Publication;
