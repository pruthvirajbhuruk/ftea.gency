import Header from "./components/Header";
import Promo from "./components/Promo";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <>
      <CustomCursor />
      <Hero />
      <Header />
      <Promo />
      <Services/>
      <Footer />
      
    </>
  );
}
