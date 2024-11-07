import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/Carousel";
import { projects } from "@/data/projects";
import placeholder from "@/assets/placeholder.png";
import Lightbox from "yet-another-react-lightbox";

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = projects.map((char) => ({
    src: char.image,
  }));

  return (
    <section
      id="projects"
      className="section-container"
      aria-labelledby="projects-heading"
    >
      <h1 className="section-header">Projects</h1>
      <Carousel className="my-2" aria-label="Project Carousel">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3"
              aria-label={`Project ${index + 1}: ${project.title}`}
            >
              <div className="card">
                <div
                  className="card-image-container"
                  onClick={() => {
                    setCurrentIndex(index);
                    setOpen(true);
                  }}
                >
                  <img
                    src={project.image ? project.image : placeholder}
                    alt={`Image of ${project.title}`}
                    className="card-image"
                  />
                </div>
                <h2 className="card-title">{project.title}</h2>
                <p className="text-sm">{project.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images}
          index={currentIndex}
          onIndexChange={setCurrentIndex}
        />
      )}
    </section>
  );
}
