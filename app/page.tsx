// import Home from "./home/page"
// export default function page (){
//   return (
//     <div>
//       <Home></Home>
//     </div>
//   )
// }

import { Footer } from "react-day-picker";
import { CallToAction } from "./_components/CallToAction";
import { Header } from "./layout/Header";
import { HeroSection } from "./_components/HeroSection";
import { MockUniversities } from "./_components/MockUniversities";
import { PopularUniversities } from "./_components/PopularUniversities";
import { SearchCard } from "./_components/SearchCard";
import UniversityCard from "./_components/UniversityCard";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <main>
        <HeroSection />
        <div className="container mx-auto px-4 -mt-20 relative z-10">
          <SearchCard />
        </div>
        {/* <PopularUniversities /> */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 container mx-auto px-4 my-10">
          {MockUniversities.slice(0, 6).map((uni) => (
            <UniversityCard key={uni.id} {...uni} />
          ))}
        </div>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
