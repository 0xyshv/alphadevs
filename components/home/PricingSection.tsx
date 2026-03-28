import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { plans } from "@/constants/home";

export default function PricingSection() {
  return (
    <section className="py-24 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="font-figtree font-semibold text-xs uppercase tracking-widest text-primary">
            Pricing
          </p>
          <h2 className="font-figtree font-bold text-4xl md:text-5xl text-white">
            Simple, transparent pricing
          </h2>
          <p className="font-figtree font-normal text-white/50 max-w-md text-base">
            No hidden fees. Pick the plan that fits where you are today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 w-full">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative transition-all backdrop-blur-sm rounded-2xl border shadow-2xl ${plan.highlighted
                ? "bg-zinc-900/80 border-white/10 hover:border-primary shadow-primary/10"
                : "bg-zinc-900/80 border-white/10 hover:border-primary"
                }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="font-figtree font-semibold px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs">
                    Most popular
                  </span>
                </div>
              )}

              <CardHeader className="gap-1">
                <span className="font-figtree font-semibold text-sm text-primary">{plan.name}</span>
                <span className="font-figtree font-extrabold text-4xl text-white">{plan.price}</span>
                <p className="font-figtree font-normal text-sm text-white/50">{plan.description}</p>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="flex flex-col gap-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      <span className="font-figtree font-normal text-sm text-white/70">{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  variant={plan.highlighted ? "default" : "outline"}
                  className={
                    plan.highlighted
                      ? "w-full font-figtree font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "w-full font-figtree font-medium border-white/10 text-white/70 hover:text-white hover:bg-white/5"
                  }
                >
                  <a href="https://t.me/AlphaDevsOfficial" target="_blank" rel="noopener noreferrer">
                    {plan.cta}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
