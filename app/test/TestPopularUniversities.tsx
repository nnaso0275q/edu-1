import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, TrendingUp } from "lucide-react";
import Link from "next/link";
import { MockUniversities } from "../_components/MockUniversities";


export const matchColors = {
  strong: "border-primary/50 bg-primary/5",
  possible: "border-accent/50 bg-accent/5",
  "not-eligible": "border-border/50 bg-card",
};

export const matchBadgeColors = {
  strong: "bg-primary/10 text-primary border-primary/20",
  possible: "bg-accent/10 text-accent border-accent/20",
  "not-eligible": "bg-muted text-muted-foreground border-border",
};

export const statusColors = {
  open: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  "closing-soon": "bg-destructive/10 text-destructive border-destructive/20",
  closed: "bg-muted text-muted-foreground border-border",
};

export function PopularUniversities() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Зөвлөсөн их сургуулиуд</h2>
          <p className="text-muted-foreground">
            Таны профайл болон сонголтоор үндэслэн
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/universities">Бүгдийг үзэх</Link>
        </Button>
      </div>

<div className="grid md:grid-cols-2 gap-6">
  {MockUniversities.slice(0, 4).map((uni) => (
    <Card
      key={uni.id}
      className="p-6 transition-all hover:shadow-lg hover:shadow-primary/5"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <img
          src={uni.image || "/placeholder.svg"}
          alt={`${uni.name} логог`}
          className="w-14 h-14 rounded-lg bg-muted"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg mb-1 text-balance">
            {uni.name}
          </h3>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" />
            <span>{uni.location}</span>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant="outline" className={statusColors[uni.status]}>
          {uni.status === "open"
            ? "Элсэлт нээлттэй"
            : uni.status === "closing-soon"
            ? "Ойрын хугацаанд хаагдана"
            : "Хаалттай"}
        </Badge>
      </div>

      {/* Info */}
      <div className="space-y-2 mb-4 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">
            Минимум оноо:
          </span>
          <span className="font-medium">{uni.minScore}</span>
        </div>

        {uni.deadline && (
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              Хаагдах хугацаа:
            </span>
            <span className="font-medium">{uni.deadline}</span>
          </div>
        )}

        {uni.nextCycle && (
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">
              Дараагийн элсэлт:
            </span>
            <span className="font-medium">{uni.nextCycle}</span>
          </div>
        )}
      </div>

      <Button
        className="w-full bg-white border border-[#00BCD4] text-[#00BCD4] gap-2"
        asChild
      >
        <Link href={`/universities/${uni.id}`}>
          <TrendingUp className="w-4 h-4" />
          Дэлгэрэнгүй үзэх
        </Link>
      </Button>
    </Card>
  ))}
</div>

    </section>
  );
}
