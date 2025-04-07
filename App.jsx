import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ProductFeatures from "./Components/ProductFeatures";
import WhyChooseUs from "./Components/WhyChooseUs";
import Testimonials from "./Components/Testimonials";
import FAQ from "./Components/FAQ";
import ContactAndSupport from "./Components/Contact&Support";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <Header />
      
      <div id="home">
        <Hero />
      </div>

      <div id="products">
        <ProductFeatures />
      </div>

      <div id="collation">
        <WhyChooseUs />
      </div>

      <Testimonials />

      <div id="faqs">
        <FAQ />
      </div>

      <div id="contact">
        <ContactAndSupport />
      </div>

      <Footer />
    </>
  );
}

export default App;
