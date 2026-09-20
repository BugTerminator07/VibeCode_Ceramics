import HeroSlider from "@/components/Individual/HeroSlider";
import MarqueeTicker from "@/components/Individual/marqueeTicker";
import PopularSection from "@/components/Individual/PopularSection";
import Sustainability from "@/components/Individual/Sustainibility";
import WhyChooseUs from "@/components/Individual/why-choose-us";
import Image from "next/image";

export default function Home() {
  return (
    <div>
    <MarqueeTicker/>
    <HeroSlider/>
    <WhyChooseUs/>
    <PopularSection/>
    <Sustainability/>
    </div>
  );
}
