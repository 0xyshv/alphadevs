import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProjectCardProps {
  image: string;
  name: string;
  tags: string[];
  description: string;
  href: string;
}

export default function ProjectCard({ image, name, tags, description, href }: ProjectCardProps) {
  return (
    <Card className="relative transition-all backdrop-blur-sm rounded-2xl border bg-zinc-900/80 border-white/10 hover:border-primary shadow-2xl overflow-hidden flex flex-col">
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <CardContent className="flex flex-col gap-3 pt-6 flex-1">
        <div className="flex flex-col gap-1">
          <h3 className="font-figtree font-bold text-2xl text-white">{name}</h3>
          <p className="font-figtree font-normal text-sm text-white/50">{tags.join(", ")}</p>
        </div>
        <p className="font-figtree font-normal text-base text-white/70 leading-relaxed">{description}</p>
      </CardContent>

      <CardFooter className="pt-0 pb-6">
        <Button
          asChild
          className="font-figtree font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 gap-2"
        >
          <a href={href} target="_blank" rel="noopener noreferrer">
            Case Study <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
