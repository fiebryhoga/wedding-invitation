import Hero from "./components/Hero";
import SlideCard from "./components/SlideCard";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <main className="pt-12 flex flex-col gap-4">
      <div className="px-4 pb-8">
        <Hero />
      </div>
      <h2 className="font-semibold text-black text-2xl text-center">Our Moment</h2>
      <Carousel />

    </main>
  );
}
