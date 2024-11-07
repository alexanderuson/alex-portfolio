import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/Carousel";
import { certifications } from "@/data/certifications";
import placeholder from "@/assets/placeholder.png";
import Lightbox from "yet-another-react-lightbox";

export default function Certifications() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = certifications.map((char) => ({
    src: char,
  }));

  return (
    <section
      id="certifications"
      className="section-container"
      aria-labelledby="certifications-heading"
    >
      <h1 className="section-header">Certifications</h1>
      <Carousel className="my-2" aria-label="Certifications Carousel">
        <CarouselContent>
          {certifications.map((certificate, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3"
              aria-label={`Certificate ${index + 1}`}
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
                    src={certificate ? certificate : placeholder}
                    alt={`Image of Certificate ${index}`}
                    className="card-image"
                  />
                </div>
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
