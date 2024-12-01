import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Technology from "./components/Technology";
import Experience from "./components/Experience";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import Branding from "./components/Branding";
import Marketing from "./components/Marketing";
import Packaging from "./components/Packaging";
import Publication from "./components/Publication";
import Vahicle from "./components/Vahicale";

const App = () => {
	return (
		<div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 min-h-screen relative">
			{/* Background layer */}
			<div className="fixed top-0 left-0 -z-10 h-full w-full bg-neutral-950"></div>
			<div className="fixed top-0 left-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

			{/* Main content */}
			<div className="container mx-auto px-8">
				<Navbar />
				<Hero />
				<About />
				<Technology />
				<Experience />
				<Project />
				<Branding />
				<Marketing />
				<Packaging />
				<Publication />
				<Vahicle />
				<Contact />
			</div>
		</div>
	);
};

export default App;
