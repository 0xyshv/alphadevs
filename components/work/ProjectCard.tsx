"use client";
import {
  ArrowRight,
  Bitcoin,
  BrainCircuit,
  Waves,
  ShieldCheck,
  Activity,
  FileSearch2,
  TrendingUp,
  FileText,
  MessageSquareDot,
  ListTodo,
  Bot,
  Network,
  GraduationCap,
  Terminal,
  Trophy,
  Code2,
  ShoppingBag,
  Target,
  ScanSearch,
  Banknote,
  Landmark,
  BarChart2,
  Fingerprint,
  FileSignature,
  MessageSquare,
  Boxes,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProjectType } from "@/constants/work";

const iconMap: Record<string, LucideIcon> = {
  Bitcoin,
  BrainCircuit,
  Waves,
  ShieldCheck,
  Activity,
  FileSearch2,
  TrendingUp,
  FileText,
  MessageSquareDot,
  ListTodo,
  Bot,
  Network,
  GraduationCap,
  Terminal,
  Trophy,
  Code2,
  ShoppingBag,
  Target,
  ScanSearch,
  Banknote,
  Landmark,
  BarChart2,
  Fingerprint,
  FileSignature,
  MessageSquare,
  Boxes,
};

interface ProjectCardProps {
  icon: string;
  name: string;
  tags: string[];
  description: string;
  href: string;
  ctaText?: string;
  type: ProjectType;
}

export default function ProjectCard({
  icon,
  name,
  tags,
  description,
  href,
  ctaText = "View Project",
  type,
}: ProjectCardProps) {
  const Icon = iconMap[icon] ?? Bot;

  return (
    <Card className="relative transition-colors backdrop-blur-sm rounded-2xl border bg-zinc-900/80 border-white/10 hover:border-primary/50 shadow-2xl overflow-hidden flex flex-col md:h-full">
      {/* Top accent line */}
      <div className="absolute top-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent z-10" />

      {/* Icon panel */}
      <div className="flex items-center justify-center w-full h-44 bg-gradient-to-b from-primary/20 to-card border-b border-white/5">
        <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20">
          <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
        </div>
      </div>

      <CardContent className="flex flex-col gap-3 pt-6 flex-1">
        <div className="flex flex-col gap-1">
          <h3 className="font-figtree font-bold text-2xl text-white">{name}</h3>
          <p className="font-figtree font-normal text-sm text-white/50">
            {tags.join(", ")}
          </p>
        </div>
        <p className="font-figtree font-normal text-base text-white/70 leading-relaxed">
          {description}
        </p>
      </CardContent>

      <CardFooter className="pt-0 pb-6">
        <Button
          className="font-figtree font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 gap-2"
          onClick={() => {
            if (href) window.open(href, "_blank", "noopener,noreferrer");
          }}
        >
          {ctaText}
          {type !== "achievements" && <ArrowRight className="w-4 h-4" />}
        </Button>
      </CardFooter>
    </Card>
  );
}
