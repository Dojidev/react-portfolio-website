import logo from "../assets/WH-logo.svg";
import { FaLinkedin } from "react-icons/fa";

import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
	return (
		<nav className="mb-20 flex items-center justify-between">
			<div className="flex flex-shrink-0 items-start">
				<img className="mx-2 w-10" src={logo} alt="" />
			</div>
			<div className="m-8 flex items-center justify-between py-6 text-2xl">
				<FaLinkedin></FaLinkedin>
				<FaTwitterSquare></FaTwitterSquare>
				<FaInstagram></FaInstagram>
			</div>
		</nav>
	);
};

export default Navbar;
