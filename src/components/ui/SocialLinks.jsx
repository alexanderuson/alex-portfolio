import { socials } from "@/data/socials";

export default function SocialLinks() {
  return (
    <div
      role="list"
      aria-labelledby="socials-heading"
      className="flex flex-wrap gap-4"
    >
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.path}
          role="listitem"
          className="hover:animate-bounceOnce"
          aria-label={`Go to Alexander's Uson ${social.label}`}
        >
          <social.icon size={30} />
        </a>
      ))}
    </div>
  );
}
