import { scroller } from "react-scroll";
import { Button } from "../ui/Button";
import RetroGrid from "../ui/RetroGrid";
import TypingAnimation from "../ui/typing-animation";

export default function Hero() {
  return (
    <section id="hero" className="relative hero" aria-labelledby="hero-heading">
      <article className="z-10 hero-content text-center">
        <h1 className="text-4xl font-semibold leading-none tracking-tighter">
          Hi <span className="animate-bounce">👋</span> I&apos;m Alexander Uson
        </h1>
        <TypingAnimation
          text="Web Developer"
          className="text-gradiant text-center text-7xl font-bold leading-none tracking-tighter"
        />

        <p className="my-2">
          A 22-year-old BSIT student at PHINMA University of Pangasinan.
        </p>
        <div className="flex flex-wrap gap-2">
          <a
            href="/ALEXANDER_USON_CV.pdf"
            aria-label="Download Alexander Uson's CV"
            download
          >
            <Button>Download CV</Button>
          </a>
          <Button
            variant="outline"
            aria-label="Scroll to Contact Me section"
            onClick={() =>
              scroller.scrollTo("contact-me", {
                smooth: true,
                duration: 500,
                offset: -50,
              })
            }
          >
            Contact Me
          </Button>
        </div>
      </article>

      <RetroGrid />
    </section>
  );
}
