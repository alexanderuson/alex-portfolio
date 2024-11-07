import { Carousel, CarouselContent, CarouselItem } from "../ui/Carousel";
import { certifications } from "@/data/certifications";
import placeholder from "@/assets/placeholder.png";

export default function Certifications() {
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
                <div className="card-image-container">
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
    </section>
  );
}
