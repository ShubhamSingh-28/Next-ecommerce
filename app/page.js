
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import MainCarousel from "@/components/MainCarousel";
import Navbar from "@/components/Navbar";
import ProductCategory from "@/components/ProductCategory";
import Promo from "@/components/Promo";


export default function Home() {
  return (
<div >
  <Navbar/>
  <Promo/>
  <MainCarousel/>
  <ProductCategory/>
  <Footer/>
</div>
  );
}
