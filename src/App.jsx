import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technology from "./components/Technology";

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
        <Technology/>
      </div>
    </div>
  );
};

export default App;
