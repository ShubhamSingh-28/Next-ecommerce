
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import MainCarousel from "@/components/MainCarousel";
import Navbar from "@/components/Navbar";
import ProductCategory from "@/components/ProductCategory";


export default function Home() {
  return (
<div >
  <Navbar/>
  <Banner/>
  <MainCarousel/>
  <ProductCategory/>
  <Footer/>
</div>
  );
}
