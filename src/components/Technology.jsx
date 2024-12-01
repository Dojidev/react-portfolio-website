import { motion } from "motion/react";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobelightroom } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiFigma } from "react-icons/si";

const iconVariants = (duration) => ({
	intial: { y: -10 },
	animate: {
		y: [10, -10],
		transition: {
			duration: duration,
			ease: "linear",
			repeat: Infinity,
			repeatType: "reverse",
		},
	},
});

const Technology = () => {
	return (
		<div className="border-b border-neutral-800 pb-24">
			<motion.h2
				whileInView={{ y: 0, opacity: 1 }}
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 1.5 }}
				className="my-20 text-center text-4xl"
			>
				Technologies
			</motion.h2>
			<motion.div
				whileInView={{ x: 0, opacity: 1 }}
				initial={{ x: -100, opacity: 0 }}
				transition={{ duration: 1.5 }}
				className="flex flex-wrap items-center justify-center gap-4"
			>
				<motion.div
					variants={iconVariants(1.5)}
					intial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-4"
				>
					<SiAdobephotoshop className="text-7xl text-blue-900" />
				</motion.div>
				<motion.div
					variants={iconVariants(3)}
					intial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-4"
				>
					<SiAdobeillustrator className="text-7xl text-red-900" />
				</motion.div>
				<motion.div
					variants={iconVariants(2)}
					intial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-4"
				>
					<SiAdobelightroom className="text-7xl text-blue-900" />
				</motion.div>
				<motion.div
					variants={iconVariants(4)}
					intial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-4"
				>
					<SiCanva className="text-7xl text-cyan-300" />
				</motion.div>
				<motion.div
					variants={iconVariants(5)}
					intial="initial"
					animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-4"
				>
					<SiFigma className="text-7xl text-neutral-700" />
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Technology;
