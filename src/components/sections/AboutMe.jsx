import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar";
import Skills from "../ui/Skills";
import avatar from "@/assets/avatar.png";

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="section-container"
      aria-labelledby="about-me-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <article className="order-2 lg:order-1">
          <h1 className="section-header">About Me</h1>
          <p className="my-2 max-w-lg">
            I work hard for my dreams which provides me with ample opportunities
            to improve my skill to learn and growth along with organization
            goals. Life is an ongoing adventure of learning, so I approach life
            with an open mind and a thirst for knowledge.
          </p>
          <Skills />
        </article>
        <Avatar className="w-full h-full bg-gradiant max-w-[300px] max-h-[300px] m-auto gap-4 order-1 lg:order-2">
          <AvatarImage src={avatar} alt="Picture of Alexander Soriano" />
          <AvatarFallback>AU</AvatarFallback>
        </Avatar>
      </div>
    </section>
  );
}
