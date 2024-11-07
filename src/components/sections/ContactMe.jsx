import SocialLinks from "../ui/SocialLinks";

export default function ContactMe() {
  return (
    <section
      id="contact-me"
      className="section-container"
      aria-labelledby="contact-me-heading"
    >
      <h1 className="section-header">Contact Me</h1>
      <p className="my-2 max-w-lg">
        I&apos;m always happy to hear from you. Whether you have questions,
        feedback, or just want to say hi, feel free to reach out, and I&apos;ll
        get back to you as soon as possible.
      </p>

      <p id="email" className="my-2">leso.uson.up@phinmaed.com</p>
      <SocialLinks />
    </section>
  );
}
