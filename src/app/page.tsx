import { BestProduct } from "@/components/BestProduct";
import ClassicProduct from "@/components/ClassicProduct";
import FeaturedPosts from "@/components/FeaturedPosts";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HeroSection1 from "@/components/HeroSection1"
import NeuralUniverse from "@/components/NeuralUniverse";



export default function Home() {
  return (
    <div className="px-[135px] ">
      

       <Header/>
       <HeroSection1/>
       <HeroSection />
       <BestProduct/> 
       <ClassicProduct/>
       <NeuralUniverse/>
       <FeaturedPosts/>
       
     
    </div>
  );
}
