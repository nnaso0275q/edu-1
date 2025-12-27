import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MockUniversities } from "./MockUniversities";

export function PopularUniversities() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Popular Universities
            </h2>
            <p className="text-muted-foreground">
              Explore top-rated institutions currently accepting applications.
            </p>
          </div>
          <Link
            href="/universities"
            className="text-[#00BCD4] hover:text-[#00ACC1] flex items-center gap-1 font-semibold"
          >
            View All Universities
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {MockUniversities.slice(0, 6).map((university) => (
            <div key={university.id}>
              {/* энд card component чинь орно */}
              <h3 className="font-semibold">{university.name}</h3>
              <p className="text-sm text-muted-foreground">
                {university.location}
              </p>
            </div>

            // <UniversityCard key={university.id} university={university} />
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-3 border-2 border-slate-300 rounded-lg font-semibold text-foreground hover:bg-slate-50 transition-colors">
            Load More Universities
          </button>
        </div>
      </div>
    </section>
  );
}
