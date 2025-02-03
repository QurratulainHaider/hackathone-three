import BestSeller from "@/components/LandingPage/BestSeller";
import ClassicProduct from "@/components/LandingPage/ClassicProduct";
import FeaturedPosts from "@/components/LandingPage/FeaturedPosts";
import Header from "@/components/LandingPage/Header";
import HeroSection from "@/components/LandingPage/HeroSection";
import HeroSection1 from "@/components/LandingPage/HeroSection1";
import NeuralUniverse from "@/components/LandingPage/NeuralUniverse";



export default function Home() {
  return (
    <div className="px-[135px] ">
      <Header />
      <HeroSection />
      <HeroSection1 />
      <BestSeller/>
      <ClassicProduct />
      <NeuralUniverse />
      <FeaturedPosts />
      {/* <ProductsPage/> */}

      
    </div>
  );
}
