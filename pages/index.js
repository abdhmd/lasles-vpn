import Hero from "../sections/Hero";
import Features from "../sections/Features";
import Pricing from "../sections/Pricing";
import Huge from "../sections/Huge";
import Testimonials from "../sections/Testimonials";
import Help from "../sections/Help";
export default function Home() {
  return (
    <main className="text-gray-800  ">
      <Hero />
      <Features />
      <div className="bg-gradient-to-b from-gray-50 from-gray-50 via-white">
        <Pricing />
        <Huge />
      </div>
      <Testimonials />
      <Help />
    </main>
  );
}
