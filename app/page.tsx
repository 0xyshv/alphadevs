import SampleCard from "@/components/SampleCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center gap-8">
      <h1 className="font-figtree text-[#070F2B] font-normal text-4xl">
        AlphaDevs Labs
      </h1>
      <p className="font-figtree font-normal text-lg text-muted-foreground">
        We ship digital products at startup speed.
      </p>
      <SampleCard />
    </main>
  );
}
