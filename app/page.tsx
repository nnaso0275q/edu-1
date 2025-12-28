import { Footer } from "./layout/Footer"
import { CallToAction } from "./_components/CallToAction";
import { Header } from "./layout/Header";
import { HeroSection } from "./_components/HeroSection";

import { SearchCard } from "./_components/SearchCard";
import { PopularUniversities } from "./_components/PopularUniversities";


export default function Home() {
  return (
    <div>
      <Header></Header>
      <main>
        <HeroSection />
        <div className="container mx-auto px-4 -mt-20 relative z-10">
          <SearchCard />
        </div>
        <PopularUniversities />
        <CallToAction />
      </main>
      <Footer></Footer>
    </div>
  );
}
