
import { Button } from './ui/button'
import { Calendar } from 'lucide-react'

const FinalCta = () => {
  return (
    <section className="relative z-10 w-full max-w-3xl mx-auto mb-20 pt-16">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-figtree font-bold text-4xl md:text-6xl text-white leading-tight">
          Build with experts.
          <br />
          <span className="text-primary">Ship the right product fast.</span>
        </h2>
        <p className="font-figtree font-normal text-white/50 text-lg max-w-md">
          Stop stalling. Let&apos;s turn your idea into a live product together.
        </p>
        <Button
          asChild
          size="lg"
          className="font-figtree font-semibold gap-2 bg-primary hover:bg-primary/90 text-primary-foreground mt-2 px-10"
        >
          <a href="https://t.me/AlphaDevsOfficial" target="_blank" rel="noopener noreferrer" className='font-figtree'>
            <Calendar className="w-4 h-4" />
            Book a Free Consultation
          </a>
        </Button>
      </div>
    </section>
  )
}

export default FinalCta