import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function SampleCard() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 w-80 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="font-figtree font-semibold text-xs uppercase tracking-widest text-muted-foreground">
          Featured
        </span>
        <Badge>New</Badge>
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="font-figtree font-bold text-xl text-foreground">
          AlphaDevs Labs
        </h2>
        <p className="font-figtree font-normal text-sm text-muted-foreground leading-relaxed">
          We design and ship digital products at startup speed — from idea to
          launch.
        </p>
      </div>

      <div className="h-px bg-border" />

      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm">
          View project
        </Button>
        <Button>Get started</Button>
      </div>
    </div>
  );
}
