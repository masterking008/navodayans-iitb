import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import Join from "./components/Join";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Team />
      <Join />
      <Footer />
    </main>
  );
}
