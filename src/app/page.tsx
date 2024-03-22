import Hero from "@/components/home/Hero";
import Overview from "@/components/home/Overview";
import Testimonial from "@/components/home/Testimonial";
import Trip from "@/components/home/Trip";

export default function Home() {
  return (
    <div className="min-w-[500px]">
    <Hero />
    <Overview />
    <Trip />
    <Testimonial />
  </div>
  );
}
