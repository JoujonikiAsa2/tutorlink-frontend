import Features from "@/components/modules/home/Features";
import HeroSection from "@/components/modules/home/HeroSection";
import Testimonial from "@/components/modules/home/Testimonial";

const HomePage = async() => {
  return (
    <div>
        <HeroSection/>
        <Features/>
        <Testimonial/>
    </div>
  );
}

export default HomePage