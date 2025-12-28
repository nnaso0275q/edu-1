"use client";
import {
  MapPin,
  Building2,
  Landmark,
  School,
  GraduationCap,
  Palette,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type UniversityCardProps = {
  id: number;
  name: string;
  location: string;
  image: string;
  status: "open" | "closing-soon" | "closed";
  minScore: string;
  admissionRate: string | null;
  deadline: string | null;
  nextCycle: string | null;
};


const getIconForUniversity = (name: string) => {
  if (name.includes("Tech")) return Building2;
  if (name.includes("Liberal Arts")) return Landmark;
  if (name.includes("Science")) return School;
  if (name.includes("Business")) return Building2;
  if (name.includes("Arts")) return Palette;
  return GraduationCap;
};

export default function UniversityCard({
  id,
  name,
  location,
  image,
  status,
  minScore,

}: UniversityCardProps) {
  const router = useRouter();
  const Icon = getIconForUniversity(name);

  const handleViewDetails = () => {
    router.push(`/detail/${id}`);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          {status === "open" && (
            <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Open
            </span>
          )}
          {status === "closing-soon" && (
            <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Closing Soon
            </span>
          )}
          {status === "closed" && (
            <span className="bg-slate-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Closed
            </span>
          )}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start gap-3">
          <div className="bg-[#00BCD4]/10 p-2 rounded-lg">
            <Icon className="h-5 w-5 text-[#00BCD4]" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {location}
            </p>
          </div>
        </div>

        <div className="flex justify-between text-sm border-t pt-2">
          <span>Min. Score</span>
          <span className="font-semibold">{minScore}</span>
        </div>




        <Button
          onClick={handleViewDetails}
          variant="outline"
          className="w-full border-[#00BCD4] text-[#00BCD4]"
        >
          View Details
        </Button>
      </div>
    </Card>
  );
}

