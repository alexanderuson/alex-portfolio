import { InView } from "react-intersection-observer";
import { sections } from "./data/sections";
import { Navbar } from "./components/ui/Navbar";
import Hero from "./components/sections/Hero";

export default function App() {
  return (
    <>
      <Hero />
      {sections.map((section, index) => (
        <InView key={index} triggerOnce={true} threshold={0.3}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              aria-label={`${section.label} Section`}
              className={`transition-transform duration-500 ${
                inView
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-10 opacity-0"
              }`}
            >
              <section.component />
            </div>
          )}
        </InView>
      ))}

      <Navbar />
    </>
  );
}
