import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react";

const About = () => {
	return (
		<div className="border-b border-neutral-900 pb-4">
			<h1 className="my-20 text-center text-4xl">
				About
				<span className="text-neutral-500"> Me</span>
			</h1>
			<div className="flex flex-wrap">
				<div className="w-full lg:w-1/2 lg:p-8">
					<div className="flex items-center justify-center">
						<motion.img
							whileInView={{ x: 0, opacity: 1 }}
							initial={{ x: -100, opacity: 0 }}
							transition={{ duration: 0.5 }}
							className="rounded-2xl"
							src={aboutImg}
							alt=""
						/>
					</div>
				</div>
				<div className="w-full lg:w-1/2 ">
					<div className="flex justify-center lg:justify-start">
						<motion.p
							whileInView={{ x: -0, opacity: 1 }}
							initial={{ x: 100, opacity: 0 }}
							transition={{ duration: 0.5 }}
							className="my-2 max-w-xl py-6 text "
						>
							{ABOUT_TEXT}
						</motion.p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
